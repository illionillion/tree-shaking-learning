# Tree Shaking Learning

このプロジェクトは、Reactにおけるツリーシェイキングと副作用の動作を説明するためのサンプルプロジェクトです。

## プロジェクトの説明

### コンポーネント構造
- `ComponentA`、`ComponentB`、`ComponentC`の3つのシンプルなコンポーネントが存在します
- `App.tsx`では`ComponentA`と`ComponentB`のみを使用しています
- `ComponentC`は使用されていません

### 副作用の例
- `components/index.ts`にグローバルな副作用（`console.log("side effect")`）が含まれています
- `component-c.tsx`にも副作用（`console.log("componentC")`）が含まれています

### エクスポート方法
- すべてのコンポーネントは`components/index.ts`を通じてエクスポートされています
- `hello`関数もエクスポートされていますが、使用されていません

## セットアップと実行

### 依存関係のインストール
```bash
pnpm install
```

### 開発サーバーの起動
```bash
pnpm dev
```

### ビルドの実行
```bash
pnpm build
```

## バンドル分析の見方

1. ビルドを実行すると、`dist`ディレクトリに出力が生成されます
2. `bundle-analysis.html`が生成されます
3. このファイルをブラウザで開くことで、バンドルされたコードの詳細な分析が可能です

### ツリーシェイキングの確認ポイント
- 使用されていない`ComponentC`がバンドルに含まれているか
- `components/index.ts`の副作用がどのように処理されているか
- `hello`関数がバンドルに含まれているか

### 重要な観察ポイント
- `package.json`の`"sideEffects": false`設定の有無による違い
- 副作用を含むファイルがどのように処理されるか
- 使用されていないエクスポートがどのように処理されるか

## 技術スタック
- React
- TypeScript
- Vite
- pnpm

## 解説記事

https://zenn.dev/illionillion/articles/2025-06-14-tree-shaking-and-side-effect

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
