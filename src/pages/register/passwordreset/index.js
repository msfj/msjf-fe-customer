import React, { Component } from 'react';
import styles from './index.scss';
import { Button, Steps, Input, Select, Checkbox, Form } from 'antd';

import PasswordInput from '../components/PasswordInput';
import SuccessBlock from '../components/SuccessBlock';

const { Step } = Steps;
const { Group } = Input;
const { Option } = Select;
const { Item } = Form;

export default class PasswordResetComponent extends Component {
  state = {
    step: 0
  }
  preStep = this.preStep.bind(this);
  nextStep = this.nextStep.bind(this);

  preStep() {
    this.setState({ step: this.state.step - 1 });
  }

  nextStep() {
    this.setState({ step: this.state.step + 1 });
  }

  render() {
    const { step } = this.state;
    const preButtonStyle = step > 0 ? { width: '184px', marginRight: '20px' } : { display: 'none' };
    const nextButtonStyle = step > 0 ? { width: '184px' } : {};
    const buttonDisplay = step === 3 ? { display: 'none' } : { display: 'block' };
    return (
      <div className={styles.passwordReset}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>找回账号密码</div>
          <div className={styles.block}>
            {/* 步骤条 */}
            <div className={styles.stepBlock}>
              <Steps progressDot current={step}>
                <Step title="第一步" description="填写信息" />
                <Step title="第二步" description="身份验证" />
                <Step title="第三步" description="设置新密码" />
                <Step title="第四步" description="找回完成" />
              </Steps>
            </div>
            <img src={require("../../../assets/register-separation.png")} alt="" />
            {/* 表单部分-step1 */}
            <StepOne visible={step === 0} />
            {/* 表单部分-step2 */}
            <StepTwo visible={step === 1} />
            {/* 表单部分-step3 */}
            <StepThree visible={step === 2} />
            {/* 按钮及协议部分 */}
            <div className={styles.buttonBlock} style={buttonDisplay}>
              <Button style={preButtonStyle} className={styles.defaultButton} onClick={this.preStep}>上一步</Button>
              <Button style={nextButtonStyle} className={styles.button} onClick={this.nextStep} type="primary">下一步</Button>
              <div className={styles.checkbox}>
                <Checkbox><span className={styles.checkboxTitle}>注册即同意企业相关的</span><a>《服务协议》</a></Checkbox>
              </div>
            </div>
            {/* 注册完成 */}
            <SuccessBlock visible={step === 3}/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

// step1
function StepOne(props) {
  const { visible } = props;
  const style = visible ? { display: 'block' } : { display: 'none' };
  return (
    <Form className={styles.formBlock} style={style}>
      <Item
        label="证件号"
        colon={false}
        className={styles.formExtend}
      >
        <Input size="large" placeholder="请输入身份证/港澳通行证/护照/台胞证号码" />
      </Item>
      <Item
        label="验证码"
        colon={false}
        className={styles.formExtend}
      >
        <Input size="large" placeholder="请输入验证码" />
      </Item>
    </Form>
  );
}

// step2
function StepTwo(props) {
  const { visible } = props;
  const style = visible ? { display: 'block' } : { display: 'none' };
  return (
    <Form className={styles.formBlock} style={style}>
      <Item
        label="手机号"
        colon={false}
        className={styles.formExtend}
      >
        <Group compact>
          <Select className={styles.select} style={{ width: '28%' }} size="large" defaultValue="+86">
            <Option value="+86">+86</Option>
          </Select>
          <Input className={styles.noLeftBorder} style={{ width: '72%' }} size="large" placeholder="请输入手机号码" />
        </Group>
      </Item>
      <Item
        label="验证码"
        colon={false}
        className={styles.formExtend}
      >
        <Input size="large" placeholder="请输入短信验证码" suffix={<MSGCode />} />
      </Item>
    </Form>
  );
}

// step3
function StepThree(props) {
  const { visible } = props;
  const style = visible ? { display: 'block' } : { display: 'none' };
  return (
    <Form className={styles.formBlock} style={style}>
      <Item label="新账号密码"
        colon={false}
        className={styles.formExtend}>
        <PasswordInput size="large" placeholder="请输入账号密码" />
      </Item>
      <Item label="确认密码"
        colon={false}
        className={styles.formExtend}>
        <PasswordInput size="large" placeholder="请输入密码" />
      </Item>
    </Form>
  );
}



function MSGCode() {
  return (
    <p className={styles.msgCode}>获取验证码</p>
  );
}

function BankIcon() {
  return (
    <img alt=""></img>
  )
}



