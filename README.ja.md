# 🌟 モダンポートフォリオウェブサイト

[中文](README.md) | [English](README.en.md) | **日本語**

React 18 + TypeScriptで構築された、AI native、没入感のあるパララックススクロール、3Dインタラクティブ要素、AIチャットボット統合を特徴とするモダンでインタラクティブなポートフォリオウェブサイト。

## 🔗 ライブプレビュー

**[🚀 GitHub Pages デプロイ版にアクセス](https://jimmfly.github.io/resume/)**

## ✨ 主要機能

### 🎨 ビジュアル体験

- **没入感のあるパララックススクロール**: 深度と没入感を生み出すマルチレイヤーパララックス効果
- **3Dインタラクティブ要素**: リアルなテクスチャと照明を持つインタラクティブな3D地球モデル
- **スムーズなアニメーション**: Framer Motionによるスムーズなトランジションとマイクロインタラクション
- **モダンダークテーマ**: グラデーションアクセントを持つエレガントなダークカラースキーム
- **完全レスポンシブ**: すべてのデバイスと画面サイズに完璧に対応

### 🚀 ユーザー体験

- **超高速ローディング**: Viteによる開発と最適化されたプロダクションビルド
- **プログレッシブエンハンスメント**: より良いアクセシビリティのための段階的劣化
- **国際化**: 多言語サポート（中国語、英語、日本語）
- **SEO最適化**: セマンティックHTML構造とメタタグ最適化

### 📧 連絡機能

- **スマートメール統合**: 事前入力されたコンテンツでワンクリックメール作成
- **ソーシャルメディアリンク**: プロフェッショナルなソーシャルプラットフォームへの直接リンク
- **連絡フォーム**: バリデーション付きインタラクティブ連絡フォーム

### 🤖 AIチャットアシスタント

- **OpenAI GPT統合**: インテリジェントな会話型AIアシスタント
- **ストリーミングレスポンス**: より良いUXのためのリアルタイムレスポンスストリーミング
- **使用制限**: 内蔵のレート制限とセッション管理
- **セキュリティ機能**: APIキー保護と入力検証

## 🛠️ 技術スタック

### フロントエンドフレームワーク

- **React 18** - 並行機能を持つ最新のReact
- **TypeScript** - タイプセーフな開発体験
- **Vite** - 次世代フロントエンドツール

### スタイリング & UI

- **Tailwind CSS** - ユーティリティファーストCSSフレームワーク
- **Framer Motion** - プロダクション対応モーションライブラリ
- **Lucide React** - 美しく一貫したアイコンライブラリ

### 3Dグラフィックス

- **Three.js** - クロスブラウザ3Dグラフィックスライブラリ
- **React Three Fiber** - Three.js用Reactレンダラー
- **React Three Drei** - React Three Fiberの便利なヘルパー

### AI統合

- **LangChain.js** - AIアプリケーション開発フレームワーク
- **OpenAI GPT** - 高度な言語モデル統合

### 国際化

- **react-i18next** - 国際化フレームワーク
- **i18next** - 国際化エコシステム

### 開発ツール

- **ESLint** - コードリンティングと品質保証
- **Prettier** - コードフォーマット
- **TypeScript** - 静的型チェック

## 🚀 クイックスタート

### 前提条件

- Node.js 18+ と npm/yarn
- WebGLサポートのあるモダンブラウザ
- OpenAI APIキー（オプション、チャットボット機能用）

### インストール & セットアップ

1. **リポジトリをクローン**

   ```bash
   git clone https://github.com/yourusername/resume-portfolio-optimized.git
   cd resume-portfolio-optimized
   ```

2. **依存関係をインストール**

   ```bash
   yarn install
   # または
   npm install
   ```

3. **環境設定**

   ```bash
   cp .env.example .env.local
   ```

   `.env.local`を編集して設定を追加：

   ```env
   # OpenAI APIキー（オプション）
   VITE_OPENAI_API_KEY=your_openai_api_key_here

   # メール設定
   VITE_EMAIL_ADDRESS=your.email@example.com

   # アナリティクス（オプション）
   VITE_GA_TRACKING_ID=your_google_analytics_id
   ```

4. **開発サーバーを起動**

   ```bash
   yarn dev
   # または
   npm run dev
   ```

   ブラウザで [http://localhost:5173](http://localhost:5173) を開く。

5. **プロダクション用ビルド**

   ```bash
   yarn build
   # または
   npm run build
   ```

6. **プロダクションビルドをプレビュー**
   ```bash
   yarn preview
   # または
   npm run preview
   ```

## 🤖 チャットボット機能

### コア機能

- **インテリジェントな会話**: OpenAI GPTモデルによる駆動
- **ストリーミングレスポンス**: リアルタイムレスポンス生成
- **コンテキスト認識**: 会話コンテキストの維持
- **多言語サポート**: ユーザーの好みの言語で応答

### セキュリティ & 制限

- **レート制限**: 設定可能な制限でAPI乱用を防止
- **セッション管理**: 自動セッションタイムアウトとクリーンアップ
- **入力検証**: セキュリティのためのユーザー入力サニタイズ
- **エラーハンドリング**: ユーザーフレンドリーなメッセージでの優雅なエラーハンドリング

### 使用制限

- **メッセージ制限**: セッションあたり10メッセージ（設定可能）
- **レート制限**: リクエスト間3秒のクールダウン
- **セッション期間**: 最大30分のセッション長
- **API保護**: 安全なAPIキーハンドリング

## ⚡ パフォーマンス最適化

### コード分割

- **React.lazy + Suspense**: 動的コンポーネントローディング
- **ルートベース分割**: 最適化されたバンドルサイズ
- **コンポーネントレベル分割**: 細かいローディング制御

### バンドル分析

- **バンドルアナライザー**: バンドルサイズ分析用`yarn analyze`
- **ツリーシェイキング**: 自動デッドコード除去
- **アセット最適化**: 最適化された画像とフォント

### レンダリング最適化

- **React.memo**: 不要な再レンダリングを防止
- **useMemo & useCallback**: 最適化されたフック使用
- **3Dレンダリング最適化**: 効率的なThree.jsレンダリング
- **遅延ローディング**: プログレッシブコンテンツローディング

### パフォーマンス指標

- **Lighthouseスコア**: 95+のパフォーマンススコア
- **First Contentful Paint**: < 1.5秒
- **Largest Contentful Paint**: < 2.5秒
- **Cumulative Layout Shift**: < 0.1
- **FPS**: スムーズな60fpsアニメーション

### さらなる最適化提案

- **画像最適化**: WebP形式とレスポンシブ画像の使用
- **キャッシュ戦略**: オフラインサポート用サービスワーカーの実装
- **パフォーマンス監視**: リアルタイムパフォーマンストラッキングの追加

## 🛠️ 開発ガイド

### 推奨IDE設定

- **VS Code** と拡張機能：
  ```
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Importer
  - Prettier - Code formatter
  - ESLint
  ```

### コード規準

```bash
# コードリンティングを実行
yarn lint

# コードフォーマットを自動修正
yarn lint:fix

# 型チェック
yarn type-check
```

### Gitフック

```bash
# プリコミットフックが自動的にlintとformatを実行
# huskyとlint-stagedで設定済み
```

### テスト

```bash
# ユニットテストを実行
yarn test

# テストカバレッジを実行
yarn test:coverage

# E2Eテストを実行
yarn test:e2e
```

### パフォーマンス分析

```bash
# バンドルサイズを分析
yarn analyze

# パフォーマンス監査
yarn audit

# セキュリティ監査
yarn audit:security
```

## 🎨 カスタマイズガイド

### コンテンツカスタマイズ

1. **個人情報**

   ```typescript
   // src/constants/index.ts
   export const HERO_CONTENT = {
     greeting: 'こんにちは、私は',
     name: 'あなたの名前',
     title: 'あなたの肩書き',
     description: 'あなたの説明',
   }
   ```

2. **プロジェクトデータ**

   ```typescript
   // src/components/sections/ProjectsSection.tsx
   const projects = [
     {
       title: 'プロジェクト名',
       description: 'プロジェクト説明',
       technologies: ['React', 'TypeScript'],
       github: 'https://github.com/username/repo',
       demo: 'https://demo-url.com',
     },
   ]
   ```

3. **スキル設定**
   ```typescript
   // src/constants/index.ts
   export const SKILLS_DATA = {
     frontend: ['React', 'TypeScript', 'Tailwind CSS'],
     backend: ['Node.js', 'Python', 'PostgreSQL'],
     tools: ['Git', 'Docker', 'AWS'],
   }
   ```

### スタイルカスタマイズ

1. **テーマカラー**

   ```css
   /* src/index.css */
   :root {
     --primary-color: #your-color;
     --secondary-color: #your-color;
     --accent-color: #your-color;
   }
   ```

2. **アニメーション設定**

   ```typescript
   // src/constants/index.ts
   export const ANIMATION_CONFIG = {
     duration: {
       fast: 0.3,
       normal: 0.5,
       slow: 0.8,
     },
   }
   ```

3. **パララックス効果調整**
   ```typescript
   // src/constants/index.ts
   export const PARALLAX_CONFIG = {
     elements: {
       slow: 0.2,
       normal: 0.5,
       fast: 0.8,
     },
   }
   ```

### 機能設定

1. **チャットボット設定**

   ```typescript
   // src/components/ChatBot/ChatBot.tsx
   <ChatBot
     maxMessagesPerSession={10}
     rateLimitMs={3000}
     maxSessionDuration={30}
   />
   ```

2. **3D効果パラメータ**
   ```typescript
   // src/constants/index.ts
   export const GLOBE_CONFIG = {
     rotation: { speed: 0.005 },
     material: { roughness: 0.8 },
   }
   ```

## 🔧 トラブルシューティング

### よくある問題

1. **チャットボットが動作しない**
   - 環境変数で`VITE_OPENAI_API_KEY`が設定されているか確認
   - APIキーの有効性とクォータを確認
   - ブラウザコンソールでエラーメッセージを確認

2. **3Dモデルが表示されない**
   - ブラウザがWebGLをサポートしているか確認
   - ハードウェアアクセラレーションが有効になっているか確認
   - Three.js依存関係がインストールされているか確認

3. **ビルド失敗**
   - node_modulesをクリアして再インストール: `rm -rf node_modules && yarn install`
   - Node.jsバージョンの互換性を確認（18+）
   - すべての環境変数が設定されているか確認

4. **パフォーマンス問題**
   - ローエンドデバイスで3D効果を無効化
   - アニメーションの複雑さを減らす
   - ブラウザ開発ツールでメモリリークをチェック

### デバッグのヒント

1. **開発ツール**

   ```bash
   # 詳細ログを有効化
   VITE_DEBUG=true yarn dev

   # パフォーマンスプロファイリング
   yarn dev --profile
   ```

2. **ログ記録**
   ```typescript
   // 開発でデバッグモードを有効化
   const DEBUG = import.meta.env.VITE_DEBUG === 'true'
   if (DEBUG) console.log('デバッグ情報')
   ```

## 📋 ベストプラクティス

### コード組織

1. **コンポーネント設計原則**
   - 単一責任原則
   - 継承よりコンポジション
   - Propsインターフェースドキュメント

2. **ファイル命名規則**
   - コンポーネント用PascalCase: `MyComponent.tsx`
   - ユーティリティ用camelCase: `myUtility.ts`
   - アセット用kebab-case: `my-image.png`

3. **インポート順序**

   ```typescript
   // 1. Reactと外部ライブラリ
   import React from 'react'
   import { motion } from 'framer-motion'

   // 2. 内部コンポーネント
   import { MyComponent } from './MyComponent'

   // 3. ユーティリティと定数
   import { CONSTANTS } from '../constants'

   // 4. 型
   import type { MyType } from '../types'
   ```

### パフォーマンスベストプラクティス

1. **コンポーネント最適化**
   - 重いコンポーネントにReact.memoを使用
   - フックで適切な依存配列を実装
   - レンダー内でのインラインオブジェクト/関数作成を避ける

2. **遅延ローディング**
   - ルートベースコード分割を実装
   - 重いコンポーネントにReact.lazyを使用
   - プログレッシブ画像ローディング

3. **リソース最適化**
   - 画像を最適化（WebP、レスポンシブ）
   - バンドルサイズを最小化
   - 静的アセットにCDNを使用

### セキュリティベストプラクティス

1. **環境変数管理**
   - シークレットをリポジトリにコミットしない
   - 開発/本番で異なるキーを使用
   - 起動時に環境変数を検証

2. **APIセキュリティ**
   - 適切なレート制限を実装
   - ユーザー入力を検証・サニタイズ
   - 本番でHTTPSを使用

## 🏗️ プロジェクトアーキテクチャ

### レイヤードアーキテクチャ

```
┌─────────────────────────────────────────────────────────────┐
│                    プレゼンテーション層                      │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│  │   React     │ │   Framer    │ │      Three.js           │ │
│  │ Components  │ │   Motion    │ │    (3D Graphics)        │ │
│  └─────────────┘ └─────────────┘ └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                     ビジネス層                              │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│  │   Custom    │ │    State    │ │      AI Integration     │ │
│  │   Hooks     │ │ Management  │ │     (LangChain.js)      │ │
│  └─────────────┘ └─────────────┘ └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                      データ層                               │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│  │ Constants & │ │    i18n     │ │       API Services      │ │
│  │    Types    │ │ Resources   │ │      (OpenAI API)       │ │
│  └─────────────┘ └─────────────┘ └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### 技術的決定

#### なぜこれらの技術を選んだのか？

1. **React 18 + TypeScript**
   - ✅ 強力な型サポートでランタイムエラーを削減
   - ✅ モダンなReact機能（並行機能）
   - ✅ 優秀な開発体験とエコシステム

2. **Viteビルドツール**
   - ✅ 超高速開発サーバー起動
   - ✅ ネイティブESモジュールサポート
   - ✅ 最適化されたプロダクションビルド

3. **Tailwind CSS**
   - ✅ ユーティリティファースト設計哲学
   - ✅ 高度にカスタマイズ可能
   - ✅ 優秀なパフォーマンス（PurgeCSS）

4. **Framer Motion**
   - ✅ 宣言的アニメーションAPI
   - ✅ 優秀なパフォーマンス
   - ✅ 豊富なアニメーション機能

5. **Three.js + React Three Fiber**
   - ✅ 強力な3Dレンダリング機能
   - ✅ Reactエコシステム統合
   - ✅ アクティブなコミュニティサポート

6. **LangChain.js + OpenAI**
   - ✅ モダンAIアプリケーション開発フレームワーク
   - ✅ ストリーミングレスポンスサポート
   - ✅ 柔軟な設定オプション

### 詳細ディレクトリ構造

```
src/
├── components/                 # コンポーネントディレクトリ
│   ├── 3d/                    # 3D関連コンポーネント
│   │   ├── GlobeDemo.tsx      # 3D地球コンポーネント
│   │   └── RealisticGlobe.tsx # リアル地球モデル
│   ├── ChatBot/               # AIチャットコンポーネント
│   │   ├── ChatBot.tsx        # メインチャットコンポーネント
│   │   └── index.ts           # エクスポートファイル
│   ├── sections/              # ページセクションコンポーネント
│   │   ├── HeroSection.tsx    # ヒーローセクション
│   │   ├── AboutSection.tsx   # 自己紹介
│   │   ├── SkillsSection.tsx  # スキルショーケース
│   │   ├── ProjectsSection.tsx # プロジェクトショーケース
│   │   ├── ExperienceSection.tsx # 職歴
│   │   └── ContactSection.tsx # 連絡先情報
│   └── ui/                    # UIコンポーネント
│       ├── ParallaxContainer.tsx # パララックスコンテナ
│       ├── ErrorBoundary.tsx  # エラーバウンダリ
│       └── withErrorBoundary.tsx # HOC
├── hooks/                     # カスタムフック
│   ├── useParallax.ts        # パララックススクロール
│   ├── useAnimation.ts       # アニメーション効果
│   └── useInView.ts          # ビュー検出
├── constants/                 # 定数設定
│   └── index.ts              # グローバル定数
├── i18n/                     # 国際化
│   ├── index.ts              # i18n設定
│   └── locales/              # 言語ファイル
│       ├── en.json           # 英語
│       ├── zh.json           # 中国語
│       └── ja.json           # 日本語
├── types/                    # 型定義
│   └── index.ts              # グローバル型
├── utils/                    # ユーティリティ関数
│   └── index.ts              # ユーティリティメソッド
├── assets/                   # 静的アセット
│   ├── models/               # 3Dモデル
│   └── textures/             # テクスチャマップ
├── App.tsx                   # メインアプリコンポーネント
├── main.tsx                  # アプリエントリーポイント
└── index.css                 # グローバルスタイル
```

### データフロー

```
ユーザーインタラクション
       ↓
  Reactコンポーネント
       ↓
   カスタムフック
       ↓
  状態管理
       ↓
   APIサービス
       ↓
  外部API
```

## 📸 プロジェクトスクリーンショット

### デスクトップビュー

- **ヒーローセクション**: パララックス効果を持つ没入感のある3D地球
- **アバウトセクション**: スキルハイライト付きプロフェッショナル紹介
- **プロジェクトセクション**: ホバー効果付きインタラクティブプロジェクトショーケース
- **コンタクトセクション**: ソーシャルリンク付きエレガントな連絡フォーム

### モバイルビュー

- **レスポンシブデザイン**: すべての画面サイズに最適化
- **タッチインタラクション**: モバイルフレンドリーなジェスチャーサポート
- **パフォーマンス**: モバイルデバイス用に最適化

### AIチャットボット

- **インテリジェントな会話**: 自然言語処理
- **ストリーミングレスポンス**: リアルタイムレスポンス生成
- **多言語サポート**: ユーザーの言語で応答

_注意: 視覚的魅力と機能性を示すために実際のスクリーンショットを追加してください_

## 🚀 デプロイメント

### GitHub Pages

```bash
# GitHub Pagesにビルドしてデプロイ
yarn build
yarn deploy
```

### Vercel

```bash
# Vercelにデプロイ
vercel --prod
```

### Netlify

```bash
# Netlifyにデプロイ
netlify deploy --prod --dir=dist
```

### Docker

```dockerfile
# プロダクション用マルチステージビルド
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🤝 コントリビューション

1. リポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をコミット (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュ (`git push origin feature/AmazingFeature`)
5. プルリクエストを開く

### 開発ガイドライン

- 既存のコードスタイルに従う
- 新機能にテストを追加
- 必要に応じてドキュメントを更新
- 提出前にすべてのテストが通ることを確認

## 📝 変更履歴

### v2.0.0 (最新)

- ✨ AIチャットボット統合を追加
- 🎨 リアルなテクスチャで3D地球を強化
- 🌍 多言語サポートを実装
- ⚡ パフォーマンス最適化
- 🔒 セキュリティ機能を強化

### v1.0.0

- 🎉 初回リリース
- 📱 レスポンシブデザイン実装
- 🎭 パララックススクロール効果
- 💼 ポートフォリオセクション

## 📄 ライセンス

このプロジェクトはMITライセンスの下でライセンスされています - 詳細は[LICENSE](LICENSE)ファイルを参照してください。

## 👨‍💻 作者

**Yang Jinfei**

- GitHub: [@jimmfly](https://github.com/jimmfly)
- Email: jimmflyyang@gmail.com
- LinkedIn: [Yang Jinfei](https://linkedin.com/in/yangjinfei)

---

⭐ このプロジェクトが役に立った場合は、スターをお願いします！

🚀 情熱とモダンなウェブ技術で構築
