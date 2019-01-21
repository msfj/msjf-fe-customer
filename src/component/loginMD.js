import React, { Component }  from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import { Modal, Form, Input, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete} from 'antd';
import './login.scss';
import PasswordInput from './PasswordInput';
import Msgcode from './Msgcode';

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
    const imgcode = this.props.imgcode;

    return (
      <Form onSubmit={this.handleSubmit} className="loginForm" layout="vertical">
        <Item label={opts.accLabel}>
          {getFieldDecorator('loginName', {
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
          {getFieldDecorator('inputValidecode', {
            rules: [{ required: true, message: '请输入图形验证码' }],
          })(
            <Input placeholder="请输入图形验证码" size="large" suffix={imgcode} maxLength={4} />
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
        values.password = 'q111111';
        this.props.tologin(values);
      }
    });
    // this.props.bschioce();
  }

  getMbl = (e) => {
    this.props.setMbl(e.target.value);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const opts = this.props.options;
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: '28%' }} size="large">
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );
    return (
      <Form onSubmit={this.handleSubmit} className="loginForm" layout="vertical">
        <Item label={opts.mbLabel}>
            <Group compact>
              <Select style={{ width: '28%' }} size="large" defaultValue="86">
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
              </Select>
              {getFieldDecorator('loginName', {
                rules: [{ required: true, message: '请输入手机号' }],
              })(
                <Input style={{ width: '72%' }} size="large" placeholder="请输入手机号码" onBlur={this.getMbl} />
              )}
            </Group>       
        </Item>
        <Item label="验证码">
          {getFieldDecorator('msgCode', {
            rules: [{ required: true, message: '请输入手机验证码' }],
          })(
            <Input placeholder="请输入手机验证码" size="large" suffix={<Msgcode/>} />
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
    const { imgCode } = state.global;
    return { ...state[namespace], imgCode };
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
        bsSelect(i, n) {
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
        login(param) {
            console.log(param);
            dispatch({
                type: 'global/login',
                payload: param
            });
        },
        queryAcc(param) {
          console.log(param);
          dispatch({
              type: 'global/queryAcc',
              payload: param
          });
        },
        setMbl(val) {
          dispatch({
            type: 'global/setMsgCode',
            payload: { mobile: val }
        });
        }
    };
};

class Loginmd extends Component {
  state = {
    data: {}
  };

  componentWillUnmount = () => {
    this.setState = (state, callback)=>{
      return;
    };
  }

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

  toLogin = (param={}) => {
    const { loginType='0', loginModel, login, queryAcc, bslist, bsindex } = this.props;
    let data = { ...this.state.data, ...param, loginsource: '0' };
    if(param.secd) {
      data.loginName = bslist[bsindex].loginName;
    }
    this.setState({
      data
    });
    if(param.secd != 'true' && loginType == '1' && loginModel == '1') {
      queryAcc(data);
    } else {
      login(data);
    }
  }

  imgcode = ()=>{
    const { uniqueID, validcode } = this.props.imgCode;
    return (
      <span>
        <input type="hidden" value={uniqueID} name="uniqueID" id="uniqueID"/>
        <img src={validcode} alt="" className="imgCode" />
      </span>
    );
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
            {isAcc? 
            <WrappedNormalLoginForm options={opts} tologin={(param) => {this.toLogin(param)}} imgcode={this.imgcode()} /> : 
            <WrappedMobileLoginForm options={opts} bschioce={this.bschioceShow} tologin={(parma) => {this.toLogin(parma)}}
            setMbl={(parma) => {this.props.setMbl(parma)}} />}
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
                this.props.bslist.forEach((el, i) => {
                  rows.push(
                    <li className={i===bsindex?'loginbsLi loginbsSel':'loginbsLi'} key={i} onClick={()=>{this.bsSelect(i, el.loginName)}}>
                      <div className="loginbsTx">{el.membername}</div>
                      <div className="loginbsSm">{el.loginName}</div>
                    </li>
                  )
                });
                return rows;
               })()
            }
            </ul>
            <Button type="primary" className="loginBtn" onClick={()=>{this.toLogin({secd: 'true'})}}>确定</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loginmd);
