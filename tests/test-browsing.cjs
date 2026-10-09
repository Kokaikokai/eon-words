const fs = require('node:fs');
const path = require('node:path');
const ROOT = path.resolve(__dirname, '..');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const elements = new Map(), storage = new Map(), played = [];
function element(id) {
  if (!elements.has(id)) elements.set(id, {
    innerHTML: '', textContent: '', checked: false, dataset: {},
    classList: { values: new Set(id === 'modal' ? ['hidden'] : []), contains(v) { return this.values.has(v); }, add(v) { this.values.add(v); }, remove(v) { this.values.delete(v); } },
    addEventListener() {}, setAttribute(k,v) { this[k] = v; }, focus() {},
    querySelector() { return null; }, querySelectorAll() { return []; },
    click() { this.onclick?.(); },
  });
  return elements.get(id);
}
storage.set('card-tags', JSON.stringify({'人': {unfamiliar: true}}));
const context = vm.createContext({
  console, setTimeout, clearTimeout,
  document: {documentElement: {}, getElementById: element, querySelector: element, querySelectorAll: () => [], addEventListener() {}, body: element('body')},
  navigator: {}, Image: class {}, window: {addEventListener() {}},
  localStorage: {getItem: k => storage.get(k), setItem: (k,v) => storage.set(k,v)},
  Audio: class { constructor(src) { this.src = src; } pause() {} play() { played.push(this); return Promise.resolve(); } },
});
const entry = fs.readFileSync(path.join(ROOT, 'data.js'), 'utf8');
const categoryFiles = JSON.parse(entry.match(/const CARD_DATA_FILES = (\[.*?\]);/s)[1]);
vm.runInContext(categoryFiles.map(file => fs.readFileSync(path.join(ROOT, file), 'utf8')).join('\n') + '\n' + entry + '\n' + fs.readFileSync(path.join(ROOT, 'app.js'),'utf8'), context);
const run = code => vm.runInContext(code, context);
const tick = () => new Promise(r => setImmediate(r));
(async () => {
  assert(run('CHARACTERS.length > 0'));
  assert(run("['thumb','screen','print'].every(mode => !picHTML(CHARACTERS[0],mode).includes('.png') && picHTML(CHARACTERS[0],mode).includes('.webp'))"));
  assert(run('new Set(CHARACTERS.map(c => c.id)).size === CHARACTERS.length'));
  assert(run("CHARACTERS.every(c => /^[a-f0-9]{12}$/.test(c.id))"));
  assert.equal(run('state.list.length'), run('CHARACTERS.length'));
  assert(run('CHARACTERS.every(c => matchesCategory(c, c.cat))'));
  assert(run('CHARACTERS.every(c => !c.subcat || matchesCategory(c, c.cat, c.subcat))'));
  assert(run("CATEGORY_TRANSLATIONS.every(row => { state.mode='zh-CN'; return t(row.id) === row.zh; })"));
  assert.equal(run('state.japaneseDisplay'), 'both');
  assert(run("state.tags[CHARACTERS.find(c => c.zh === '人').id].unfamiliar"));
  assert(run("!state.tags['人']"));
  run('state.tags = {}');
  assert(run("CHARACTERS.every(c => c.jaRuby.map(p => p.reading || p.text).join('') === c.ja && c.jaRuby.map(p => p.text).join('') === c.jaWritten)"));
  const school = run("CHARACTERS.find(c => c.jaWritten === '学校')");
  context.rubyTestCard = school;
  assert.equal(run('japaneseHTML(rubyTestCard)'), '<ruby>学校<rp>（</rp><rt>がっこう</rt><rp>）</rp></ruby>');
  run("state.japaneseDisplay='kanji'");
  assert.equal(run('japaneseHTML(rubyTestCard)'), '学校');
  run("state.japaneseDisplay='kana'");
  assert.equal(run('japaneseHTML(rubyTestCard)'), 'がっこう');
  run("state.japaneseDisplay='both'");
  assert(run("CHARACTERS.every(c => typeof c.es === 'string' && c.es.length && !/[\\u4e00-\\u9fff]/.test(c.es))"));
  assert(run('Object.values(UI_TRANSLATIONS).every(values => values.length === 3 && values.every(Boolean))'));
  for (const mode of ['zh-CN','en-US','ja-JP','es-MX']) {
    run(`state.mode = '${mode}'; renderInterface(); renderTabs()`);
    assert.equal(run('document.documentElement.lang'), mode);
    assert.equal(element('japaneseDisplay').hidden, mode !== 'ja-JP');
    if (mode !== 'zh-CN') {
      assert(run("CATEGORY_TRANSLATIONS.every(row => ['zh', 'en', 'ja', 'es'].every(lang => row[lang]))"));
      assert(!/[\u4e00-\u9fff]/.test(run("t('共 {n} 张卡片', {n: 556})")) || mode === 'ja-JP');
      assert(element('tabs').innerHTML.includes({'en-US':'Animals','ja-JP':'動物','es-MX':'Animales'}[mode]));
      assert(run("tagsHTML(CHARACTERS[0])").includes({'en-US':'Favorites','ja-JP':'お気に入り','es-MX':'Favoritos'}[mode]));
    }
    run(`state.mode = '${mode}'; openModal(0)`);
    assert.equal(run('languageOrder()[0]'), mode);
    assert.equal(run('new Set(languageOrder()).size'), 4);
    assert.equal(played.at(-1).src, run('`audio/${AUDIO_DIR[state.mode]}/${encodeURIComponent(audioKey(state.list[0],state.mode))}.mp3`'));
    assert(!element('modalCard').innerHTML.includes('word-chip'));
  }
  for (const [mode, directory] of [['zh-CN', 'zh'], ['en-US', 'en'], ['ja-JP', 'ja'], ['es-MX', 'es']]) {
    run(`state.mode = '${mode}'; setAutoPlay(true); openModal(0)`);
    const start = played.length - 1;
    played.at(-1).onended(); await tick();
    assert.deepEqual(played.slice(start).map(a=>a.src.split('/')[1]), [directory]);
    assert.notEqual(run('autoTimer'), null);
    run('setAutoPlay(false)');
  }
  run('setAutoPlay(true); openModal(0)');
  const old = played.at(-1);
  run("$('modalNext').click()");
  assert.equal(old.onended, null);
  run("$('modalClose').click()");
  assert.equal(run('autoPlaying'), false);
  assert.equal(run('currentAudio'), null);
  run("state.mode='zh-CN'; toggleTag(CHARACTERS[0], 'favorite')");
  assert(storage.get('card-tags').includes('favorite'));
  run("state.tagFilter='favorite'; renderGrid()");
  assert.equal(run('state.list.length'), 1);
  run("openModal(0); toggleTag(state.list[0], 'hidden')");
  assert.equal(run('state.list.length'), 0);
  assert(element('modal').classList.contains('hidden'));
  run("state.tagFilter='hidden'; renderGrid()");
  assert.equal(run('state.list.length'), 1);
  run("toggleTag(state.list[0], 'hidden'); state.tagFilter='all'; renderGrid()");
  assert(run('CHARACTERS.length > 0'));
  assert.equal(run('state.list.length'), run('CHARACTERS.length'));
  const round = run('(()=>{const d=createRandomBrowse();d.visit(0,50);return [0,...Array.from({length:49},()=>d.next(50))]})()');
  assert.equal(new Set(round).size, 50);
  console.log('PASS: language modes, audio order, autoplay cancellation, tags, hiding/restoring, random nonrepeat');
})().catch(e => { console.error(e); process.exitCode=1; }).finally(()=>run('setAutoPlay(false)'));
