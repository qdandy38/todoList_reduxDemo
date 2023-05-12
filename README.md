# Getting Started with Create React App

## [Demo](https://todo-list-redux-demo.vercel.app/)

## 使用套件

|     軟體     |      版本      |
| :----------: | :------------: |
| react | `create-react-app` |
| tailwind | `css庫` |
| postcss | `轉換css` |
| react-router | `react路由` |
| redux | redux-toolkit |
| redux-persist | `redux永久儲存` |
| redux-thunk | `redux處理非同步` |

## 資料夾結構

├─src
|  ├─App.jsx `最上層Component`
|  ├─index.jsx `主要入口`
|  ├─image
|  ├─router `路由管理`
|  ├─store `redux管理`
|  |   ├─index.jsx `redux統一出口`
|  |   └todoSlice.jsx `各功能拆分slice`
|  ├─style `.css`
|  ├─views `放router頁面`
|  ├─components `放components`
├─tailwind.config.js `tailwind設定`
├─postcss.config.js `postcss設定`
