(() => {
  const strings = {
    mode: ['开发者编辑', 'Developer editing', '開発者編集', 'Edición de desarrollador'],
    edit: ['编辑', 'Edit', '編集', 'Editar'],
    save: ['保存到数据文件', 'Save to data files', 'データファイルに保存', 'Guardar en archivos'],
    cancel: ['取消', 'Cancel', 'キャンセル', 'Cancelar'],
    saving: ['正在保存…', 'Saving…', '保存中…', 'Guardando…'],
    note: ['修改文字不会重新生成图片和语音；已有素材继续保留。日文注音每行填写：文字 | 读音，无读音可只填文字。', 'Text edits do not regenerate images or recordings. Existing media is retained. Japanese readings: one segment per line, written text | reading; omit the separator for unannotated text.', '文字の修正では画像・音声を再生成しません。既存素材を保持します。ふりがなは一行ごとに「文字 | 読み」、読みがな不要なら文字のみ。', 'Los cambios de texto no regeneran imágenes ni grabaciones. Se conservan los archivos existentes. Lecturas japonesas: un segmento por línea, texto | lectura; sin lectura, solo texto.'],
    ruby: ['日文分段注音', 'Japanese reading segments', 'ふりがな区分', 'Segmentos de lectura japonesa'],
    prompt: ['图片提示词', 'Image prompt', '画像プロンプト', 'Instrucciones de imagen'],
    sound: ['音效文件名（不含扩展名，留空移除）', 'Sound effect filename (without extension; empty to remove)', '効果音ファイル名（拡張子なし、空欄で解除）', 'Archivo de efecto (sin extensión; vacío para quitar)'],
    extra: ['附加分类', 'Additional categories', '追加分類', 'Categorías adicionales'],
    failure: ['保存失败：', 'Save failed: ', '保存失敗：', 'Error al guardar: '],
    success: ['已保存到数据文件', 'Saved to data files', 'データファイルに保存しました', 'Guardado en archivos'],
    none: ['无', 'None', 'なし', 'Ninguna']
  };
  const tr = key => strings[key][{'zh-CN':0,'en-US':1,'ja-JP':2,'es-MX':3}[state.mode] ?? 0];
  const esc = escapeHTML;
  window.cardEditButton = card => `<button class="card-edit" data-edit-id="${card.id}" type="button">${tr('edit')}</button>`;
  const dialog = document.createElement('dialog');
  dialog.className = 'card-editor';
  document.body.appendChild(dialog);
  dialog.addEventListener('keydown', event => event.stopPropagation());
  const status = $('filterStatus');
  const names = {zh:'中文', zhPinyin:'拼音', en:'English', jaWritten:'日本語', ja:'かな', es:'Español'};
  let current;
  function suboptions(cat, selected) {
    const ids = CATEGORY_TREE[cat] || [];
    return `<option value="">${tr('none')}</option>` + ids.map(id => `<option value="${id}" ${id === selected ? 'selected' : ''}>${esc(t(id))}</option>`).join('');
  }
  let openedFromModal = false;
  window.openCardEditor = async id => {
    openedFromModal = !$('modal').classList.contains('hidden');
    setAutoPlay(false); stopAudio(); status.textContent = '';
    try {
      const response = await fetch('/api/editor/card/' + id, {cache:'no-store'});
      const result = await response.json(); if (!response.ok) throw new Error(result.error);
      current = result;
      const card = result.card;
      dialog.innerHTML = `<form><h2>${tr('edit')}</h2><small>ID: ${card.id}</small><p>${tr('note')}</p>
        <div class="editor-fields">${Object.entries(names).map(([key,label]) => `<label>${label}<input name="${key}" value="${esc(card[key])}" required></label>`).join('')}</div>
        <label>${tr('ruby')}<textarea name="ruby" rows="4" required>${esc(card.jaRuby.map(r => r.text + (r.reading ? ' | ' + r.reading : '')).join('\n'))}</textarea></label>
        <label>${t('大类')}<select name="cat">${Object.keys(CATEGORY_TREE).map(id => `<option value="${id}" ${id === card.cat ? 'selected' : ''}>${esc(t(id))}</option>`).join('')}</select></label>
        <label>${t('小类')}<select name="subcat">${suboptions(card.cat,card.subcat)}</select></label>
        <fieldset><legend>${tr('extra')}</legend><div class="editor-extras">${CATEGORY_DEFINITIONS.filter(c => c.parent).map(c => `<label><input type="checkbox" name="extra" value="${c.id}" ${(card.extraCats || []).includes(c.id) ? 'checked' : ''}>${esc(t(c.parent))} / ${esc(t(c.id))}</label>`).join('')}</div></fieldset>
        <label>${tr('sound')}<input name="soundEffect" value="${esc(card.soundEffect || '')}"></label>
        <label>${tr('prompt')}<textarea name="prompt" rows="10" required>${esc(card.prompt)}</textarea></label>
        <p class="editor-status" role="status"></p><div class="editor-actions"><button type="button" class="editor-cancel">${tr('cancel')}</button><button type="submit">${tr('save')}</button></div></form>`;
      const form = dialog.querySelector('form');
      form.elements.cat.onchange = () => { form.elements.subcat.innerHTML = suboptions(form.elements.cat.value,''); };
      dialog.querySelector('.editor-cancel').onclick = () => dialog.close();
      form.onsubmit = save;
      dialog.showModal();
    } catch (err) { status.textContent = tr('failure') + err.message; }
  };
  async function save(event) {
    event.preventDefault();
    const form = event.target, message = form.querySelector('.editor-status'), submit = form.querySelector('[type="submit"]');
    const changes = Object.fromEntries(Object.keys(names).map(key => [key,form.elements[key].value.trim()]));
    changes.jaRuby = form.elements.ruby.value.trim().split('\n').map(line => {
      const [text, ...reading] = line.split('|').map(s => s.trim());
      return reading.length ? {text,reading:reading.join('|')} : {text};
    });
    for (const key of ['cat','subcat','soundEffect','prompt']) changes[key] = form.elements[key].value.trim();
    changes.extraCats = [...form.querySelectorAll('[name="extra"]:checked')].map(input => input.value);
    submit.disabled = true; message.textContent = tr('saving');
    try {
      const response = await fetch('/api/editor/card', {method:'POST',headers:{'Content-Type':'application/json','X-Edit-Token':window.cardEditorToken},body:JSON.stringify({id:current.card.id,revision:current.revision,changes})});
      const result = await response.json(); if (!response.ok) throw new Error(result.error);
      const card = CHARACTERS.find(c => c.id === result.card.id);
      for (const key of Object.keys(card)) delete card[key]; Object.assign(card,result.card);
      dialog.close(); renderGrid();
      const index = state.list.findIndex(c => c.id === card.id);
      if (openedFromModal) {
        if (index >= 0) openModal(index,false); else $('modalClose').click();
      }
      status.textContent = tr('success');
    } catch (err) { message.textContent = tr('failure') + err.message; }
    finally { submit.disabled = false; }
  }
  renderGrid();
  if (!$('modal').classList.contains('hidden')) openModal(state.index, false);
})();
