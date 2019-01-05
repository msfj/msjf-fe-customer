import React from 'react';
import { Modal, Form, Input, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, } from 'antd';
import './login.scss';
import PasswordInput from './PasswordInput'

const { Group } = Input;
const { Option } = Select;
const { Item } = Form;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="loginForm" layout="vertical">
        <Item label="证件号">
          {getFieldDecorator('cardID', {
            rules: [{ required: true, message: '请输入身份证/港澳通行证/护照/台胞证号码' }],
          })(
            <Input placeholder="请输入身份证/港澳通行证/护照/台胞证号码" size="large" />
          )}
        </Item>
        <Item label="账号密码">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入账号密码' }],
          })(
            // <Input type="password" placeholder="请输入账号密码" />
            <PasswordInput placeholder="请输入账号密码" size="large" />
          )}
        </Item>
        <Item label="验证码">
          {getFieldDecorator('code', {
            rules: [{ required: true, message: '请输入图形验证码' }],
          })(
            <Input placeholder="请输入图形验证码" size="large" />
          )}
        </Item>
        <Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住账号</Checkbox>
          )}
          <a className="loginForgot" href="">忘记密码</a>
        </Item>
        <Button type="primary" htmlType="submit" className="loginBtn">登录</Button>
        <div className="loginInfo">
          还没有账号？ <a href="">立即注册</a>
        </div>
      </Form>
    );
  }
}

class MobileLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="loginForm" layout="vertical">
        <Item label="手机号">
          {getFieldDecorator('cardID', {
            rules: [{ required: true, message: '请输入手机号' }],
          })(
            <Group compact>
              <Select style={{ width: '28%' }} size="large" defaultValue="+86">
                <Option value="+86">+86</Option>
              </Select>
              <Input style={{ width: '72%' }} size="large" placeholder="请输入手机号码" />
            </Group>
          )}
        </Item>
        <Item label="验证码">
          {getFieldDecorator('code', {
            rules: [{ required: true, message: '请输入手机验证码' }],
          })(
            <Input placeholder="请输入手机验证码" size="large" />
          )}
        </Item>
        <Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住账号</Checkbox>
          )}
          <a className="loginForgot" href="">忘记密码</a>
        </Item>
        <Button type="primary" htmlType="submit" className="loginBtn">登录</Button>
        <div className="loginInfo">
          还没有账号？ <a href="">立即注册</a>
        </div>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
const WrappedMobileLoginForm = Form.create()(MobileLoginForm);

class Loginmd extends React.Component {
  state = {
    visible: this.props.visible,
    type: 0
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  changeType = () => {
    let type = this.state.type === 0 ? 1 : 0;
    this.setState({ type: type });
  };

  render() {
    const { visible, type } = this.state;
    const isAcc = type === 0;
    return (
      <div>
        <Modal
          visible={visible}
          className="loginmd"
          footer={null}
          width={570}
          onCancel={this.handleCancel}
        >
          <div className={isAcc ? "loginBar" : "loginBar loginBar1"} onClick={this.changeType}></div>
          <div className="loginBox">
            <h2 className="loginTitle"><strong>个人账户登录</strong><small>PERSONAL ACCOUNT</small></h2>
            {isAcc? <WrappedNormalLoginForm /> : <WrappedMobileLoginForm />}
          </div>
        </Modal>
      </div>
    );
  }
}

export default Loginmd;
