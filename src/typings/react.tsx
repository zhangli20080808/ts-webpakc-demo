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

interface Element {}

interface DOMElement<P, T> extends Element {}
interface DetailedReactHTMLElement<P,T> extends DOMElement<P,T> {}
/**
 * 类型为 let element = React.createElement('h1', { className: 'hello' });
 * DOMElement - 继承自ReactElement
 * P - 代表元素属性 T - 代表元素类型
 * @param type
 * @param props
 * @param children
 */
declare function createElement<P, T extends Element>(
  type: string, // 元素类型 字符串 h1 span dev
  props?: P | null, // 属性对象
  ...children: ReactNode[]
): DOMElement<P, T>;

// function createElement<P extends DOMAttributes<T>, T extends Element>(
//   type: string, // 元素类型 字符串 h1 span dev
//   props?: (ClassAttributes<T> & P) | null, // 属性对象
//   ...children: ReactNode[]
// ): DOMElement<P, T>;
