import React, { Component } from 'react';
import { message } from 'antd';
import { connect } from 'dva';
import C from '../util/common';
import msgmd from '../util/msgmd';

const msgmap = msgmd();

window.g_app.model(msgmap);

class Msgcode extends Component {

  getCode = () => {
    const { mobile, getCode, msgName='msgcode', msgType='4' } = this.props;
    if(!mobile) {
      message.error('请先输入手机号码');
      return;
    }
    const param = {
      mobile,
      verificateType: msgType
    };
    getCode(param, msgName);
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

const mapStateToProps = (state) => {
  return state.msgcode;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCode(param, msgName) {
      dispatch({
          type: `${msgName}/getMsgCode`,
          payload: param
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Msgcode)