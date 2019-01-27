import React, { Component, Fragment } from 'react';
import { Form, Input, Steps, Spin } from 'antd';
import CustomModal from 'component/CustomModal/index';
import PasswordInput from 'component/PasswordInput';

const { Step } = Steps;
const { Item } = Form;

class ModifyModal extends Component {
  state = {
    modifyModal: false,
    step: 0
  }

  modifyModal = (e) => {
    if (!e || e.currentTarget.className.indexOf("ant-btn-primary") < 0) {
      this.setState((previousState) => ({
        modifyModal: !previousState.modifyModal
      }));
      return true;
    }
    if (e.currentTarget.className.indexOf("ant-btn-primary") > -1) {
      if (this.state.step === 0) {
        this.setState((previousState) => ({
          step: previousState.step + 1
        }));
      }
      return true;
    }
  }

  render() {
    const { step, modifyModal } = this.state;
    return (
      <CustomModal
        title="修改密码"
        visible={modifyModal}
        onOk={this.modifyModal}
        onCancel={this.modifyModal}
        okText={step === 0 ? "下一步" : "确定"}
        cancelText={"取消"}
      >
        <div className='modalContent modal-column'>
          <div style={{ marginBottom: '30px', width: '483px' }}>
            <Steps progressDot current={step}>
              <Step title="第一步" description="账号验证" />
              <Step title="第二步" description="设置新密码" />
            </Steps>
          </div>
          {
            step === 0 ? (<Form className='formExtend' >
              <Item
                label="登录账号"
                colon={false}
                className='formExtend'
              >
                <Input size="large" placeholder="请输入登录账号" />
              </Item>
              <Item
                label="登录密码"
                colon={false}
                className='formExtend'
              >
                <PasswordInput size="large" placeholder="请输入登录密码" />
              </Item>
            </Form>)
              : (<Form className='formExtend' >
                <Item
                  label="设置新密码"
                  colon={false}
                  className='formExtend'
                >
                  <PasswordInput size="large" placeholder="请输入新密码" />
                </Item>
                <Item
                  label="再次确认密码"
                  colon={false}
                  className='formExtend'
                >
                  <PasswordInput size="large" placeholder="请再次输入密码" />
                </Item>
              </Form>)
          }
        </div>
      </CustomModal>
    );
  }
}

class ChangePhoneModal extends Component {
  state = {
    changeModal: false, //modal的visible
    step: 0, //步骤
    loading: false, //确定按钮loading状态
    cancelButtNone: false, //是否显示cancel butt
    successBack: false, // 更改成功
    errorBack: false, // 更改失败
    okText: "下一步",
    cancelText: "取消"
  }

  displayModal = () => {
    this.setState((previousState) => ({
      changeModal: !previousState.changeModal
    }));
  }

  nextStep = () => {
    this.setState((previousState) => ({
      okText: "换绑验证",
      cancelText: "上一步",
      step: previousState.step + 1
    }));
  }

  submit = () => {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.result();
    }, 1000)
  }

  result = () => {
    Math.random() > 0.5 ?
      this.setState({
        loading: false,
        cancelButtNone: true,
        successBack: true,
        errorBack: false,
        okText: "确定",
      }) : this.setState({
        loading: false,
        cancelButtNone: false,
        successBack: false,
        errorBack: true,
        okText: "重新验证",
        cancelText: "取消"
      })
  }


  render() {
    const { step, changeModal, loading, cancelButtNone, successBack, errorBack, okText, cancelText } = this.state;
    return (
      <CustomModal
        title="修改密码"
        visible={changeModal}
        onOk={step === 0 ? this.nextStep : this.submit}
        onCancel={this.displayModal}
        cancelButtonProps={{ style: cancelButtNone ? { display: 'none' } : { display: 'inline-block' } }}
        confirmLoading={loading}
        okText={okText}
        cancelText={cancelText}
      >
        <div className='modalContent modal-column'>
          {
            successBack && <div style={{ display: 'flex', alignItems: 'center' }}><i className='check' />已换绑新手机号：<span style={{ paddingBottom: '2px' }} className='fc-primary'>188 8888 8888</span></div>
          }
          {
            errorBack && <div style={{ display: 'flex', alignItems: 'center' }}><i className='warn-red' />手机号和身份证信息不符合，请输入手机号对应的身份证信息！</div>
          }
          {(!successBack && !errorBack) &&
            <Fragment>
              <div style={{ marginBottom: '30px', width: '483px' }}>
                <Steps progressDot current={step}>
                  <Step title="第一步" description="新手机号验证" />
                  <Step title="第二步" description="身份验证" />
                </Steps>
              </div>
              {
                step === 0 ? (<Form className='formExtend' >
                  <Item
                    label="手机号"
                    colon={false}
                    className='formExtend'
                  >
                    <Input size="large" placeholder="请输入换绑手机号" />
                  </Item>
                  <Item
                    label="验证码"
                    colon={false}
                    className='formExtend'
                  >
                    <Input size="large" placeholder="请输入验证码" suffix={<MSGCode />} />
                  </Item>
                </Form>)
                  : (<Fragment>
                    <Form className='formExtend' >
                      <Item
                        label="身份证"
                        colon={false}
                        className='formExtend'
                      >
                        <PasswordInput size="large" placeholder="请输入身份证号" />
                      </Item>
                    </Form>
                  </Fragment>
                  )
              }
            </Fragment>
          }
        </div>
      </CustomModal>
    );
  }
}

function MSGCode() {
  return (
    <p style={{
      fontSize: '14px',
      color: '#0072D2',
      textDecoration: 'underline',
      cursor: 'pointer'
    }}>获取验证码</p>
  );
}

export { ModifyModal, ChangePhoneModal };