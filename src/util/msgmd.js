import Service from '../util/Service';
import C from './common';
import { message } from 'antd';
import { delay } from 'redux-saga';

const state = 'open';

const msgmd = (options={}) => {
    const { namespace='msgcode' } = options;
    return {
        namespace,
        state: {
            isget: false,
            count: C.Constant.MSGTM,
            mobile: ''
        },
        reducers: {
            setMsgCode(state, { payload: msgCode }) {
                return {
                    ...state,
                    ...msgCode
                };
            }
        },
        effects: {
            *getMsgCode({ payload: param }, { call, put, select }) {
                param.templateId = '2031012026749';
                // verificateType

                const res = yield call(Service.getMsgCode, { param, state });
                if(res && res.flag === C.Constant.SUCFLAG ) {
                    // yield put({ type: 'setMsgCode', payload: { isget: true } });
                    let count = C.Constant.MSGTM;
                    while(count--) {
                        yield put({ type: 'setMsgCode', payload: { count } });
                        yield call(delay, 1000);
                    }
                } else {
                    message.error((res && res.msg) || C.Constant.DFTERMSG);
                }
            },
        },
    }
};

export default msgmd