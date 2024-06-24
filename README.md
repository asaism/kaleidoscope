# Real-time Geometric Kaleidoscope Web Application

## Overview

This project is a web application that generates a geometric kaleidoscope effect using real-time webcam footage. It utilizes the Three.js library and WebGL shaders to provide a dynamic and interactive visual experience.

## Key Features

- Uses real-time webcam video input
- Geometric kaleidoscope effect based on large triangular patterns
- Soft color expression using pastel colors
- Dynamic distortion and animation effects
- Responsive design adapting to various screen sizes

## Technology Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Three.js
- WebGL Shaders

## Setup Instructions

1. Clone or download this repository.
2. Navigate to the project directory.
3. Open the `index.html` file in a web browser.

Note: If opening files directly locally, browser security settings may restrict access to the webcam. In this case, it's recommended to run the application using a local web server.

## How to Use

1. When you launch the application, you'll be prompted to allow access to your webcam.
2. Once permission is granted, the kaleidoscope effect will be displayed full-screen.
3. The video captured by your webcam will be reflected in the kaleidoscope pattern.
4. The pattern will dynamically change in response to movement and light changes.

## Code Structure

### HTML (index.html)

The HTML file has a minimal structure, mainly containing video and canvas elements. It also loads necessary styles and scripts.

### JavaScript (kaleidoscope.js)

This file includes the Three.js setup and shader implementation. Main functionalities include:

- Setting up Three.js scene, camera, and renderer
- Acquiring and setting up the webcam video stream
- Creating and applying custom shader material
- Implementing the animation loop
- Handling window resizing

### Shaders

Vertex and fragment shaders are defined as strings within the `kaleidoscope.js` file.

#### Vertex Shader

A simple vertex shader that sets up vertex coordinates and UV coordinates.

#### Fragment Shader

The fragment shader plays a central role in creating the kaleidoscope effect, implementing the following key functions:

- Kaleidoscope segment division and reflection
- Generation of large triangular patterns
- Generation and application of pastel colors
- Application of dynamic distortion effects
- Edge enhancement

## Customization

You can customize the visual effects by adjusting various parameters in the shader code:

- `segments`: Number of kaleidoscope segments
- `scale`: Pattern scale
- Mix ratio between pastel colors and original image
- Distortion intensity
- Edge emphasis level

## Performance Note

This application uses WebGL for advanced graphics processing. Performance depends on the graphics capabilities of the device being used. Frame rates may decrease on low-spec devices.

## Future Developments

- Addition of user interface (e.g., effect customization features)
- Implementation of more complex patterns and effects
- Optimization for mobile devices
- Addition of image saving functionality

## License

This project is released under the MIT License. See the `LICENSE` file for details.

## Contributing

Contributions in any form - bug reports, feature requests, pull requests - are welcome. Before making significant changes, it's recommended to open an issue to discuss the proposed changes.

## Acknowledgements

This project is based on the fantastic work of the Three.js community and WebGL pioneers. Without their contributions, creating such an interactive visual experience would not have been possible.

---

# リアルタイム幾何学的万華鏡 Web アプリケーション

## 概要

このプロジェクトは、Webカメラのリアルタイム映像を使用して幾何学的な万華鏡効果を生成するWebアプリケーションです。Three.jsライブラリとWebGLシェーダーを活用して、動的でインタラクティブな視覚体験を提供します。

## 主な特徴

- Webカメラのリアルタイム映像を使用
- 大きな三角形パターンを基調とした幾何学的な万華鏡効果
- パステルカラーを用いた柔らかい色彩表現
- 動的な歪みとアニメーション効果
- レスポンシブデザインで様々な画面サイズに対応

## 技術スタック

- HTML5
- CSS3
- JavaScript (ES6+)
- Three.js
- WebGL シェーダー

## セットアップ方法

1. このリポジトリをクローンまたはダウンロードします。
2. プロジェクトディレクトリに移動します。
3. `index.html` ファイルをWebブラウザで開きます。

注意: ローカルでファイルを直接開く場合、ブラウザのセキュリティ設定によってはWebカメラへのアクセスが制限される可能性があります。その場合は、ローカルWebサーバーを使用してアプリケーションを実行することをお勧めします。

## 使用方法

1. アプリケーションを起動すると、Webカメラへのアクセス許可を求められます。
2. 許可を与えると、画面全体に万華鏡効果が表示されます。
3. Webカメラに映る映像が万華鏡パターンとして反映されます。
4. 動きや光の変化に応じて、パターンが動的に変化します。

## コード構造

### HTML (index.html)

HTMLファイルは最小限の構造を持ち、主にビデオ要素とキャンバス要素を含みます。また、必要なスタイルとスクリプトを読み込みます。

### JavaScript (kaleidoscope.js)

このファイルには、Three.jsのセットアップとシェーダーの実装が含まれています。主な機能は以下の通りです：

- Three.jsのシーン、カメラ、レンダラーのセットアップ
- Webカメラのビデオストリームの取得と設定
- カスタムシェーダーマテリアルの作成と適用
- アニメーションループの実装
- ウィンドウリサイズへの対応

### シェーダー

頂点シェーダーとフラグメントシェーダーは、`kaleidoscope.js`ファイル内で文字列として定義されています。

#### 頂点シェーダー

シンプルな頂点シェーダーで、頂点座標とUV座標を設定します。

#### フラグメントシェーダー

フラグメントシェーダーは万華鏡効果の中心的な役割を果たし、以下の主要な機能を実装しています：

- 万華鏡のセグメント分割と反射
- 大きな三角形パターンの生成
- パステルカラーの生成と適用
- 動的な歪み効果の適用
- エッジの強調

## カスタマイズ

シェーダーコード内の various パラメータを調整することで、視覚効果をカスタマイズできます：

- `segments`: 万華鏡のセグメント数
- `scale`: パターンのスケール
- パステルカラーと元の画像のミックス比率
- 歪みの強度
- エッジの強調度

## パフォーマンスに関する注意

このアプリケーションは、WebGLを使用して高度なグラフィック処理を行います。パフォーマンスは使用するデバイスのグラフィック性能に依存します。低スペックのデバイスでは、フレームレートが低下する可能性があります。

## 今後の展開

- ユーザーインターフェースの追加（エフェクトのカスタマイズ機能など）
- より複雑なパターンや効果の実装
- モバイルデバイスの最適化
- 画像保存機能の追加

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は`LICENSE`ファイルを参照してください。

## 貢献

バグ報告、機能リクエスト、プルリクエストなど、あらゆる形での貢献を歓迎します。大きな変更を加える前に、まずissueを開いて変更内容について討論することをお勧めします。

## 謝辞

このプロジェクトは、Three.jsコミュニティとWebGLの先駆者たちの素晴らしい仕事に基づいています。彼らの貢献なしには、このようなインタラクティブな視覚体験の創造は不可能でした。
