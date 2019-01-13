import React, { Component }  from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import { Modal, Form, Input, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete} from 'antd';
import './login.scss';
import PasswordInput from './PasswordInput'

const { Group } = Input;
const { Option } = Select;
const { Item } = Form;

class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.tologin(values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const opts = this.props.options;

    return (
      <Form onSubmit={this.handleSubmit} className="loginForm" layout="vertical">
        <Item label={opts.accLabel}>
          {getFieldDecorator('cardID', {
            rules: [{ required: true, message: opts.accMsg }],
          })(
            <Input placeholder={opts.accMsg} size="large" />
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
          <Link className="loginForgot" to="/register/passwordreset">忘记密码</Link>
        </Item>
        <Button type="primary" htmlType="submit" className="loginBtn">登录</Button>
        <div className="loginInfo">
          还没有账号？ <Link to={this.props.options.link}>立即注册</Link>
        </div>
      </Form>
    );
  }
}

class MobileLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    this.props.bschioce();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const opts = this.props.options;
    return (
      <Form onSubmit={this.handleSubmit} className="loginForm" layout="vertical">
        <Item label={opts.mbLabel}>
          {getFieldDecorator('mobile', {
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
          <Link className="loginForgot" to="/register/passwordreset">忘记密码</Link>
        </Item>
        <Button type="primary" htmlType="submit" className="loginBtn">登录</Button>
        <div className="loginInfo">
          还没有账号？ <Link to={this.props.options.link}>立即注册</Link>
        </div>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
const WrappedMobileLoginForm = Form.create()(MobileLoginForm);

const lgobj = {
    '0': {
        title: '个人账户登录',
        small: 'PERSONAL ACCOUNT',
        accLabel: '证件号',
        accMsg: '请输入身份证/港澳通行证/护照/台胞证号码',
        mbLabel: '手机号',
        link: '/register/person'
    },
    '1': {
        title: '企业账户登录',
        small: 'CORPORATE ACCOUNT',
        accLabel: '企业证件号',
        accMsg: '请输入企业统一信用代码',
        mbLabel: '企业法人手机号',
        link: '/register/enterprise'
    }
};

const namespace = 'index';

const mapStateToProps = (state) => {
    return state[namespace];
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeLogin() {
            dispatch({
                type: `${namespace}/closeLogin`
            });
        },
        changeLoginmd() {
            dispatch({
                type: `${namespace}/changeLoginmd`
            });
        },
        openBsmd() {
            dispatch({
                type: `${namespace}/openBsmd`
            });
        },
        bsSelect(i) {
            dispatch({
                type: `${namespace}/bsSelect`,
                payload: i
            });
        },
        closeBsmd() {
            dispatch({
                type: `${namespace}/closeBsmd`
            });
        },
        login(parma) {
            console.log(parma);
            dispatch({
                type: 'global/login',
                payload: parma
            });
        }
    };
};

class Loginmd extends Component {

  handleCancel = () => {
    this.props.closeLogin();
  }

  changeType = () => {
    this.props.changeLoginmd();
  };

  bschioceShow = () => {
    this.props.openBsmd();
  }

  bsSelect = (i) => {
    this.props.bsSelect(i);
  }

  render() {
    const { loginvs, loginModel, loginType=0, bsvisible, bsindex } = this.props;
    const isAcc = loginModel === 0;
    const opts = lgobj[loginType];

    return (
      <div>
        <Modal
          visible={loginvs}
          className="loginmd"
          footer={null}
          width={570}
          onCancel={this.handleCancel}
        >
          <div className={isAcc ? "loginBar" : "loginBar loginBar1"} onClick={this.changeType}></div>
          <div className="loginBox">
            <h2 className="loginTitle"><strong>{opts.title}</strong><small>{opts.small}</small></h2>
            {isAcc? <WrappedNormalLoginForm options={opts} tologin={(parma) => {this.props.login(parma)}} /> : <WrappedMobileLoginForm options={opts} bschioce={this.bschioceShow} />}
          </div>
        </Modal>

        <Modal
          visible={bsvisible}
          className="loginmd"
          footer={null}
          width={570}
          onCancel={()=>{this.props.closeBsmd()}}
        >
          <div className="loginBox">
            <h2 className="loginTitle"><strong>企业选择</strong><small>BUSINESS CHOICE</small></h2>
            <ul className="loginbs">
            { 
              (() => {
                // while (++i < 10) {
                let rows = [];
                for(let i = 0; i < 10; i++) {
                 rows.push(
                 <li className={i===bsindex?'loginbsLi loginbsSel':'loginbsLi'} key={i} onClick={()=>{this.bsSelect(i)}}>
                  <div className="loginbsTx">梅山（宁波）金服科技有限公司</div>
                  <div className="loginbsSm">123456789123456789</div>
                </li>
               )
                }
                return rows;
               })()
            }
            </ul>
            <Link to="/user/personInfo"><Button type="primary" className="loginBtn">确定</Button></Link>
          </div>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loginmd);;
