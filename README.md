# Eon Words

[English](README.md) | [中文](README.zh-CN.md) | [日本語](README.ja.md) | [Español](README.es.md)

555 cards in Chinese, English, Japanese, and Spanish, organized into categories and subcategories.

## Start

Run `python serve_lan.py` from the project directory. Open http://localhost:8000 on this computer, or `http://<computer-LAN-IP>:8000` on another device on the same network.

## Image style

People and action cards use the established 2D cartoon people style. Basic cognition cards use clear educational illustrations and are not photorealistic. All other subjects use realistic or semi-realistic imagery. Images are language-neutral: translations belong in card data and interface text, not as translated labels embedded in pictures. A written character card may show the character itself when that is the subject.

## Browse

Choose a language to change the interface, primary card text, default pronunciation, and print language. Japanese text can show kanji, kana, or both, with kana above kanji.

Open a card to hear its name. Other language rows play their respective recordings. Autoplay reads only the selected language and advances after a 1.5-second pause. Random browsing avoids repeats within each round. Closing the detail view or switching to the background stops autoplay.

Mark cards as favorites, unfamiliar, or hidden. Hidden cards are excluded by default; use the hidden filter to restore them. Language preferences and tags are saved in the current browser. Print the filtered selection with one or four cards per page.

### Language and playback details

- The selected language comes first; remaining languages follow Chinese, English, Japanese, Spanish order.
- Japanese display options appear only in Japanese mode and apply to the grid, detail view, and printing. Kanji with kana is the default, and the preference is saved in the browser. Kanji-only mode retains necessary okurigana and katakana loanwords.
- Japanese recordings use Microsoft TTS, with written Japanese filenames and kana input for pronunciation.
- Spanish uses Latin American vocabulary and Microsoft's Mexican voice `es-MX-DaliaNeural`, at 20% slower speed. Files in `audio/es/` are named using the Spanish words.
- Autoplay loops through the filtered list, must be started manually each time, and can be paused. Manually playing pronunciation or sound effects also stops autoplay; navigating during autoplay starts reading the new card.
- Multiple tags can be set in both the grid and detail view. Favorites and unfamiliar filters also exclude hidden cards; use the hidden filter to unhide them.
- Language, Japanese display preferences, and tags remain in the current browser and do not automatically sync between devices.

## Files

- `scripts/`: asset maintenance, shared data access, local editing and public-site packaging.
- `serve_lan.py`: HTTP LAN server; the start command remains unchanged.

- `index.html`, `style.css`, `app.js`: page structure, appearance, and interactions.
- `data.js`: ID-based loader for field tables in `data/`.
- `images/`: multilingual-named PNG originals and WebP variants; prompts are in `data/`.
- `audio/zh/`, `audio/en/`, `audio/ja/`, `audio/es/`: pronunciation recordings. `audio/sfx/`: sound effects.
- `tests/`: browsing behavior and audio checks.


## Maintenance

- `python scripts/build_web_images.py`: build WebP copies; the LAN server also builds missing copies on startup.
- `python scripts/generate_audio.py`: fill missing English, Japanese, and Spanish recordings using Microsoft TTS.
- `python scripts/generate_audio_xfyun.py`: generate Chinese recordings using XFYUN and local `.env` settings.
- `python scripts/generate_sound_effects.py`: fill sound effects configured in the script using an ElevenLabs API key; does not automatically purchase credits.

Images are generated using the assistant's image tool, following `AGENTS.md`. `scripts/install_card_image.py` install images, save prompts, and archive previous versions.

The server exposes only public pages and current assets, with ETag cache validation. Refresh after asset changes; restart after server code changes. Build WebP copies before using another static server.

## Checks and dependencies

```powershell
node tests/test-browsing.cjs
python -B tests/verify-audio.py
```

Python tools use Pillow, edge-tts, and websocket-client as needed; audio checks require mutagen. The browsing test requires Node.js. `.env`, caches, and logs are gitignored.

## Category update

Stationery is now a subcategory of household and everyday items.

Card field tables are joined by permanent ID: `data/categories.js` stores category references, `data/translations.js` stores all four languages (zh, zhPinyin, en, ja, jaWritten, jaRuby, jaAudio, es), and `data/assets.js` stores media references. Each table contains one row per card. `data.js` joins by ID, not row order; Python tools use `scripts/card_data.py`. Preserve IDs when editing.

Categories also have permanent 12-character IDs. `data/categories.js` uses these IDs in `cat`, `subcat`, and `extraCats`. `data/category-definitions.js` defines each category as `{id, parent}` (null parent for a major category). `data/category-translations.js` stores `{id, zh, en, ja, es}` labels. Change labels without changing IDs; these labels are separate from general UI translations.

Developer editing: start with `python serve_lan.py --edit` and open `http://localhost:8000` on the server computer. Click Edit directly on a card. Saving updates the data files by ID; backups are stored in `output/editor-backups/`. Editing is disabled by default and blocked for LAN clients. Requests require a local edit token and same-origin checks; stale edits are rejected. Text corrections retain existing images and audio without regenerating them.

Image and sound-effect filenames combine Chinese_English_written-Japanese_Spanish. The image field and soundEffect field in `data/assets.js` hold the exact filename stems; image variants share the same stem. Pronunciation filenames are unchanged. Use `media_stem()` in `scripts/card_data.py` for new media names.

Prompts are stored separately by card ID: `data/image-prompts.js` contains `prompt`, and `data/sound-prompts.js` contains `soundPrompt`. `data/assets.js` contains only media references. Cards without a sound prompt have an ID-only row.

## GitHub Pages

Run `python scripts/build_pages.py` to build the public site in `output/pages/`. It includes only browser files and referenced media; developer editing, Python scripts, credentials, local backups and unused media are excluded. The current build is about 96 MiB. After pushing to GitHub, set Settings → Pages → Source to GitHub Actions, then run Publish GitHub Pages from Actions. The workflow is manual and does not publish on push. No remote repository is configured by this preparation step.

PNG originals are local-only and ignored by Git. The repository and public site use WebP only: 240px for thumbnails, 800px for detail and printing. Image fallback uses the other WebP size. The public build is approximately 96 MiB. Large-format printing is limited to the 800px source; original PNGs remain available locally.
