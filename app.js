// Two-level categories; each card has one primary and optional extra subcategories.
const CATEGORY_TREE = Object.fromEntries(
  CATEGORY_DEFINITIONS.filter(c => c.parent === null).map(c =>
    [c.id, CATEGORY_DEFINITIONS.filter(sub => sub.parent === c.id).map(sub => sub.id)])
);
const CATEGORY_LABELS = Object.fromEntries(CATEGORY_TRANSLATIONS.map(c => [c.id, c]));
const CATEGORIES = ["全部", ...Object.keys(CATEGORY_TREE)];
const categoriesOf = c => [c.subcat, ...(c.extraCats || [])];
function matchesCategory(c, major, minor = "全部") {
  if (major === "全部") return true;
  if (!CATEGORY_TREE[major].length) return c.cat === major;
  const memberships = categoriesOf(c);
  return minor === "全部"
    ? c.cat === major || CATEGORY_TREE[major].some(sub => memberships.includes(sub))
    : CATEGORY_TREE[major].includes(minor) && memberships.includes(minor);
}

const UI_TRANSLATIONS = {
  "Eon Words": [
    "Eon Words",
    "Eon Words",
    "Eon Words"
  ],
  "看图片 · 听发音 · 认识世界": [
    "Look, listen and discover",
    "見て・聞いて・学ぼう",
    "Mira · Escucha · Descubre el mundo"
  ],
  "打印": [
    "Print",
    "印刷",
    "Imprimir"
  ],
  "语言模式": [
    "Language",
    "言語",
    "Idioma"
  ],
  "卡片筛选": [
    "Show cards",
    "カード表示",
    "Filtrar tarjetas"
  ],
  "全部（不含隐藏）": [
    "All visible cards",
    "非表示以外すべて",
    "Todas (excepto ocultas)"
  ],
  "喜爱": [
    "Favorites",
    "お気に入り",
    "Favoritos"
  ],
  "陌生": [
    "Unfamiliar",
    "まだ知らない",
    "Por aprender"
  ],
  "隐藏": [
    "Hidden",
    "非表示",
    "Ocultas"
  ],
  "自动播放": [
    "Autoplay",
    "自動再生",
    "Reproducción automática"
  ],
  "暂停": [
    "Pause",
    "一時停止",
    "Pausar"
  ],
  "探索分类": [
    "Explore categories",
    "カテゴリー",
    "Explorar categorías"
  ],
  "浏览设置": [
    "Browsing settings",
    "表示設定",
    "Opciones de navegación"
  ],
  "大类": [
    "Categories",
    "大分類",
    "Categoría"
  ],
  "小类": [
    "Subcategories",
    "小分類",
    "Subcategoría"
  ],
  "识字卡详情": [
    "Card details",
    "カード詳細",
    "Detalle de la tarjeta"
  ],
  "随机翻阅": [
    "Shuffle",
    "シャッフル",
    "Orden aleatorio"
  ],
  "关闭": [
    "Close",
    "閉じる",
    "Cerrar"
  ],
  "上一张": [
    "Previous card",
    "前のカード",
    "Anterior"
  ],
  "下一张": [
    "Next card",
    "次のカード",
    "Siguiente"
  ],
  "打印卡片": [
    "Print cards",
    "カードを印刷",
    "Imprimir tarjetas"
  ],
  "取消": [
    "Cancel",
    "キャンセル",
    "Cancelar"
  ],
  "每页 1 张": [
    "1 card per page",
    "1ページに1枚",
    "1 tarjeta por página"
  ],
  "每页 4 张": [
    "4 cards per page",
    "1ページに4枚",
    "4 tarjetas por página"
  ],
  "大卡片": [
    "Large cards",
    "大きいカード",
    "Tarjetas grandes"
  ],
  "小卡片": [
    "Small cards",
    "小さいカード",
    "Tarjetas pequeñas"
  ],
  "播放音效": [
    "Play sound",
    "効果音を再生",
    "Reproducir sonido"
  ],
  "停止音效": [
    "Stop sound",
    "効果音を停止",
    "Detener sonido"
  ],
  "音效暂不可用 · 重试": [
    "Sound unavailable · Retry",
    "効果音を再試行",
    "Sonido no disponible · Reintentar"
  ],
  "朗读失败 · 重试": [
    "Audio failed · Retry",
    "読み上げを再試行",
    "No se pudo reproducir · Reintentar"
  ],
  "当前类别没有卡片": [
    "No matching cards",
    "該当するカードはありません",
    "No hay tarjetas en esta categoría"
  ],
  "共 {n} 张卡片": [
    "{n} cards",
    "カード {n} 枚",
    "{n} tarjetas"
  ],
  "查看 {name}": [
    "View {name}",
    "{name}を見る",
    "Ver {name}"
  ],
  "打印 {n} 张卡片：{category}": [
    "Print {n} cards: {category}",
    "{category}：{n}枚を印刷",
    "Imprimir {n} tarjetas: {category}"
  ],
  "浏览器无法保存设置，本次使用仍然有效": [
    "Settings cannot be saved in this browser.",
    "設定を保存できません。この画面では有効です。",
    "El navegador no puede guardar las opciones; se aplicarán durante esta sesión"
  ],
  "全部": [
    "All",
    "すべて",
    "Todas"
  ]
};
function t(key, values = {}) {
  const category = CATEGORY_LABELS[key];
  if (category) return category[{'zh-CN': 'zh', 'en-US': 'en', 'ja-JP': 'ja', 'es-MX': 'es'}[state.mode]];
  let text = state.mode === 'zh-CN' ? key : (UI_TRANSLATIONS[key]?.[{'en-US': 0, 'ja-JP': 1, 'es-MX': 2}[state.mode]] || key);
  return text.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? '');
}
Object.assign(UI_TRANSLATIONS, {
  '日文显示': ['Japanese text', '日本語の表示', "Texto japonés"],
  '汉字和假名': ['Kanji + kana', '漢字＋ふりがな', "Kanji y kana"],
  '只显示汉字': ['Kanji only', '漢字のみ', "Solo kanji"],
  '只显示假名': ['Kana only', 'かなのみ', "Solo kana"],
});
function renderInterface() {
  document.documentElement.lang = state.mode;
  document.title = t('Eon Words');
  $('japaneseDisplay').hidden = state.mode !== 'ja-JP';
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
}

const state = {
  cat: "全部",
  subcat: "全部",
  list: CHARACTERS,
  index: 0,
};

// A shuffled deck per round, plus history for previous/next navigation.
function createRandomBrowse() {
  let remaining = [], history = [], position = -1;
  const shuffle = values => {
    for (let i = values.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [values[i], values[j]] = [values[j], values[i]];
    }
    return values;
  };
  return {
    reset() { remaining = []; history = []; position = -1; },
    visit(index, count) {
      if (position < 0) {
        remaining = shuffle(Array.from({length: count}, (_, i) => i).filter(i => i !== index));
      } else if (history[position] === index) return;
      else remaining = remaining.filter(i => i !== index);
      history = history.slice(0, position + 1);
      history.push(index);
      position++;
    },
    next(count) {
      if (!count || position < 0) return null;
      if (position < history.length - 1) return history[++position];
      if (!remaining.length) {
        remaining = shuffle(Array.from({length: count}, (_, i) => i));
        // Avoid repeating the last card at the boundary between rounds.
        if (count > 1 && remaining[remaining.length - 1] === history[position]) {
          [remaining[0], remaining[count - 1]] = [remaining[count - 1], remaining[0]];
        }
      }
      const next = remaining.pop();
      history.push(next);
      position++;
      return next;
    },
    previous() { return position > 0 ? history[--position] : history[position] ?? null; },
  };
}
const randomBrowse = createRandomBrowse();

const $ = id => document.getElementById(id);
const zh = c => c.zh;
const zhPinyin = c => c.zhPinyin;
const LANGUAGE_NAMES = { 'zh-CN': '中文', 'en-US': 'English', 'ja-JP': '日本語', 'es-MX': 'Español' };
function readSaved(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function saveSetting(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { $('filterStatus').textContent = t('浏览器无法保存设置，本次使用仍然有效'); }
}
state.mode = readSaved('card-language', 'zh-CN');
if (!LANGUAGE_NAMES[state.mode]) state.mode = 'zh-CN';
state.tags = readSaved('card-tags', {});
if (!state.tags || typeof state.tags !== 'object' || Array.isArray(state.tags)) state.tags = {};
if (readSaved('card-tags-name-version', 0) !== 1) {
  // Preserve tags stored under names used before zh became canonical.
  const legacyTagNames = {"爸爸": "爸", "妈妈": "妈", "爷爷": "爷", "奶奶": "奶", "哥哥": "哥", "姐姐": "姐", "弟弟": "弟", "妹妹": "妹", "叔叔": "叔", "阿姨": "姨", "老师": "师", "眉毛": "眉", "眼睛": "眼", "耳朵": "耳", "鼻子": "鼻", "舌头": "舌", "肩膀": "肩", "手指": "指", "肚子": "肚", "高兴": "乐", "害怕": "怕", "着急": "急", "痛": "疼", "睡觉": "睡", "穿衣": "穿", "脱衣": "脱", "游泳": "游", "唱歌": "唱", "拍手": "拍", "吹气": "吹", "帮忙": "帮", "谢谢": "谢", "房子": "房", "桌子": "桌", "椅子": "椅", "被子": "被", "枕头": "枕", "镜子": "镜", "衣服": "衣", "裤子": "裤", "袜子": "袜", "帽子": "帽", "闹钟": "钟", "杯子": "杯", "毛巾": "巾", "牙刷": "刷", "苹果": "果", "生梨": "梨", "桃子": "桃", "李子": "李", "枣子": "枣", "柿子": "柿", "橘子": "橘", "柚子": "柚", "草莓": "莓", "樱桃": "樱", "西瓜": "瓜", "椰子": "椰", "蔬菜": "菜", "茄子": "茄", "萝卜": "萝", "红薯": "薯", "竹笋": "笋", "蘑菇": "菇", "面条": "面", "包子": "包", "饺子": "饺", "饼干": "饼", "蛋糕": "糕", "果汁": "汁", "糖果": "糖", "棒冰": "冰棒", "蜂蜜": "蜜", "老鼠": "鼠", "大象": "象", "老虎": "虎", "狮子": "狮", "狐狸": "狐", "鲸鱼": "鲸", "螃蟹": "蟹", "青蛙": "蛙", "蝴蝶": "蝶", "蜜蜂": "蜂", "蚂蚁": "蚁", "树林": "林", "竹子": "竹", "树根": "根", "树枝": "枝", "叶子": "叶", "木头": "木", "天空": "天", "太阳": "日", "月亮": "月", "星星": "星", "晴天": "晴", "阴天": "阴", "打雷": "雷", "彩虹": "虹", "石头": "石", "泥": "土", "沙子": "沙", "大海": "海", "汽车": "车", "飞机": "机", "马路": "路", "车站": "站", "车轮": "轮", "学校": "校", "公园": "园", "商店": "店", "图书馆": "馆", "院子": "院", "街道": "街", "村子": "村", "城市": "城", "时间": "时", "早上": "早", "晚上": "晚", "昨天": "昨", "今天": "今", "明天": "明", "春天": "春", "夏天": "夏", "秋天": "秋", "冬天": "冬", "形状": "形", "圆形": "圆", "方形": "方", "三角形": "角", "直线": "直", "曲线": "弯", "上面": "上", "下面": "下", "前面": "前", "后面": "后", "左边": "左", "右边": "右", "里面": "里", "外面": "外", "中间": "中"};
  const oldTags = state.tags;
  state.tags = {};
  for (const card of CHARACTERS) {
    const name = zh(card);
    const tags = {...oldTags[legacyTagNames[name]], ...oldTags[name]};
    if (Object.keys(tags).length) state.tags[name] = tags;
  }
  saveSetting('card-tags', state.tags);
  saveSetting('card-tags-name-version', 1);
}

if (readSaved('card-tags-id-version', 0) !== 1) {
  const oldTags = state.tags;
  state.tags = {};
  for (const card of CHARACTERS) {
    const tags = {...oldTags[card.zh], ...oldTags[card.id]};
    if (Object.keys(tags).length) state.tags[card.id] = tags;
  }
  saveSetting('card-tags', state.tags);
  saveSetting('card-tags-id-version', 1);
}

state.tagFilter = 'all';
state.japaneseDisplay = readSaved('card-japanese-display', 'both');
if (!['both', 'kanji', 'kana'].includes(state.japaneseDisplay)) state.japaneseDisplay = 'both';
const TAG_NAMES = {favorite: '喜爱', unfamiliar: '陌生', hidden: '隐藏'};
const TAG_ICONS = {
  favorite: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  unfamiliar: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.7c-1.1.8-1.8 1.1-1.8 2.8M12 17h.01"/>',
  hidden: '<path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.2A11 11 0 0 1 12 5c7 0 10 7 10 7a17 17 0 0 1-3 4M6.2 6.2A18 18 0 0 0 2 12s3 7 10 7a11 11 0 0 0 5.8-1.8"/>',
};
const languageOrder = () => [state.mode, ...Object.keys(LANGUAGE_NAMES).filter(l => l !== state.mode)];
const languageText = (c, lang) => lang === 'zh-CN' ? zh(c) : lang === 'en-US' ? c.en : lang === 'es-MX' ? c.es : c.ja;
const audioKey = (c, lang) => c.audio?.[AUDIO_DIR[lang]] || (lang === 'ja-JP' ? c.jaAudio : languageText(c, lang));
const escapeHTML = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[ch]));
function japaneseHTML(c) {
  if (state.japaneseDisplay === 'kana') return escapeHTML(c.ja);
  if (state.japaneseDisplay === 'kanji') return escapeHTML(c.jaWritten || c.ja);
  return (c.jaRuby || [{text: c.ja}]).map(part => part.reading
    ? `<ruby>${escapeHTML(part.text)}<rp>（</rp><rt>${escapeHTML(part.reading)}</rt><rp>）</rp></ruby>`
    : escapeHTML(part.text)).join('');
}
function languageHTML(c, lang) { return lang === 'ja-JP' ? japaneseHTML(c) : escapeHTML(languageText(c, lang)); }
function matchesTags(c) {
  const tags = state.tags[c.id] || {};
  if (state.tagFilter === 'hidden') return !!tags.hidden;
  return !tags.hidden && (state.tagFilter === 'all' || !!tags[state.tagFilter]);
}
function tagsHTML(c) {
  return `<div class="card-tags">${Object.entries(TAG_NAMES).map(([tag, name]) => `<button type="button" data-tag="${tag}" aria-label="${t(name)}" title="${t(name)}" aria-pressed="${!!state.tags[c.id]?.[tag]}"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${TAG_ICONS[tag]}</svg></button>`).join('')}</div>`;
}
function translationHTML(c) {
  return languageOrder().slice(1).map(lang => `<button class="trans-row" data-speak="${escapeHTML(languageText(c, lang))}" data-lang="${lang}" data-audio="${escapeHTML(audioKey(c, lang))}" lang="${lang}"><span class="lang-tag">${LANGUAGE_NAMES[lang]}</span><span>${languageHTML(c, lang)}${lang === 'zh-CN' ? `<small class="translation-pinyin">${escapeHTML(zhPinyin(c))}</small>` : ''}</span></button>`).join('');
}
function pinyinHTML(c) { return state.mode === 'zh-CN' ? `<div class="py">${escapeHTML(zhPinyin(c))}</div>` : ''; }
function soundButtonHTML(c) {
  if (!c.soundEffect) return '';
  return `<button type="button" class="sound-btn" data-sound="${c.soundEffect}" aria-label="${t('播放音效')}" aria-pressed="false">${t('播放音效')}</button>`;
}
function titleHTML(c) {
  const text = languageText(c, state.mode);
  const length = [...text].length;
  const size = length > 2 ? "long-word" : text.length > 1 ? "word-title" : "";
  return `<span lang="${state.mode}" style="--title-length: ${length}" class="hanzi ${state.mode === 'zh-CN' ? size + (length >= 4 ? ' extended-word' : '') : 'foreign-title'}">${languageHTML(c, state.mode)}</span>`;
}

/* Public media uses WebP; PNG sources remain local. */
function picHTML(entry, mode = 'thumb') {
  const key = encodeURIComponent(entry.image || zh(entry));
  const variant = mode === 'print' ? 'screen' : mode;
  const src = `images/${variant}/${key}.webp`;
  const fallback = `images/${variant === 'thumb' ? 'screen' : 'thumb'}/${key}.webp`;
  const datePicture = ['昨天', '今天', '明天'].includes(zh(entry));
  return `<span class="pic${datePicture ? ' date-picture' : ''}">
    <img src="${src}" alt="" width="240" height="240"
         loading="${mode === 'thumb' ? 'lazy' : 'eager'}" decoding="async"
         onload="this.parentElement.classList.add('has-img')"
         onerror="if (!this.dataset.fallback) { this.dataset.fallback='1'; this.src='${fallback}'; } else { this.remove(); }">
  </span>`;
}

function relativeDateHTML(card) {
  const offsets = {'昨天': -1, '今天': 0, '明天': 1};
  const offset = offsets[zh(card)];
  if (offset === undefined) return '';
  const today = new Date();
  const relative = new Intl.RelativeTimeFormat(state.mode, {numeric: 'auto'});
  const cells = [-1, 0, 1].map(dayOffset => {
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + dayOffset, 12);
    const dateTime = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    const month = new Intl.DateTimeFormat(state.mode, {month: 'short'}).format(date);
    const weekday = new Intl.DateTimeFormat(state.mode, {weekday: 'short'}).format(date);
    const fullDate = new Intl.DateTimeFormat(state.mode, {dateStyle: 'full'}).format(date);
    return `<time class="date-day${dayOffset === offset ? ' selected' : ''}" datetime="${dateTime}" aria-label="${escapeHTML(relative.format(dayOffset, 'day') + ': ' + fullDate)}"><span class="date-label">${escapeHTML(relative.format(dayOffset, 'day'))}</span><span class="date-month">${escapeHTML(month)}</span><strong class="date-number">${date.getDate()}</strong><span class="date-weekday">${escapeHTML(weekday)}</span></time>`;
  }).join('');
  return `<span class="date-timeline" data-day="${offset}" lang="${state.mode}">${cells}</span>`;
}

/* ---------- tabs & grid ---------- */
function renderTabs() {
  $("tabs").innerHTML = CATEGORIES.map(c =>
    `<button class="${c === state.cat ? "active" : ""}" data-cat="${c}" aria-pressed="${c === state.cat}">${t(c)}</button>`
  ).join("");
  const subs = CATEGORY_TREE[state.cat] || [];
  $("subtabs").hidden = subs.length === 0;
  $("subtabs").innerHTML = subs.length === 0 ? "" : ["全部", ...subs].map(sub =>
    `<button class="${sub === state.subcat ? "active" : ""}" data-subcat="${sub}" aria-pressed="${sub === state.subcat}">${t(sub)}</button>`
  ).join("");
}

function renderGrid() {
  const nextList = CHARACTERS.filter(c =>
    matchesCategory(c, state.cat, state.subcat) && matchesTags(c)
  );
  if (nextList.length !== state.list.length || nextList.some((c, i) => c !== state.list[i])) randomBrowse.reset();
  state.list = nextList;
  $("filterStatus").textContent = state.list.length
    ? t('共 {n} 张卡片', {n: state.list.length})
    : t('当前类别没有卡片');
  $("printBtn").disabled = state.list.length === 0;
  $('startAuto').disabled = state.list.length === 0;

  $("grid").innerHTML = state.list.map((c, i) => `
    <div class="card" data-i="${i}"><button class="card-open" aria-label="${escapeHTML(t('查看 {name}', {name: languageText(c, state.mode)}))}">
      ${picHTML(c)}
      ${relativeDateHTML(c)}
      ${titleHTML(c)}
      ${pinyinHTML(c)}</button>
      ${soundButtonHTML(c)}
      ${tagsHTML(c)}
      ${window.cardEditButton?.(c) || ''}
    </div>`
  ).join("");
}

$("tabs").addEventListener("click", e => {
  const btn = e.target.closest("button");
  if (!btn) return;
  stopAudio();
  state.cat = btn.dataset.cat;
  state.subcat = "全部";
  renderTabs();
  renderGrid();
});

$("subtabs").addEventListener("click", e => {
  const btn = e.target.closest("button[data-subcat]");
  if (!btn) return;
  stopAudio();
  state.subcat = btn.dataset.subcat;
  renderTabs();
  renderGrid();
});

$("grid").addEventListener("click", e => {
  const edit = e.target.closest('[data-edit-id]');
  if (edit) { window.openCardEditor?.(edit.dataset.editId); return; }
  const tag = e.target.closest('[data-tag]');
  if (tag) { toggleTag(state.list[Number(tag.closest('.card').dataset.i)], tag.dataset.tag); return; }
  const sound = e.target.closest('[data-sound]');
  if (sound) { playSound(sound); return; }
  const card = e.target.closest(".card");
  if (!card) return;
  openModal(Number(card.dataset.i));
});

/* ---------- fullscreen card ---------- */
function openModal(i, read = true) {
  if (!state.list.length) return;
  clearTimeout(autoTimer); autoRun++; stopAudio();
  if ($('randomBrowse').checked) randomBrowse.visit(i, state.list.length);
  state.index = i;
  const c = state.list[i];
  $("modalCard").innerHTML = `
    ${picHTML(c, 'screen')}
    ${relativeDateHTML(c)}
    <button class="speak-row" data-speak="${escapeHTML(languageText(c, state.mode))}" data-lang="${state.mode}" data-audio="${escapeHTML(audioKey(c, state.mode))}">
      ${titleHTML(c)}
    </button>
    ${pinyinHTML(c)}
    ${soundButtonHTML(c)}
    ${tagsHTML(c)}
      ${window.cardEditButton?.(c) || ''}
    <div class="trans">
      ${translationHTML(c)}
    </div>`;
  $("modal").classList.remove("hidden");
  document.body.classList.add('modal-open');
  document.querySelector('.app').inert = true;
  $('modalCard').scrollTop = 0;
  $('modalClose').focus({preventScroll: true});
  if (!navigator.connection?.saveData && !$('randomBrowse').checked) {
    for (const offset of [-1, 1]) {
      const next = state.list[(i + offset + state.list.length) % state.list.length];
      const image = new Image();
      image.src = `images/screen/${encodeURIComponent(next.image || zh(next))}.webp`;
    }
  }
  if (autoPlaying) playCardAutomatically();
  else if (read) speak(languageText(c, state.mode), state.mode, audioKey(c, state.mode));
}

$("modalClose").onclick = () => {
  setAutoPlay(false);
  stopAudio(); $('modal').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.querySelector('.app').inert = false;
  (document.querySelector(`.card[data-i="${state.index}"] .card-open`) || document.querySelector('input[name="languageMode"]:checked')).focus({preventScroll: true});
};
$('grid').addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.card')) {
    e.preventDefault(); openModal(Number(e.target.dataset.i));
  }
});
$('randomBrowse').addEventListener('change', () => {
  randomBrowse.reset();
  if ($('randomBrowse').checked && state.list.length) randomBrowse.visit(state.index, state.list.length);
});
$("modalPrev").onclick = () => {
  if (!state.list.length) return;
  const previous = $('randomBrowse').checked
    ? randomBrowse.previous()
    : (state.index - 1 + state.list.length) % state.list.length;
  if (previous !== null) openModal(previous);
};
$("modalNext").onclick = () => {
  const count = state.list.length;
  if (!count) return;
  let next = (state.index + 1) % count;
  if ($("randomBrowse").checked) next = randomBrowse.next(count);
  if (next !== null) openModal(next);
};

document.addEventListener("keydown", e => {
  if ($("modal").classList.contains("hidden")) return;
  if (e.key === 'Tab') {
    const controls = [...$('modal').querySelectorAll('button, input, [tabindex="0"]')];
    const first = controls[0], last = controls[controls.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  if (e.key === "Escape") $("modalClose").click();
  if (e.key === "ArrowLeft") $("modalPrev").click();
  if (e.key === "ArrowRight") $("modalNext").click();
});
let touchStart = null;
$('modalCard').addEventListener('touchstart', e => {
  touchStart = e.touches.length === 1 ? {x: e.touches[0].clientX, y: e.touches[0].clientY} : null;
}, {passive: true});
$('modalCard').addEventListener('touchend', e => {
  if (!touchStart) return;
  const dx = e.changedTouches[0].clientX - touchStart.x;
  const dy = e.changedTouches[0].clientY - touchStart.y;
  touchStart = null;
  if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 2) {
    $(dx > 0 ? 'modalPrev' : 'modalNext').click();
  }
}, {passive: true});

let voiceCache = {};
if ("speechSynthesis" in window) {
  speechSynthesis.onvoiceschanged = () => { voiceCache = {}; };
}

/* prefer neural "Natural/Online" voices (available in Edge) over robotic SAPI ones */
function pickVoice(lang) {
  if (lang in voiceCache) return voiceCache[lang];
  const match = speechSynthesis.getVoices()
    .filter(v => v.lang.replace("_", "-").toLowerCase().startsWith(lang.toLowerCase()));
  const score = v => (/natural|online/i.test(v.name) ? 2 : 0) + (/neural/i.test(v.name) ? 1 : 0);
  voiceCache[lang] = match.sort((a, b) => score(b) - score(a))[0] || null;
  return voiceCache[lang];
}

function speakTTS(text, lang, done) {
  if (!("speechSynthesis" in window)) { done(false); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  const v = pickVoice(lang);
  if (v) u.voice = v;
  u.rate = 0.75;
  u.onend = () => done(true);
  u.onerror = () => done(false);
  speechSynthesis.speak(u);
}

/* play pre-generated neural audio; fall back to browser TTS if missing */
const AUDIO_DIR = { "zh-CN": "zh", "en-US": "en", "ja-JP": "ja", "es-MX": "es" };
let currentAudio = null;
let soundButton = null;
let finishSpeech = null;
let autoPlaying = false, autoTimer = null, autoRun = 0;

function setAutoPlay(enabled) {
  autoPlaying = enabled;
  clearTimeout(autoTimer); autoRun++; stopAudio();
  $('autoPlay').textContent = enabled ? '' + t('暂停') : '' + t('自动播放');
  $('autoPlay').setAttribute('aria-pressed', String(enabled));
}
async function playCardAutomatically() {
  const run = ++autoRun;
  const c = state.list[state.index];
  const lang = state.mode;
  if (!autoPlaying || run !== autoRun) return;
  const success = await speak(languageText(c, lang), lang, audioKey(c, lang));
  if (!autoPlaying || run !== autoRun) return;
  if (!success) { setAutoPlay(false); $('autoPlay').textContent = t('朗读失败 · 重试'); return; }
  autoTimer = setTimeout(() => {
    if (autoPlaying && run === autoRun) $('modalNext').click();
  }, 1500);
}
$('autoPlay').onclick = () => {
  setAutoPlay(!autoPlaying);
  if (autoPlaying) playCardAutomatically();
};
$('startAuto').onclick = () => { setAutoPlay(true); openModal(0); };
document.addEventListener('visibilitychange', () => { if (document.hidden) setAutoPlay(false); });
window.addEventListener('pagehide', () => setAutoPlay(false));

function toggleTag(c, tag) {
  const wasOpen = !$('modal').classList.contains('hidden');
  const index = state.index;
  const tags = state.tags[c.id] || {};
  tags[tag] = !tags[tag]; state.tags[c.id] = tags;
  saveSetting('card-tags', state.tags);
  renderGrid();
  if (wasOpen) {
    if (!state.list.length) { $('modalClose').click(); return; }
    const newIndex = state.list.findIndex(item => item.id === c.id);
    openModal(newIndex < 0 ? Math.min(index, state.list.length - 1) : newIndex, false);
    $('modalCard').querySelector(`[data-tag="${tag}"]`)?.focus({preventScroll:true});
  } else {
    const newIndex = state.list.findIndex(item => item.id === c.id);
    (document.querySelector(`.card[data-i="${newIndex}"] [data-tag="${tag}"]`) || $('tagFilter')).focus({preventScroll:true});
  }
}
document.querySelectorAll('input[name="languageMode"]').forEach(input => {
  input.checked = input.value === state.mode;
});
$('languageMode').onchange = e => {
  if (e.target.name !== 'languageMode' || !e.target.checked) return;
  setAutoPlay(false); state.mode = e.target.value;
  saveSetting('card-language', state.mode); renderInterface(); setAutoPlay(false); renderTabs(); renderGrid();
};
$('tagFilter').onchange = e => { stopAudio(); state.tagFilter = e.target.value; renderGrid(); };
document.querySelectorAll('input[name="japaneseDisplay"]').forEach(input => {
  input.checked = input.value === state.japaneseDisplay;
});
$('japaneseDisplay').onchange = e => {
  if (e.target.name !== 'japaneseDisplay' || !e.target.checked) return;
  state.japaneseDisplay = e.target.value;
  saveSetting('card-japanese-display', state.japaneseDisplay);
  renderGrid();
};

function stopAudio() {
  if (finishSpeech) finishSpeech(false);
  if (currentAudio) {
    currentAudio.onerror = null;
    currentAudio.onended = null;
    currentAudio.pause();
    currentAudio = null;
  }
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  if (soundButton) {
    soundButton.textContent = '' + t('播放音效');
    soundButton.setAttribute('aria-pressed', 'false');
    soundButton = null;
  }
}

function playSound(button) {
  const wasPlaying = soundButton === button;
  setAutoPlay(false);
  stopAudio();
  if (wasPlaying) return;
  const audio = new Audio(`audio/sfx/${encodeURIComponent(button.dataset.sound)}.mp3`);
  currentAudio = audio;
  soundButton = button;
  audio.volume = 0.6;
  button.textContent = '■ ' + t('停止音效');
  button.setAttribute('aria-pressed', 'true');
  const failed = () => {
    if (currentAudio !== audio) return;
    stopAudio();
    button.textContent = t('音效暂不可用 · 重试');
  };
  audio.onerror = failed;
  audio.onended = () => { if (currentAudio === audio) stopAudio(); };
  audio.play().catch(failed);
}

function speak(text, lang = "zh-CN", audioKey = text) {
  stopAudio();
  return new Promise(resolve => {
  const audio = new Audio(`audio/${AUDIO_DIR[lang]}/${encodeURIComponent(audioKey)}.mp3`);
  currentAudio = audio;
  let settled = false;
  const done = success => {
    if (settled) return;
    settled = true; clearTimeout(timeout);
    audio.onerror = null; audio.onended = null; audio.pause();
    if (currentAudio === audio) currentAudio = null;
    if (finishSpeech === done) finishSpeech = null;
    resolve(success);
  };
  const timeout = setTimeout(() => { done(false); if ('speechSynthesis' in window) speechSynthesis.cancel(); }, 20000);
  finishSpeech = done;
  audio.onended = () => done(true);
  let fellBack = false;
  const fallback = () => {
    if (currentAudio !== audio || fellBack) return;
    fellBack = true;
    audio.pause();
    speakTTS(text, lang, done);
  };
  audio.onerror = fallback;
  audio.play().catch(fallback);
  });
}

$("modalCard").addEventListener("click", e => {
  const edit = e.target.closest('[data-edit-id]');
  if (edit) { window.openCardEditor?.(edit.dataset.editId); return; }
  const tag = e.target.closest('[data-tag]');
  if (tag) { toggleTag(state.list[state.index], tag.dataset.tag); return; }
  const sound = e.target.closest('[data-sound]');
  if (sound) { playSound(sound); return; }
  const row = e.target.closest("[data-speak]");
  if (row) { setAutoPlay(false); speak(row.dataset.speak, row.dataset.lang, row.dataset.audio); }
});

/* ---------- batch print ---------- */
$("printBtn").onclick = () => {
  if (!state.list.length) return;
  $("printCount").textContent =
    t('打印 {n} 张卡片：{category}', {n: state.list.length, category: t(state.cat) + (state.subcat === '全部' ? '' : ' / ' + t(state.subcat))});
  $("printDialog").showModal();
};

$("printCancel").onclick = () => $("printDialog").close();

document.querySelectorAll(".print-options button").forEach(btn => {
  btn.onclick = () => {
    $("printDialog").close();
    printCards(Number(btn.dataset.layout));
  };
});

async function printCards(perPage) {
  const area = $("print-area");
  area.className = `layout-${perPage}`;
  let html = "";
  for (let p = 0; p < state.list.length; p += perPage) {
    const cards = state.list.slice(p, p + perPage).map(c => `
      <div class="print-card">
        ${picHTML(c, 'print')}
        ${relativeDateHTML(c)}
        ${titleHTML(c)}
        ${pinyinHTML(c)}
        <div class="trans">${languageOrder().slice(1).map(lang => `<span lang="${lang}">${languageHTML(c, lang)}</span>`).join('<br>')}</div>
      </div>`).join("");
    html += `<div class="print-page">${cards}</div>`;
  }
  area.innerHTML = html;

  await Promise.all([...area.querySelectorAll('img')].map(img =>
    img.decode().catch(() => {})
  ));
  window.print();
}
window.addEventListener('afterprint', () => { $('print-area').innerHTML = ''; });

/* ---------- init ---------- */
renderInterface();
renderTabs();
renderGrid();

// The developer editor is only served by a locally enabled development server.
if (typeof fetch === 'function' && typeof location !== 'undefined' && ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname)) {
  fetch('/api/editor', {cache: 'no-store'}).then(r => r.ok ? r.json() : null).then(config => {
    if (!config) return;
    window.cardEditorToken = config.token;
    const script = document.createElement('script');
    script.src = '/editor.js';
    document.body.appendChild(script);
  }).catch(() => {});
}
