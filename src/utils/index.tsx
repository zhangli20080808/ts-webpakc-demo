/**
目标 - 给组件增加额外的属性
*/

import React from 'react';
// https://github.com/easyui/blog/blob/master/ReactNative/2017-11-03-React-Native-%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.md
// 提升react非静态方法 - 将非React特定的静态信息从子组件复制到父组件
import hoistNonReactStatics from 'hoist-non-react-statics';

const defaultProps = {
  settings: {
    maxLength: 6,
    placeholder: '请输入',
  },
};
export type DefaultProps = Partial<typeof defaultProps>;
export const withDefaultProps = <P extends DefaultProps>(
  OldComponent: React.ComponentType<P>
) => {
  type OwnProps = Omit<P, keyof DefaultProps>;
  class NewComponent extends React.Component<OwnProps> {
    render() {
      const props = { ...defaultProps, ...this.props } as P;
      return <OldComponent {...props} />;
    }
  }
  hoistNonReactStatics(NewComponent, OldComponent);
  return NewComponent;
};

// type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;
