# Eon Words

[English](README.md) | [中文](README.zh-CN.md) | [日本語](README.ja.md) | [Español](README.es.md)

中国語・英語・日本語・スペイン語に対応した 555 枚のカードを、大分類と小分類で閲覧できます。

## 起動

プロジェクトのフォルダーで `python serve_lan.py` を実行します。このパソコンでは http://localhost:8000、同じネットワークの別の端末では `http://<パソコンのLAN内IPアドレス>:8000` を開きます。

## 画像のスタイル

人物と動作のカードには、既存の温かみのある二次元人物イラストを使います。基本認識のカードは、写実的ではない、わかりやすい教育用イラストにします。その他のテーマは写実または半写実にします。画像は言語に依存しない表現を基本とし、翻訳はカードデータと画面に表示します。文字そのものがテーマの場合は、その文字を画像に含めてもかまいません。

## 使い方

言語を選ぶと、画面の表示、カードの主見出し、標準の読み上げ、印刷時の主言語が切り替わります。日本語は「漢字＋ふりがな」「漢字のみ」「かなのみ」から選べます。

カードを開くと名前を読み上げます。他の言語の行を押すと、その言語の音声を再生します。自動再生は選択中の言語だけを読み上げ、1.5 秒後に次のカードへ進みます。ランダム表示では一巡するまで同じカードを繰り返しません。詳細画面を閉じるか、別のタブやアプリに切り替えると自動再生が止まります。

カードに「お気に入り」「未習得」「非表示」のタグを付けられます。非表示のカードは通常の一覧から除外され、非表示フィルターから戻せます。言語設定とタグは現在のブラウザーに保存されます。絞り込んだカードを 1 ページに 1 枚または 4 枚で印刷できます。

### 言語と再生の詳細

- 選択した言語を先頭に、残りは中国語・英語・日本語・スペイン語の順に表示します。
- 日本語の表示設定は日本語モードでのみ表示され、一覧・詳細・印刷に適用されます。初期設定は漢字とふりがなの併記で、設定はブラウザーに保存されます。「漢字のみ」でも必要な送り仮名と外来語のカタカナは残ります。
- 日本語音声は Microsoft TTS を使い、ファイル名は漢字を含む表記、読み上げ入力はかなです。
- スペイン語は中南米で一般的な語彙を使い、Microsoft のメキシコ女性音声 `es-MX-DaliaNeural` を 20% 遅い速度で再生する録音です。`audio/es/` のファイル名はスペイン語の単語です。
- 自動再生は絞り込んだ一覧を繰り返し、毎回手動で開始します。一時停止でき、発音や効果音を手動で再生しても停止します。自動再生中に手動でページを送ると、新しいカードから読み上げます。
- 一覧と詳細の両方で複数のタグを付けられます。お気に入り・未習得の絞り込みでも非表示カードは除外され、非表示フィルターから解除できます。
- 言語、日本語の表示設定、タグは現在のブラウザーにのみ保存され、端末間では自動同期されません。

## ファイル構成

- `scripts/`：素材の生成・配置・退避と関連語の保守ツール。
- `serve_lan.py`：HTTP LAN サーバー。起動コマンドは変更ありません。

- `index.html`、`style.css`、`app.js`：ページの構造、デザイン、操作。
- `data.js`: `data/` の各テーブルを ID で結合します。
- `images/`: 多言語名の PNG と WebP。プロンプトは `data/` に保存します。
- `audio/zh/`、`audio/en/`、`audio/ja/`、`audio/es/`：各言語の音声。`audio/sfx/`：効果音。
- `tests/`：閲覧機能と音声の検査。

アーカイブ内の古いスクリプト、バッチ一覧、プロンプト、生成記録は削除済みです。現在使用中の素材のプロンプトは残しています。

## メンテナンス

- `python scripts/build_web_images.py`：WebP を生成。LAN サーバー起動時にも不足分を生成します。
- `python scripts/generate_audio.py`：Microsoft TTS で英語・日本語・スペイン語の不足音声を生成。
- `python scripts/generate_audio_xfyun.py`：ローカルの `.env` 設定を使い、訊飛で中国語音声を生成。
- `python scripts/generate_sound_effects.py`：ElevenLabs API キーを使い、スクリプトに設定済みの効果音の不足分を生成。利用枠の自動購入は行いません。

画像はアシスタントの画像生成ツールで作成し、`AGENTS.md` に従います。`scripts/install_card_image.py` は画像の配置、プロンプトの保存、旧画像の退避に使います。

サーバーは公開ページと現在の素材だけを配信し、ETag でキャッシュを確認します。素材変更後は再読み込み、サーバーコード変更後は再起動してください。別の静的サーバーを使う場合は、先に WebP を生成します。

## 検査と依存関係

```powershell
node tests/test-browsing.cjs
python -B tests/verify-audio.py
```

Python ツールは用途に応じて Pillow、edge-tts、websocket-client を使います。音声検査には mutagen、閲覧機能のテストには Node.js が必要です。`.env`、キャッシュ、ログは Git の追跡対象外です。

カードは固定 ID で結合します。`data/categories.js` は分類参照、`data/translations.js` は4言語（zh、zhPinyin、en、ja、jaWritten、jaRuby、jaAudio、es）、`data/assets.js` は素材参照を保存します。各表に各カード一行を保持し、`data.js` は行順ではなく ID で結合します。Python は `scripts/card_data.py` を使用します。編集時も ID を維持します。

分類にも固定の12桁 ID を使用します。`data/categories.js` の cat、subcat、extraCats は分類 ID を参照します。`data/category-definitions.js` は `{id, parent}`（大分類の parent は null）、`data/category-translations.js` は `{id, zh, en, ja, es}` の表示名を保存します。名前の変更時も ID を保持し、分類の翻訳は一般 UI の翻訳と分けて管理します。

開発者編集：`python serve_lan.py --edit` で起動し、サーバー本体で `http://localhost:8000` を開きます。カード上の「編集」をクリックします。ID でデータに保存し、`output/editor-backups/` にバックアップします。通常は無効で、LAN からは編集できません。トークン・アクセス元・競合を確認します。文字を修正しても既存の画像と音声を保持し、自動再生成しません。

画像と効果音の名前は「中国語_英語_日本語表記_スペイン語」を連結します。`data/assets.js` の image と soundEffect が拡張子なしの実名を保持し、WebP も同名です。読み上げ音声の名前は変更しません。新規素材には `scripts/card_data.py` の media_stem() を使用します。

プロンプトはカード ID で分離します。`data/image-prompts.js` は prompt、`data/sound-prompts.js` は soundPrompt を保存します。効果音プロンプトがない行は ID のみです。`data/assets.js` は素材参照のみを保存します。

## GitHub Pages

`python scripts/build_pages.py` で公開サイトを `output/pages/` に生成します。ブラウザー用ファイルと参照中の素材のみを含め、編集機能、Python、認証情報、バックアップ、未使用素材は除外します。現在約96 MiBです。GitHub に push 後、Settings → Pages → Source を GitHub Actions にして、Actions から Publish GitHub Pages を手動実行します。push だけでは公開されません。

PNG 原本はローカルのみで Git 対象外です。リポジトリと公開サイトは WebP のみを使い、一覧は240px、詳細と印刷は800pxです。読み込み失敗時は別サイズの WebP に切り替えます。公開サイズは約96 MiB。大判印刷は800pxの解像度に制限されます。
