/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { CSSProperties, FC } from 'react';
import { Todo } from '../../model';
import { Button, Input } from 'antd';
import { withDefaultProps, DefaultProps } from '../../utils';
// 默认属性
// const defaultProps = {
//   settings: {
//     maxLength: 6,
//     placeholder: '请输入',
//   },
// };
// type DefaultProps = Partial<typeof defaultProps>;
interface OwnProps {
  addTodo: (data: Todo) => void;
}

type Props = OwnProps & DefaultProps;

interface State {
  text: string;
}
let id = 0;

class TodoInput extends React.Component<Props, State> {
  // static defaultProps: DefaultProps = defaultProps;
  constructor(props: Props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  // 1. ChangeEvent - react 类型  2.  HTMLInputElement - dom类型
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: event.target.value,
    });
  };
  handleSubmit = () => {
    const text = this.state.text.trim();
    if (!text) return;
    this.props.addTodo({ id: id++, text });
    this.setState({ text: '' });
  };
  // handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const text = this.state.text.trim();
  //   if (!text) return;
  //   this.props.addTodo({ id: id++, text });
  //   this.setState({ text: '' });
  // };

  render(): React.ReactNode {
    const { text } = this.state;
    const { settings } = this.props;
    return (
      <div>
        <Input value={text} onChange={this.handleChange} {...settings} />
        <Button onClick={this.handleSubmit}>添加</Button>
        {/* <form onSubmit={this.handleSubmit}>
          <input
            type='text' 
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type='submit' value='添加' />
        </form> */}
      </div>
    );
  }
}

export default withDefaultProps(TodoInput);
