/**
 * 目的
 * 1. 如何定义 样式对象
 * 2. 如何定义 函数组件
 */
import React, { CSSProperties, FC } from 'react';
import { Todo } from '../../model';
// 定义类型
interface Props {
  todo: Todo;
}
// 定义样式
const itemStyle: CSSProperties = {
  background: 'red',
  color: 'green',
};
const TodoItem: FC<Props> = (props) => {
  const { todo } = props;
  return <li style={itemStyle}>{todo.text}</li>;
};

// 组件默认属性
TodoItem.defaultProps = {};
export default TodoItem;

// 源码 FC 类型
// type FC<P = {}> = FunctionComponent<P>;
// interface FunctionComponent<P = {}> {
//     (props: P, context?: any): ReactElement<any, any> | null;
//     propTypes?: WeakValidationMap<P> | undefined;
//     contextTypes?: ValidationMap<any> | undefined;
//     defaultProps?: Partial<P> | undefined;
//     displayName?: string | undefined;
// }
