import React, { Component } from 'react';
import { message } from 'antd';
import { connect } from 'dva';

class Msgcode extends Component {
  state = {
    count: 60
  };

  getCode = () => {
    const { msgCode, getCode } = this.props;
    console.log(msgCode)
    if(!msgCode.mobile) {
      message.error('请先输入手机号码');
      return;
    }
    const param = {
      mobile: msgCode.mobile,
      verificateType: '4'
    };
    getCode(param);
  };

  render() {
    const { msgCode } = this.props;
    return (
      <span>
        { msgCode.isget ? <span className="fc-gray">{msgCode.count}s</span> : <a onClick={this.getCode}>获取验证码</a> }
      </span>
    );
  }
}

const mapStateToProps = (state) => {
  return state.global;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCode(param) {
      dispatch({
          type: 'global/getMsgCode',
          payload: param
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Msgcode)