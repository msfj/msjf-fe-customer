import React, { Component } from 'react';
import { Form, Input, Steps } from 'antd';
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

class changePhoneModal extends Component {
  state = {
    changeModal: false,
    step: 0
  }

  changeModal = (e) => {
    if (!e || e.currentTarget.className.indexOf("ant-btn-primary") < 0) {
      this.setState((previousState) => ({
        changeModal: !previousState.changeModal
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
    const { step, changeModal } = this.state;
    return (
      <CustomModal
        title="修改密码"
        visible={changeModal}
        onOk={this.changeModal}
        onCancel={this.changeModal}
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

export { ModifyModal, changePhoneModal };