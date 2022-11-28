## 初始化项目
mkdir ts-webpakc-demo
cd ts-webpakc-demo
npm init -y

## 安装依赖
npm i webpack webpack-cli ts-loader typescript --save-dev

## 新建 webpack.config.js

## 配置脚本命令 package.json

## 配置 react 项目 - 使用 ts-loader

npm i react react-dom -S
npm i @types/react @types/react-dom -D
// npm install awesome-typescript-loader --save-dev 两个 loader 可以选择一个，前面安装了 ts-loader，可以暂时不安装这个

## tsconfig.json
```
{
  "compilerOptions": {
    "esModuleInterop": true, // 让多天export风格能够统一，能够被识别
    "jsx": "react" // ts解析ts
  }
}
```

## 配置 react 项目 - react + babel-preset

[preset 和 plugin 的概念](https://juejin.cn/post/6844903616554221576)
可以简单的认为 preset 是 plugins 的集合，可以将多个 plugins 打包到一个 preset 去使用

### babel 依赖

npm i babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript --save-dev 
babel-loader - webpack和babel通信的一个bridge，并不会去做es6的编译，需要借助其他模块
@babel/preset-env - 包含了所有 ES6 转化成 ES5 的翻译规则
@babel/preset-react - 对react语法的转换
@babel/preset-typescript  https://www.babeljs.cn/docs/babel-preset-typescript

### babel-preset 和 ts-loader 的简单区别？
1. babel-loader - 背后是 babel(编写下一代 JavaScript 的编译器)

- [babel](https://babeljs.io/) 是干嘛的？ 所有编译 js 的事情，babel 都做。 es6 -> es5 -> es3 -> polifill。具备很多优点，生态更广，插件更多
- 缓存 + 优化
- 插件 + 生态

2. ts-loader - 背后是 tsc , 主要将 ts-es

### 拓展学习
1. 新增vue文件的配置，结合  @babel/preset-react 思考 @babel/preset-vue 做了哪些事情？


## 基础类型 - 目标：熟悉TS的基本操作
1. any - 任意类型，可以作为任何类型的子类，unknown不行
2. unknown - 未知类型，任何类型都可以赋值给它，但是它不可以赋值给别的类型。可以理解为any的替代品，更为安全。

3. never - 代表不可达，比如函数抛出异常的时候，返回值就是never
