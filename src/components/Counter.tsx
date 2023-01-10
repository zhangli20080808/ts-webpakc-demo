import React, { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { CombineState, CounterState } from '../store/reducers';
import * as actions from '../store/actions/counter';
// type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };
type Props = CounterState & typeof actions & { children?: PropsWithChildren };
class Counter extends React.Component<Props> {
  render() {
    const { count, add, minus, children } = this.props;
    return (
      <div>
        <Button onClick={add}>+</Button>
        <p>{count}</p>
        <Button onClick={minus}>-</Button>
      </div>
    );
  }
}
const mapStateToProps = (state: CombineState): CounterState => state.counter;
export default connect(mapStateToProps, actions)(Counter);

const MyButton: React.FC<PropsWithChildren<{ color: string }>> = ({
  children,
  color,
}) => {
  // 在 React 18 的 FC 中，不存在 children 属性，需要手动申明
  return <div>{children}</div>;
};
