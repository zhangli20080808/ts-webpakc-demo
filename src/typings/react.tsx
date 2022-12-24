// global.d.ts
// HTMLInputElement -> HTMLElement -> Element【Element指原生DOM对象元素，而不是React里面的东西，而是Dom里的类型】

import { Key } from 'react';

// ReactChild 已经被废弃了
type ReactText = string | number;
// React元素 - 虚拟DOM
interface ReactElement<P = any, T extends string = string> {
  type: T;
  props: P;
  key: Key | null;
}
// ReactNode - 代表一个可以渲染的节点
type ReactNode =
  | ReactElement
  | string
  | number
  //   | ReactFragment
  //   | ReactPortal
  | boolean
  | null
  | undefined;

// 针对于react相关 ReactElement 为顶级元素
// 顶部 - 儿子 - 孙子   ReactElement ->  DOMElement -> DetailedReactHTMLElement
interface DOMElement<P, T> extends ReactElement {}
interface DetailedReactHTMLElement<P, T> extends DOMElement<P, T> {}

// 针对于浏览器原生类型 global  相关的
interface Element {}
interface HTMLElement extends Element {}
interface HTMLInputElement extends HTMLElement {}




/**
 * 定义type为字符串
 * 类型为 let element = React.createElement('h1', { className: 'hello' });
 * DOMElement - 继承自ReactElement
 * P - 代表元素属性 T - 代表真实DOM元素类型。渲染到页面之后
 * @param type
 * @param props
 * @param children
 */
declare function createElement<P, T extends Element>(
  type: string, // 元素类型 字符串 h1 span dev
  props?: P | null, // 属性对象
  ...children: ReactNode[]
): DetailedReactHTMLElement<P, T>;



type FC<P = {}> = FunctionComponent<P>;

// 2. 定义函数组件类型
interface FunctionComponent<P = {}> {
    (props: P, context?: any): ReactElement<any, any> | null;
    // propTypes?: WeakValidationMap<P> | undefined;
    // contextTypes?: ValidationMap<any> | undefined;
    // defaultProps?: Partial<P> | undefined;
    // displayName?: string | undefined;
}
interface FunctionComponentElement extends ReactElement {}

 


// function createElement<P extends DOMAttributes<T>, T extends Element>(
//   type: string, // 元素类型 字符串 h1 span dev
//   props?: (ClassAttributes<T> & P) | null, // 属性对象
//   ...children: ReactNode[]
// ): DOMElement<P, T>;

