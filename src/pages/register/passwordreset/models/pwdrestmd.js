import Service from '../../../../util/Service';
import C from '../../../../util/common';
import { message } from 'antd';
import { delay } from 'redux-saga';

const { changePwd, echoMobile } = Service;
const state = 'open';

export default {
    namespace: 'pwdrestmd',
    state: {
        step: 0,
        count: C.Constant.MSGTM,
        certificateno: '',
        mobile: ''
    },
    reducers: {
        setStep(state, { payload: res }) {    
            return {
                ...state,
                step: state.step + res.flag
            }
        },
        setVal(state, { payload: certificateno }) {
            return {
                ...state,
                certificateno
            }
        },
        setMsgCode(state, { payload: msgCode }) {
            return {
                ...state,
                ...msgCode
            };
        },
        setMbl(state, { payload: mobile }) {
            return {
                ...state,
                mobile
            }
        }
    },
    effects: {
        *emitStep({ payload: param }, { call, put }) {
            // const skey = param.step == '1' ? 'checkMsgCode' : 'changePwd';
            const res =  yield call(changePwd, { param, state });
            if(res && res.flag === C.Constant.SUCFLAG) {
                yield put({ type: 'setStep', payload: { flag: 1 } });
            } else {
                message.error(res.msg || C.Constant.DFTERMSG);
            }
            
        },
        *getMsg({ payload: param }, { call, put }) {
            const res =  yield call(echoMobile, { param, state });
            if(res && res.flag === C.Constant.SUCFLAG) {
                // yield put({ type: 'msgcode/setMsgCode', payload: { mobile: 1 } });
                yield put({ type: 'setMbl', payload: res.data.mobile });
                let count = C.Constant.MSGTM;
                while(count--) {
                    yield put({ type: 'setMsgCode', payload: { count } });
                    yield call(delay, 1000);
                }
            } else {
                message.error(res.msg || C.Constant.DFTERMSG);
            }
        }
    },
}