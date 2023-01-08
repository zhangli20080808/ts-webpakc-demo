import React, { PropsWithChildren } from 'react';

// type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };
interface Props {
  number: number;
  // 在 React 18 的 FC 中，不存在 children 属性，需要手动申明
  children: PropsWithChildren;
}
export default class Counter extends React.Component<Props> {
  render() {
    const { number, children } = this.props;
    return (
      <div>
        <p>{number}</p>
      </div>
    );
  }
}

const MyButton: React.FC<PropsWithChildren<{ color: string }>> = ({
  children,
  color,
}) => {
  // 在 React 18 的 FC 中，不存在 children 属性，需要手动申明
  return <div>{children}</div>;
};
