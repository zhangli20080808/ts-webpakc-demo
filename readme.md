## 初始化项目
mkdir ts-webpakc-demo
cd ts-webpakc-demo
npm init -y
## 安装依赖
npm i webpack webpack-cli ts-loader typescript --save-dev

## 新建 webpack.config.js
## 配置脚本命令 package.json
## 配置react项目
npm i react react-dom  -S
npm i @types/react @types/react-dom -D
npm install awesome-typescript-loader --save-dev

## tsconfig.json
```
{
  "compilerOptions": {
    "esModuleInterop": true, // 让多天export风格能够统一，能够被识别
    "jsx": "react" // ts解析ts
  }
}
```