// global.d.ts
// HTMLInputElement -> HTMLElement -> Element【Element指原生DOM对象元素，而不是React里面的东西，而是Dom里的类型】

import { Key } from 'react';

// ReactChild ,ReactText 已经被废弃了
type ReactChild = ReactElement | string | number;
type ReactText = string | number;

// React元素 - 就是虚拟DOM
type JSXElementConstructor<P> = (props: P) => ReactElement<any, any> | null;
// | (new (props: P) => Component<any, any>);
interface ReactElement<
  P = any,
  T extends string | JSXElementConstructor<any> =
    | string
    | JSXElementConstructor<any>
> {
  type: T; // T - 元素类型
  props: P; // P - 属性对象
  key: Key | null;
}

// ReactNode - 代表一个可以渲染dom的节点，或者可渲染的react节点
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

// 针对于浏览器原生类型 dom 对象类型 global  相关的
interface Element {}
interface HTMLElement extends Element {}
interface HTMLInputElement extends HTMLElement {}

/**
 * P - 代表元素属性 T - 代表真实DOM元素类型。渲染到页面之后
 * DOMAttributes<T> - Dom属性对象
 * 定义type为字符串的情况
 * 类型为 let element = React.createElement('h1', { className: 'hello' });
 *
 * @param type - 元素类型 字符串 h1 span dev
 * @param props - 属性对象
 * @param children - 子元素，儿子们
 *
 * @returns DOMElement - 继承自 ReactElement
 * DetailedReactHTMLElement - 继承自 DOMElement
 */

// function createElement<P extends DOMAttributes<T>, T extends Element>(
//   type: string, // 元素类型 字符串 h1 span dev
//   props?: (ClassAttributes<T> & P) | null, // 属性对象 交叉类型
//   ...children: ReactNode[]
// ): DOMElement<P, T>;

// 简化
declare function createElement<P, T extends Element>(
  type: string,
  props?: P | null,
  ...children: ReactNode[]
): DetailedReactHTMLElement<P, T>;

// 2. 定义函数组件类型

type FC<P = {}> = FunctionComponent<P>;
interface FunctionComponent<P = {}> {
  (props: P, context?: any): ReactElement<any, any> | null;
  // propTypes?: WeakValidationMap<P> | undefined;
  // contextTypes?: ValidationMap<any> | undefined;
  // defaultProps?: Partial<P> | undefined;
  // displayName?: string | undefined;
}
interface FunctionComponentElement<P>
  extends ReactElement<P, FunctionComponent<P>> {
  ref?:
    | ('ref' extends keyof P
        ? P extends { ref?: infer R | undefined }
          ? R
          : never
        : never)
    | undefined;
}
// declare function createElement<P extends {}>(
//   type: FunctionComponent<P>,
//   props?: (Attributes & P) | null,
//   ...children: ReactNode[]
// ): FunctionComponentElement<P>;

// function createElement<P extends DOMAttributes<T>, T extends Element>(
//   type: string, // 元素类型 字符串 h1 span dev
//   props?: (ClassAttributes<T> & P) | null, // 属性对象
//   ...children: ReactNode[]
// ): DOMElement<P, T>;

// 类组件

// declare function createElement<P extends {}>(
//   type: FunctionComponent<P> | ComponentClass<P> | string,
//   props?: Attributes & P | null,
//   ...children: ReactNode[]): ReactElement<P>;

// interface ComponentClass<P = {}, S = ComponentState> extends StaticLifecycle<P, S> {
//   new (props: P, context?: any): Component<P, S>;
//   propTypes?: WeakValidationMap<P> | undefined;
//   contextType?: Context<any> | undefined;
//   contextTypes?: ValidationMap<any> | undefined;
//   childContextTypes?: ValidationMap<any> | undefined;
//   defaultProps?: Partial<P> | undefined;
//   displayName?: string | undefined;
// }

// type Provider<T> = ProviderExoticComponent<ProviderProps<T>>;
// type Consumer<T> = ExoticComponent<ConsumerProps<T>>;
interface Context<T> {
  Provider: Provider<T>;
  Consumer: Consumer<T>;
  displayName?: string | undefined;
}
class Component<P, S> {
  static contextType?: Context<any> | undefined;
  context: unknown;
  constructor(props: Readonly<P> | P);
  constructor(props: P, context: any);
  setState<K extends keyof S>(
    state:
      | ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, K> | S | null)
      | (Pick<S, K> | S | null),
    callback?: () => void
  ): void;
  forceUpdate(callback?: () => void): void;
  render(): ReactNode;
  readonly props: Readonly<P>;
  state: Readonly<S>;
  refs: {
    [key: string]: ReactInstance;
  };
}
