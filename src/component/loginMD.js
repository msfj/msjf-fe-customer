import React from 'react';
import { Modal, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, } from 'antd';
import './login.scss';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

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
        <Form.Item label="证件号">
          {getFieldDecorator('cardID', {
            rules: [{ required: true, message: '请输入身份证/港澳通行证/护照/台胞证号码' }],
          })(
            <Input placeholder="请输入身份证/港澳通行证/护照/台胞证号码" className="loginInput" />
          )}
        </Form.Item>
        <Form.Item label="账号密码">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入账号密码' }],
          })(
            <Input type="password" placeholder="请输入账号密码" />
          )}
        </Form.Item>
        <Form.Item label="验证码">
          {getFieldDecorator('code', {
            rules: [{ required: true, message: '请输入图形验证码' }],
          })(
            <Input placeholder="请输入图形验证码" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住账号</Checkbox>
          )}
          <a className="loginForgot" href="">忘记密码</a>
        </Form.Item>
        <Button type="primary" htmlType="submit" className="loginBtn">登录</Button>
        <div className="loginInfo">
          还没有账号？ <a href="">立即注册</a>
        </div>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);


class Loginmd extends React.Component {
  state = {
    ModalText: 'Content of the modal',
    visible: this.props.visible,
    confirmLoading: false,
  }

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible, confirmLoading, ModalText } = this.state;

    return (
      <div>
        <Modal
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          className="loginmd"
          footer={null}
          width={570}
        >
          <div className="loginBar"></div>
          <div className="loginBox">
            <h2 className="loginTitle"><strong>个人账户登录</strong><small>PERSONAL ACCOUNT</small></h2>
            <WrappedNormalLoginForm />
          </div>
        </Modal>
      </div>
    );
  }
}

export default Loginmd;
