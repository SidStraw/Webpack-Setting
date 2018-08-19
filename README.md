---
title: 使用者後台專案筆記
tags: 
notebook: 10前端筆記
---

# 使用者後台專案筆記

## Webpack環境設定
流程：
1. `npm i -D webpack webpack-dev-server webpack-cli` 安裝Webpack
2. 新增 `webpack.config.js` 並進行設定
3. 於 `package.json` 新增 `"scripts": {...}` 相關參數 `"webpack": "webpack --mode development"` 表示是開發模式，產品模式時請更改為 `"webpack": "webpack --mode production"`






`devtool: "eval-source-map"`
用以在打包後檢視Code的封裝來源