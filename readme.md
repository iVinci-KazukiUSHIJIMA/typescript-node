# サーバーサイドレンダリング完全に理解したので仮説検証してみた [Next.js]

## 概要

Next.js はリクエストを受け、サーバーサイドレンダリングを行い、レスポンスを受け取ったブラウザはハイドレーションを行い、その後はブラウザ上で再描画が行われる。  
つまり、ブラウザの JavaScript を Off にして表示した際には下記のようなことが起こるはず。  
ということを考え、検証してみた

## 構成

- articles
  - 検証内容をまとめた記事
  - [ja.md](./articles/ja.md)
- my-sample-next-app
  - 検証で使用した Next.js アプリケーション
  - [README.md](./my-sample-next-app/README.md)
- my-sample-react-app
  - 検証で使用した React アプリケーション
  - [README.md](./my-sample-react-app/README.md)
