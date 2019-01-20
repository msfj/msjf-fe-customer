import Service from '../../../../util/Service';
import C from '../../../../util/common';
import { message } from 'antd';

const { inserRegister } = Service;
const state = 'open';

export default {
    namespace: 'enterprisemd',
    state: {
        text: 'hello umi+dva',
        login: false,
        step: 0
    },
    reducers: {
        setStep(state, { payload: res}) {    
            if((res.flag === -1) || (res.res && res.res.flag === C.Constant.SUCFLAG)) {
                return {
                    ...state,
                    step: state.step + res.flag
                }
            } else {
                message.error(res.msg);
                return {
                    step: state.step
                };
            }
        },
        
    },
    effects: {
        *emitStep({ payload: param }, { call, put }) {
            const res =  yield call(inserRegister, { param, state });
            yield put({ type: 'setStep', payload: { res, flag: 1 } });
        },
    },
}