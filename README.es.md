# Eon Words

[English](README.md) | [中文](README.zh-CN.md) | [日本語](README.ja.md) | [Español](README.es.md)

555 tarjetas en chino, inglés, japonés y español, organizadas en categorías y subcategorías.

## Inicio

Ejecuta `python serve_lan.py` desde la carpeta del proyecto. Abre http://localhost:8000 en esta computadora o `http://<IP-local-de-la-computadora>:8000` desde otro dispositivo de la misma red.

## Estilo de las imágenes

Las tarjetas de personas y acciones usan el estilo de personajes de dibujos 2D ya establecido. Los conceptos básicos llevan ilustraciones educativas claras, sin realismo fotográfico. Los demás temas usan un estilo realista o semirrealista. Las imágenes deben comunicar sin depender de un idioma: las traducciones van en los datos de las tarjetas y en la interfaz, no como etiquetas multilingües dentro de la imagen. Si el tema es una letra o un carácter escrito, puede aparecer ese carácter.

## Uso

Selecciona un idioma para cambiar la interfaz, el título principal, la pronunciación predeterminada y el idioma principal de impresión. El japonés permite mostrar kanji, kana o ambos, con kana encima del kanji.

Abre una tarjeta para escuchar su nombre. Las filas de otros idiomas reproducen sus grabaciones. La reproducción automática lee solo el idioma seleccionado y pasa a la siguiente tarjeta tras una pausa de 1.5 segundos. El orden aleatorio evita repeticiones dentro de cada ronda. Cerrar la vista de detalle o pasar la aplicación a segundo plano detiene la reproducción automática.

Marca tarjetas como favoritas, por aprender u ocultas. Las ocultas se excluyen de la vista normal; puedes recuperarlas con el filtro de ocultas. Las preferencias de idioma y las etiquetas se guardan en el navegador actual. Imprime las tarjetas filtradas con una o cuatro por página.

### Detalles de idioma y reproducción

- El idioma seleccionado aparece primero; los demás siguen el orden chino, inglés, japonés y español.
- Las opciones de escritura japonesa solo aparecen en el modo japonés y se aplican a la lista, los detalles y la impresión. Por defecto se muestran kanji y kana, y la preferencia se guarda en el navegador. El modo de solo kanji conserva el okurigana necesario y los préstamos escritos en katakana.
- Las grabaciones japonesas usan Microsoft TTS, con nombres de archivo en japonés escrito y kana como entrada de pronunciación.
- El español usa vocabulario latinoamericano y la voz mexicana de Microsoft `es-MX-DaliaNeural`, con una velocidad un 20% menor. Los archivos de `audio/es/` llevan nombres en español.
- La reproducción automática recorre en bucle la lista filtrada, debe iniciarse manualmente cada vez y se puede pausar. Reproducir manualmente una pronunciación o un efecto también la detiene; cambiar de tarjeta durante la reproducción automática inicia la lectura de la nueva tarjeta.
- Puedes aplicar varias etiquetas desde la lista o los detalles. Los filtros de favoritas y por aprender también excluyen las tarjetas ocultas; usa el filtro de ocultas para recuperarlas.
- El idioma, la escritura japonesa y las etiquetas solo se guardan en el navegador actual y no se sincronizan automáticamente entre dispositivos.

## Archivos

- `scripts/`: herramientas para generar, instalar y archivar recursos, y mantener las palabras compuestas.
- `serve_lan.py`: servidor HTTP de la red local; el comando de inicio no cambia.

- `index.html`, `style.css`, `app.js`: estructura, diseño e interacción de la página.
- `data.js`: une las tablas de `data/` por ID.
- `images/`: PNG y WebP con nombres multilingües; las instrucciones están en `data/`.
- `audio/zh/`, `audio/en/`, `audio/ja/`, `audio/es/`: grabaciones de pronunciación. `audio/sfx/`: efectos de sonido.
- `tests/`: comprobaciones de navegación y audio.

Se eliminaron los scripts, listas de lotes, instrucciones de generación y registros antiguos del archivo histórico. Se conservan las instrucciones de los recursos actuales.

## Mantenimiento

- `python scripts/build_web_images.py`: genera copias WebP; el servidor local también completa las que faltan al iniciar.
- `python scripts/generate_audio.py`: genera las grabaciones que faltan en inglés, japonés y español con Microsoft TTS.
- `python scripts/generate_audio_xfyun.py`: genera audio chino con XFYUN y la configuración local de `.env`.
- `python scripts/generate_sound_effects.py`: completa los efectos configurados en el script con una clave de ElevenLabs; no compra créditos automáticamente.

Las imágenes se generan con la herramienta del asistente siguiendo `AGENTS.md`. `scripts/install_card_image.py` instalan imágenes, guardan instrucciones y archivan versiones anteriores.

El servidor solo publica páginas y recursos actuales, y valida la caché mediante ETag. Actualiza el navegador después de cambiar recursos y reinicia el servidor si cambia su código. Antes de usar otro servidor estático, genera las copias WebP.

## Comprobaciones y dependencias

```powershell
node tests/test-browsing.cjs
python -B tests/verify-audio.py
```

Las herramientas Python usan Pillow, edge-tts y websocket-client según su función; la comprobación de audio necesita mutagen. La prueba de navegación necesita Node.js. `.env`, las cachés y los registros se excluyen de Git.

Las tablas se unen por ID permanente: `data/categories.js` contiene referencias de categorías, `data/translations.js` reúne los cuatro idiomas (zh, zhPinyin, en, ja, jaWritten, jaRuby, jaAudio, es) y `data/assets.js` guarda referencias a archivos. Cada tabla tiene una fila por tarjeta. `data.js` une por ID, no por posición; Python usa `scripts/card_data.py`. Conserve los IDs al editar.

Las categorías también tienen IDs permanentes de 12 caracteres. cat, subcat y extraCats en `data/categories.js` hacen referencia a estos IDs. `data/category-definitions.js` define `{id, parent}` (null para categorías principales). `data/category-translations.js` contiene los nombres `{id, zh, en, ja, es}`, separados de las traducciones generales de la interfaz. Conserve el ID al cambiar un nombre.

Edición de desarrollador: ejecute `python serve_lan.py --edit` y abra `http://localhost:8000` en el equipo servidor. Pulse Editar directamente en una tarjeta. Los cambios se guardan por ID y se respaldan en `output/editor-backups/`. La edición está desactivada por defecto y bloqueada para clientes LAN; se verifican token, origen y conflictos. Los cambios de texto conservan imágenes y grabaciones existentes sin regenerarlas.

Los nombres de imágenes y efectos combinan chino_inglés_japonés escrito_español. Los campos image y soundEffect de `data/assets.js` guardan el nombre sin extensión; las variantes WebP comparten el nombre. No cambian los nombres de las grabaciones de pronunciación. Use media_stem() de `scripts/card_data.py` para nuevos archivos.

Las instrucciones se separan por ID: `data/image-prompts.js` contiene prompt y `data/sound-prompts.js` contiene soundPrompt. Sin instrucciones de sonido, la fila conserva solo el ID. `data/assets.js` contiene únicamente referencias a archivos.

## GitHub Pages

Ejecute `python scripts/build_pages.py` para crear el sitio público en `output/pages/`, solo con archivos web y medios utilizados. Excluye el editor, Python, credenciales, copias locales y medios sin referencias. Ocupa unos 96 MiB. Tras subir el repositorio, seleccione GitHub Actions en Settings → Pages → Source y ejecute manualmente Publish GitHub Pages desde Actions. Un push no publica automáticamente.

Los PNG originales se conservan solo localmente y Git los ignora. El repositorio y el sitio usan WebP: 240px para miniaturas y 800px para detalle e impresión; la alternativa es el otro tamaño WebP. El sitio ocupa unos 96 MiB. La impresión grande queda limitada a 800px.
