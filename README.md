# 開発ルール

## コミットメッセージ

### 接頭辞

- 追加: `add`
- 修正: `fix`
- 削除: `remove`
- 変更: `change`

### ページごとにそれぞれのページ名をメッセージに含める

トップページの例

- `add/top: 変更内容`
- `fix/top: 変更内容`
- `remove/top: 変更内容`
- `change/top: 変更内容`

## 画像ファイル

- 全ての画像は `/images` フォルダに保存する

## CSS ファイル

- 共通のスタイルは以下のファイルを使用する
  - `styles/global.css` - 全体のスタイル
  - `styles/reset.css` - リセット用スタイル
- 各ページ専用の CSS は、そのページと同じ場所にある CSS を使用する
  - 例：`about/index.html` → `about/style.css`
