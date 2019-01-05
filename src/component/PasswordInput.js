import React, { PureComponent } from 'react';
import { Input,Icon } from 'antd';

export default class PasswordInput extends PureComponent {
  state = {
    visible: false
  };
  clickIcon = this.clickIcon.bind(this);

  clickIcon() {
    this.setState(previousState => {
      return { visible: !previousState.visible };
    });
  }

  render() {
    const suffix = !this.state.visible ? <Icon type="eye" onClick={this.clickIcon} /> : <Icon type="eye-invisible" onClick={this.clickIcon} />;
    const type = !this.state.visible ? "password" : "text";
    return (
      <Input {...this.props} type={type} suffix={suffix} />
    );
  }
}