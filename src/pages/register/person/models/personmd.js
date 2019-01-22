import Service from '../../../../util/Service';
import C from '../../../../util/common';
import { message } from 'antd';

const { inserRegister } = Service;
const state = 'open';

export default {
    namespace: 'personmd',
    state: {
        login: false,
        step: 0
    },
    reducers: {
        setStep(state, { payload: res}) {    
            return {
                ...state,
                step: state.step + res.flag
            }
        },
        
    },
    effects: {
        *emitStep({ payload: param }, { call, put }) {
            const res =  yield call(inserRegister, { param, state });
            if(res && res.flag === C.Constant.SUCFLAG) {
                yield put({ type: 'setStep', payload: { flag: 1 } });
            } else {
                message.error(res.msg || C.Constant.DFTERMSG);
            }
            
        },
    },
}