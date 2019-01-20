import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Button, Steps, Input, Select, Checkbox, Form } from 'antd';

import PasswordInput from '../components/PasswordInput';
import SuccessBlock from '../components/SuccessBlock';

const { Step } = Steps;
const { Group } = Input;
const { Option } = Select;
const { Item } = Form;

const namespace = 'enterprisemd';

const mapStateToProps = (state) => {
  return state[namespace];
};

const mapDispatchToProps = (dispatch) => {
  return {
      emitStep(param) {
        dispatch({
            type: `${namespace}/emitStep`,
            payload: param
        });
      },

      stepBack() {
        dispatch({
          type: `${namespace}/setStep`,
          payload: { flag: -1 }
        });
      }
  };
};
class EnterpriseRegisterComponent extends Component {
  state = {
    // step: 0
    data: {}
  }
  preStep = this.preStep.bind(this);
  nextStep = this.nextStep.bind(this);

  preStep() {
    // this.setState({ step: this.state.step - 1 });
    this.props.stepBack();
  }

  nextStep() {
    // this.setState({ step: this.state.step + 1 });
    // const ts = {"registersource":"1","certificateno":"43048199105010038","membername":"宁波市瑞芯网络合伙企业","membertype":"1","msgcode":"123","step":"1"};
    
    // document.forms.stepone.submit();
    const { step, emitStep } = this.props;
    const fm = 'step' + (step + 1) + 'Form';
    
    this[fm].props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const stepstr = Number(step) + 1;
        let data = { ...this.state.data, ...values, step: '' + stepstr };
        if(stepstr === 1) {
          data.registersource = '1';
          data.membertype = '1';
        }
        data.bank = '银行名次';
        console.log(data);
        this.setState({
          data
        });
        emitStep(data);
      }
    });
  }

  render() {
    const { step } = this.props;
    const preButtonStyle = step > 0 ? { width: '184px', marginRight: '20px' } : { display: 'none' };
    const nextButtonStyle = step > 0 ? { width: '184px' } : {};
    const buttonDisplay = step === 3 ? { display: 'none' } : { display: 'block' };
    return (
      <div className={styles.registerEnterprise}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.title}>企业账号注册</div>
            <div className={styles.block}>
              {/* 步骤条 */}
              <div className={styles.stepBlock}>
                <Steps progressDot current={step}>
                  <Step title="第一步" description="手机验证" />
                  <Step title="第二步" description="实名认证" />
                  <Step title="第三步" description="密码设置" />
                  <Step title="第四步" description="注册完成" />
                </Steps>
              </div>
              <img src={require("../../../assets/register-separation.png")} alt="" />
              {/* 表单部分-step1 */}
              <StepOne visible={step === 0} wrappedComponentRef={(form) => this.step1Form = form} />
              {/* 表单部分-step2 */}
              <StepTwo visible={step === 1} wrappedComponentRef={(form) => this.step2Form = form} />
              {/* 表单部分-step3 */}
              <StepThree visible={step === 2} wrappedComponentRef={(form) => this.step3Form = form} />
              {/* 按钮及协议部分 */}
              <div className={styles.buttonBlock} style={buttonDisplay}>
                <Button style={preButtonStyle} className={styles.defaultButton} onClick={this.preStep}>上一步</Button>
                <Button style={nextButtonStyle} className={styles.button} onClick={this.nextStep} type="primary">下一步</Button>
                <div className={styles.checkbox}>
                  <Checkbox><span className={styles.checkboxTitle}>注册即同意企业相关的</span><a>《服务协议》</a></Checkbox>
                </div>
              </div>
              {/* 注册完成 */}
              <SuccessBlock visible={step === 3} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// step1
class StepOneForm extends Component {
  
  // const submit = (e) => {
  //   e.preventDefault();
  //   console.log(125455555)
  //   props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //       this.props.tologin(values);
  //       values = {...values, registersource: '1', membertype: '1', msgcode: '123', step: '1'}
  //       this.props.emitStepOne(values);
  //     }
  //   });
  // };
  render() {
    const { visible } = this.props;
    const { getFieldDecorator } = this.props.form;
    const style = visible ? { display: 'block' } : { display: 'none' };
    return (
      <Form className={styles.formBlock} style={style}>
        <Item
          label="企业名称"
          colon={false}
          className={styles.formExtend}
        >
          {getFieldDecorator('membername', {
            rules: [{ required: true, message: '请输入企业名称' }],
          })(
            <Input size="large" placeholder="请输入企业名称" />
          )}
        </Item>
        <Item
          label="企业营业执照号码"
          colon={false}
          className={styles.formExtend}
        >
          {getFieldDecorator('certificateno', {
            rules: [{ required: true, message: '请输入企业营业执照号码' }],
          })(
            <Input size="large" placeholder="请输入企业营业执照号码" />
          )}
        </Item>
      </Form>
    );
  }
}

const StepOne = Form.create()(StepOneForm);

// step2
class StepTwoForm extends Component {
  
  render() {
    const { visible } = this.props;
    const { getFieldDecorator } = this.props.form;
    const style = visible ? { display: 'block' } : { display: 'none' };

    return (
      <Form className={styles.formBlock} style={style}>
        <div style={{width:'796px',margin:"0 auto"}}>
          <Item
            label="企业法人姓名"
            colon={false}
            className={styles.formExtend}
            style={{ display: "inline-block",marginRight:'20px' }}
          >
            {getFieldDecorator('corname', {
              rules: [{ required: true, message: '请输入企业法人姓名' }],
            })(
              <Input size="large" placeholder="请输入企业法人姓名" />
            )}
          </Item>
          <Item
            label="证件类型"
            colon={false}
            className={styles.formExtend}
            style={{ display: "inline-block" }}
          >
            <Group compact>
              {getFieldDecorator('corcardtype', {
                  rules: [{ required: true, message: '请选择证件类型' }],
              })(
                <Select className={styles.select} style={{ width: '28%' }} size="large" initialValue="身份证">
                  <Option value="0">身份证</Option>
                </Select>
              )}
              {getFieldDecorator('corcardno', {
                rules: [{ required: true, message: '请输入身份证' }],
              })(
                <Input className={styles.noLeftBorder} style={{ width: '72%' }} size="large" placeholder="请输入身份证" />
              )}
            </Group>
          </Item>
        </div>
        <Item
          label="银行卡号"
          colon={false}
          className={styles.formExtend}
          style={{width:"796px"}}
        >
          {getFieldDecorator('cardno', {
            rules: [{ required: true, message: '请输入银行卡号' }],
          })(
            <Input size="large" placeholder="请输入银行卡号" suffix={<BankIcon />} />
          )}
        </Item>
        <div style={{width:'796px',margin:"0 auto"}}>
        <Item
          label="手机号"
          colon={false}
          className={styles.formExtend}
          style={{ display: "inline-block",marginRight:'20px' }}
        >
          <Group compact>
            <Select className={styles.select} style={{ width: '28%' }} size="large" defaultValue="+86">
              <Option value="+86">+86</Option>
            </Select>
            {getFieldDecorator('mobile', {
              rules: [{ required: true, message: '请输入手机号码' }],
            })(
              <Input className={styles.noLeftBorder} style={{ width: '72%' }} size="large" placeholder="请输入手机号码" />
            )}
          </Group>
        </Item>
        <Item
          label="验证码"
          colon={false}
          className={styles.formExtend}
          style={{ display: "inline-block"}}
        >
          {getFieldDecorator('msgcode', {
            rules: [{ required: true, message: '请输入短信验证码' }],
          })(
            <Input size="large" placeholder="请输入短信验证码" suffix={<MSGCode />} />
          )}
        </Item>
        </div>
      </Form>
    );
  }
}

const StepTwo = Form.create()(StepTwoForm);

class StepThreeForm extends Component {
  render() {
    const { visible } = this.props;
    const { getFieldDecorator } = this.props.form;
    const style = visible ? { display: 'block' } : { display: 'none' };
  
    return (
      <Form className={styles.formBlock} style={style}>
        <Item label="账号密码"
          colon={false}
          className={styles.formExtend}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入账号密码' }],
          })(
            <PasswordInput size="large" placeholder="请输入账号密码" />
          )}
        </Item>
        <Item label="确认密码"
          colon={false}
          className={styles.formExtend}>
          {getFieldDecorator('passwordcfm', {
            rules: [{ required: true, message: '请输入账号密码' }],
          })(
            <PasswordInput size="large" placeholder="请输入账号密码" />
          )}
        </Item>
      </Form>
    );
  }
}

const StepThree = Form.create()(StepThreeForm);

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


export default connect(mapStateToProps, mapDispatchToProps)(EnterpriseRegisterComponent);
