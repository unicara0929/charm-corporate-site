# 株式会社CHARM コーポレートサイト

## 概要
銀行提携のための信頼性担保を目的としたコーポレートサイト（1ページ完結型）

## ファイル構成
```
charm_project/
├── index.html                              # メインHTML（CSS/JS含む）
├── CHARM_コーポレートサイト_要件定義書.docx  # 要件定義書
├── images/                                 # 画像フォルダ（ロゴ・背景画像用）
└── README.md                               # このファイル
```

## 会社情報
- **社名**: 株式会社CHARM
- **所在地**: 〒460-0003 名古屋市中区錦三丁目５番３０号三晃錦ビル４Ｆ
- **電話番号**: 052-990-0362
- **事業内容**: 
  - 太陽光事業
  - 事務代行／バックオフィス業務

## デザインコンセプト
- **テイスト**: クリーン、爽やか、プロフェッショナル
- **カラー**:
  - Primary: #4A90A4（パステルブルー）
  - Secondary: #7BC9A6（パステルグリーン）
  - Dark: #2C5F6F（ダークブルー）
  - Light: #E8F5F7（ライトブルー）

## 実装済み機能
- ✅ グラスモーフィズム（すりガラス効果）
- ✅ パーティクル背景（Particles.js）
- ✅ カスタムカーソル
- ✅ スクロールアニメーション
- ✅ スクロールプログレスバー
- ✅ ローディングアニメーション
- ✅ レスポンシブ対応
- ✅ 背景画像（Unsplash）

## カスタマイズ方法

### 1. 会社情報の更新
`index.html` 内の「（準備中）」部分を実際の情報に置き換え

### 2. ロゴの設定
1. ロゴ画像を `images/logo.png` として保存
2. HTMLの `.logo` 部分を `<img src="images/logo.png" alt="CHARM">` に変更

### 3. 背景画像の変更
1. 画像を `images/hero-bg.jpg` として保存
2. CSSの `.hero` の `background` の URL を `url('images/hero-bg.jpg')` に変更

## 外部依存関係
- Google Fonts（Inter, Poppins）
- Particles.js（CDN）

※ インターネット接続が必要です

## デプロイ推奨
- Netlify（ドラッグ&ドロップで簡単デプロイ）
- GitHub Pages
- Vercel

## ブラウザ対応
- Chrome ○
- Firefox ○
- Safari ○
- Edge ○
- IE11 ×

---
作成日: 2025年1月
