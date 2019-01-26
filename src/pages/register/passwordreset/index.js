import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Button, Steps, Input, Select, Checkbox, Form, message } from 'antd';
import C from '../../../util/common';

import PasswordInput from '../components/PasswordInput';
import SuccessBlock from '../components/SuccessBlock';
// import Msgcode from '../../../component/Msgcode';

const { Step } = Steps;
const { Group } = Input;
const { Option } = Select;
const { Item } = Form;

const namespace = 'pwdrestmd';

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
      },

      setVal(certificateno) {
        dispatch({
            type: `${namespace}/setVal`,
            payload: certificateno
        });
      },

      getMsg(param) {
        dispatch({
            type: `${namespace}/getMsg`,
            payload: param
        });
      }

  };
};

class Msgcode extends Component {

  getCode = () => {
    const { certificateno, getMsg, msgName='pwdrestmd', msgType='2' } = this.props;
    if(!certificateno) {
      message.error('请先输入证件号码');
      return;
    }
    const param = {
      certificateno,
      verificateType: msgType
    };
    getMsg(param, msgName);
  };

  render() {
    const { count } = this.props;
    const isget = count == C.Constant.MSGTM || count == 0;
    return (
      <span>
        { isget ? <a onClick={this.getCode}>获取验证码</a> : <span className="fc-gray">{count}s</span> }
      </span>
    );
  }
}
class PasswordResetComponent extends Component {
  state = {
    // step: 0
    data: {}
  }

  preStep = () => {
    this.props.stepBack();
  }

  nextStep = () => {
    const { step, emitStep } = this.props;
    const fm = 'step' + (step + 1) + 'Form';
    
    this[fm].props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const stepstr = Number(step) + 1;
        let data = { ...this.state.data, ...values, step: '' + stepstr };
        
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
    const buttonDisplay = step === 2 ? { display: 'none' } : { display: 'block' };
    return (
      <div className={styles.passwordReset}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>找回账号密码</div>
          <div className={styles.block}>
            {/* 步骤条 */}
            <div className={styles.stepBlock}>
              <Steps progressDot current={step}>
                <Step title="第一步" description="账号验证" />
                <Step title="第二步" description="设置新密码" />
                <Step title="第三步" description="设置完成" />
              </Steps>
            </div>
            <img src={require("../../../assets/register-separation.png")} alt="" />
            {/* 表单部分-step1 */}
            <StepOne visible={step === 0} wrappedComponentRef={(form) => this.step1Form = form} 
              setVal={(no) => {this.props.setVal(no)}} 
              msgcount={this.props.count} 
              certificateno={this.props.certificateno}
              mobile={this.props.mobile}
              getMsg={(param) => {this.props.getMsg(param)}}
            />
            {/* 表单部分-step2 */}
            <StepTwo visible={step === 1} wrappedComponentRef={(form) => this.step2Form = form} />
            {/* 表单部分-step3 */}
            {/* <StepThree visible={step === 2} /> */}
            {/* 按钮及协议部分 */}
            <div className={styles.buttonBlock} style={buttonDisplay}>
              <Button style={preButtonStyle} className={styles.defaultButton} onClick={this.preStep}>上一步</Button>
              <Button style={nextButtonStyle} className={styles.button} onClick={this.nextStep} type="primary">下一步</Button>
              <div className={styles.checkbox}>
                <Checkbox><span className={styles.checkboxTitle}>注册即同意企业相关的</span><a>《服务协议》</a></Checkbox>
              </div>
            </div>
            {/* 注册完成 */}
            <SuccessBlock visible={step === 2} msg="密码重置成功！"/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

// step1
class StepOneForm extends Component {
  setVal = (e) => {
    this.props.setVal(e.target.value);
  }
  render() {
    const { visible, msgcount, getMsg, certificateno, mobile } = this.props;
    const style = visible ? { display: 'block' } : { display: 'none' };
    const { getFieldDecorator } = this.props.form;
    const tips = (mobile != '' && msgcount > 0 && msgcount < C.Constant.MSGTM) ? `短信验证码已发送至${mobile}` : '';
    return (
      <Form className={styles.formBlock} style={style}>
        <Item
          label="证件号"
          colon={false}
          className={styles.formExtend}
        >
        {getFieldDecorator('certificateno', {
          rules: [{ required: true, message: '请输入身份证' }, { pattern: C.Regep.cardID, message: '身份证格式不正确' }],
        })(
          <Input size="large" placeholder="请输入身份证/港澳通行证/护照/台胞证号码" onBlur={this.setVal} />
        )}
        </Item>
        <Item
          label="验证码"
          colon={false}
          className={styles.formExtend}
          
        >
          {getFieldDecorator('msgCode', {
            rules: [{ required: true, message: '请输入短信验证码' }],
          })(
            <Input size="large" placeholder="请输入短信验证码" maxLength={4} suffix={<Msgcode count={msgcount} getMsg={getMsg} certificateno={certificateno}  />} />
          )}
          <span>{tips}</span>
        </Item>
      </Form>
    );
  }
}

const StepOne = Form.create()(StepOneForm);

// step2
// class StepTwoForm extends Component {
//   render() {
//     const { visible } = this.props;
//     const style = visible ? { display: 'block' } : { display: 'none' };
//     const { getFieldDecorator } = this.props.form;

//     return (
//       <Form className={styles.formBlock} style={style}>
//         <Item
//           label="手机号"
//           colon={false}
//           className={styles.formExtend}
//         >
//           <Group compact>
//             <Select className={styles.select} style={{ width: '28%' }} size="large" defaultValue="+86">
//               <Option value="+86">+86</Option>
//             </Select>
//             <Input className={styles.noLeftBorder} style={{ width: '72%' }} size="large" placeholder="请输入手机号码" />
//           </Group>
//         </Item>
//         <Item
//           label="验证码"
//           colon={false}
//           className={styles.formExtend}
//         >
//           <Input size="large" placeholder="请输入短信验证码" suffix={<MSGCode />} />
//         </Item>
//       </Form>
//     );
//   }
// }

// step3
class StepTwoForm extends Component {
  render() {
    const { visible } = this.props;
    const style = visible ? { display: 'block' } : { display: 'none' };
    const { getFieldDecorator } = this.props.form;

    return (
      <Form className={styles.formBlock} style={style}>
        <Item label="新账号密码"
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

const StepTwo = Form.create()(StepTwoForm);


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

export default connect(mapStateToProps, mapDispatchToProps)(PasswordResetComponent);

