# Eon Words

[English](README.md) | [中文](README.zh-CN.md) | [日本語](README.ja.md) | [Español](README.es.md)

555 张卡片，支持中文、英文、日文、西班牙语，按大类和小类浏览，提供自动播放、随机翻阅、标签和打印功能。

## 启动

在项目目录运行 `python serve_lan.py`。

本机访问 http://localhost:8000；局域网设备访问 http://电脑的局域网IP:8000。

## 图片风格

人物和动作卡片沿用现有的二维卡通人物风格。基础认知使用清晰的教学插画，不用写实风格。其他主题均使用写实或半写实风格。图片应尽量不依赖语言表达；翻译放在卡片数据和界面中，不直接把多语言标签写进图片。以文字或汉字本身为主题时，可以展示对应文字。

## 浏览

选择语言后，界面、卡片主标题、默认朗读及打印主语言随之切换。日文可显示汉字、假名或两者，假名标在汉字上方。

打开卡片会朗读名称，点击其他语言行可播放对应录音。自动播放只读所选语言，停留 1.5 秒后翻页；随机翻阅每轮不重复。关闭详情或切换到后台会停止自动播放。

卡片可标记为喜爱、陌生或隐藏。隐藏卡片默认不显示，可通过隐藏筛选恢复。语言设置和标签保存在当前浏览器。打印支持每页一张或四张，内容跟随当前筛选。

### 语言与播放细节

- 所选语言排在首位，其余语言按中文、英文、日文、西班牙语的顺序显示。
- 日文显示选项仅出现在日文模式，适用于列表、详情和打印；默认同时显示汉字和假名，偏好保存在浏览器。“只显示汉字”仍保留必要送假名，外来词保留片假名。
- 日文录音使用微软 TTS，以日文书写形式命名，合成时使用假名读音。
- 西班牙语使用拉美常用词汇和微软墨西哥女声 `es-MX-DaliaNeural`，语速降低 20%；`audio/es/` 中的文件按西班牙语词汇命名。
- 自动播放循环当前筛选列表，每次需手动开启，可随时暂停。手动点击朗读或音效也会停止自动播放；自动播放期间手动翻页会从新卡片开始朗读。
- 列表和详情均可同时设置多个标签。喜爱、陌生筛选也排除隐藏卡片；通过隐藏筛选可取消隐藏。
- 语言、日文显示偏好和标签只保存在当前浏览器，不自动同步到其他设备。

## 文件布局

- `scripts/`：素材维护、统一数据读写、本地编辑和静态站点打包。
- `serve_lan.py`：HTTP 局域网服务器，启动命令保持不变。


- `index.html`、`style.css`、`app.js`：网页和交互。
- `data.js`：按 ID 合并 `data/` 下各字段表。
- `images/`：四语混合命名的 PNG 和 WebP；提示词保存在 `data/`。
- `audio/zh/`、`en/`、`ja/`、`es/`：四语录音；`audio/sfx/`：音效。
- `tests/`：浏览行为和音频检查。

归档中的旧脚本、批次清单、提示词和生成记录已清理；当前素材的提示词仍保留在工作目录。

## 维护

- `python scripts/build_web_images.py`：生成浏览用 WebP；局域网服务器启动时也会补齐。
- `python scripts/generate_audio.py`：补齐英文、日文和西班牙语微软 TTS 录音。
- `python scripts/generate_audio_xfyun.py`：生成中文讯飞录音，需要本地 `.env` 配置。
- `python scripts/generate_sound_effects.py`：补齐脚本已配置的 ElevenLabs 音效，需要本地 API key，不自动购买额度。

图片使用助手内置工具生成，遵循 `AGENTS.md`。`scripts/install_card_image.py` 用于安装图片、保存提示词和归档旧图。


服务器仅公开网页和当前素材，使用 ETag 缓存验证。修改后刷新浏览器；服务器代码变更后重启。其他静态服务器需预先生成 WebP。

## 检查

```powershell
node tests/test-browsing.cjs
python -B tests/verify-audio.py
```

Python 工具按用途需要 Pillow、edge-tts、websocket-client；音频检查需要 mutagen，浏览行为测试需要 Node.js。`.env`、缓存和日志已列入 `.gitignore`。

卡片按永久 ID 关联：`data/categories.js` 保存分类引用，`data/translations.js` 合并四种语言（zh、zhPinyin、en、ja、jaWritten、jaRuby、jaAudio、es），`data/assets.js` 保存素材引用。每表每张卡一行，`data.js` 按 ID 合并，不依赖行序；Python 工具通过 `scripts/card_data.py` 读写。编辑时保留原 ID。

分类也使用永久的 12 位 ID。`data/categories.js` 的 cat、subcat、extraCats 引用分类 ID；`data/category-definitions.js` 保存 `{id, parent}` 层级关系（大类的 parent 为 null）；`data/category-translations.js` 保存 `{id, zh, en, ja, es}` 名称翻译。改分类名称时保留 ID，分类翻译与通用界面翻译分开维护。

开发者编辑：使用 `python serve_lan.py --edit` 启动，在服务器本机打开 `http://localhost:8000`。直接点击卡片上的“编辑”。保存按 ID 写回数据文件，备份位于 `output/editor-backups/`。默认关闭编辑，局域网客户端无编辑权限；保存接口校验本机访问、令牌、来源及版本冲突。文字修改保留原图片和语音，不自动重新生成。

图片和音效文件名使用“中文_英文_日文书写_西班牙文”混合命名。`data/assets.js` 的 image、soundEffect 保存实际文件名（不含扩展名），图片原图及两种 WebP 同名。四语朗读音频命名保持不变。新增素材通过 `scripts/card_data.py` 的 media_stem() 生成安全文件名。

提示词按卡片 ID 分开保存：`data/image-prompts.js` 保存 prompt，`data/sound-prompts.js` 保存 soundPrompt；无音效提示词的卡片只保留 ID。`data/assets.js` 仅保存素材引用。

## GitHub Pages 发布

运行 `python scripts/build_pages.py`，公开站点生成于 `output/pages/`。发布包仅包含网页文件和在用素材，不包含开发者编辑器、Python 脚本、密钥、本地备份和未引用素材。当前约 96 MiB。推送到 GitHub 后，在 Settings → Pages 中将 Source 设为 GitHub Actions，再到 Actions 手动运行 Publish GitHub Pages。推送不会自动发布。本次准备不配置远程仓库。

PNG 原图仅保留在本地并由 Git 忽略，仓库和网站只使用 WebP：列表 240px，详情及打印 800px；加载失败时回退至另一尺寸的 WebP。发布包约 96 MiB。大幅打印受 800px 分辨率限制，原始 PNG 仍保留本地。
