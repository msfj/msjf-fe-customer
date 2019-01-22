import Service from '../util/Service';
import C from '../util/common';
import { message } from 'antd';

export default {
    namespace: 'index',
    state: {
        loginvs: false,
        loginType: 0, // 登录类型：0个人、1企业
        bsvisible: false,
        bsindex: 0,
        bslist: [],
        loginModel: 0  // 登录模式：0账户密码、1手机验证码
    },
    reducers: {
        changeLoginmd(state) {
            let loginModel = state.loginModel === 0 ? 1 : 0;
            return {
                ...state,
                loginModel,
            };
        },
        openLogin(state, { payload: loginType }) {
            return {
                ...state,
                loginType,
                loginvs: true
            };
        },
        closeLogin(state) {
            return {
                ...state,
                loginvs: false
            };
        },
        openBsmd(state) {
            return {
                ...state,
                bsvisible: true,
                loginvs: false
            };
        },
        closeBsmd(state) {
            return {
                ...state,
                bsvisible: false
            };
        },
        bsSelect(state, { payload: index }) {
            return {
                ...state,
                bsindex: index
            };
        },
        setBslist(state, { payload: list }) {
            return {
                ...state,
                bslist: list,
                bsvisible: true,
                loginvs: false
            };
        }
    },
    effects: {
        *loginInit({ payload: loginType }, { call, put, select }) {
            const loginModel = yield select(state => {
                return state.index.loginModel;
            });
            if(loginModel == '0') {
                yield put({ type: 'getImg' });
            }
            yield put({ type:'openLogin', payload: loginType });
        },
        *getImg(_, { call, put }) {
            const lgk = yield call(Service.getImgCode, {});
            if(lgk && lgk.flag === C.Constant.SUCFLAG ) {
                yield put({ type: 'global/setImgCode', payload: lgk.data || {} });
            } else {
                message.error((lgk && lgk.msg) || C.Constant.DFTERMSG);
            }
        }
    },
}