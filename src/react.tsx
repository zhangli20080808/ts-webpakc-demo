import React, {
  DetailedReactHTMLElement,
  FunctionComponent,
  ReactElement,
} from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

interface State {
  id: string;
}
interface Props {
  className: string;
}

const props: Props = { className: 'title' };
const element1: DetailedReactHTMLElement<Props, HTMLHeadingElement> =
  React.createElement<Props, HTMLHeadingElement>('h1', props, 'hello');
// console.log(element1);

// 2.函数组件
const Hello: FunctionComponent<Props> = (props: Props) => {
  return React.createElement<Props, HTMLHeadingElement>('h1', props, 'hello');
};
const element2 = React.createElement<Props>(Hello, props, 'hello');

// 3.类组件的定义
class HelloText extends React.Component<Props, State> {
  state = { id: 'dt' };
  render() {
    return React.createElement('h1', { className: 'title' }, 'hello');
  }
}
const element3: ReactElement<Props> = React.createElement<Props>(
  HelloText,
  props
);

// 在特定的dom节点上，创建一个root对象
const root = createRoot(document.getElementById('root') as any);
// 使用 root 的render方法来渲染对应的组件或者卸载组件
root.render(<App />);
