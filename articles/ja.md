# サーバーサイドレンダリング完全に理解したので仮説検証してみた [Next.js]

## 概要

Next.js はリクエストを受け、サーバーサイドレンダリングを行い、レスポンスを受け取ったブラウザはハイドレーションを行い、その後はブラウザ上で再描画が行われる。

## つまりこういうことですよね？検証したい仮説

- JavaScript を OFF にして開いた場合
  - React では JSX が一切レンダリングされない。
  - Next.js ではサーバーサイドレンダリングにより一部描画が行われてレスポンスされる