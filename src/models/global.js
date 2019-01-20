import Service from '../util/Service';
import C from '../util/common';
import { message } from 'antd';
import router from 'umi/router';

export default {
    namespace: 'global',
    state: {
        login: false,
        loginType: '0',
        imgCode: {},
    },
    reducers: {
        signin(state, { payload: res }) {
            const login = res.login;
            const { loginType='0' } = res.res.data;
            
            return {
                ...state,
                login,
                loginType
            };
        },
        setImgCode(state, { payload: imgCode }) {
            return {
                ...state,
                imgCode
            };
        }
    },
    effects: {
        *login({ payload: param }, { call, put }) {
            console.log(param);
            const req = param.secd ? 'corporationLogin' : 'memberLogin';
            const res = yield call(Service[req], { param });
            const login = res && res.flag === C.Constant.SUCFLAG;
            if(login) {
                // membertype
                const pt = res.data.membertype === '0' ? '/user/personInfo' : '/user/enterprisehome';
                router.push(pt);
                yield put({ type:'index/closeLogin' });
                yield put({ type: 'signin', payload: { res, login }});
            } else {
                message.error((res && res.msg) || C.Constant.DFTERMSG);
            }
            
            // yield put({ type: 'signin' });
        },
        *queryAcc({ payload: param }, { call, put }) {
            param.mobile = param.loginName;
            delete param.loginName;
            const lgk = yield call(Service.getCorporationLogin, { param });
            if(lgk && lgk.flag === C.Constant.SUCFLAG ) {
                // window.g_app._store.dispatch({ type:'index/closeLogin' });
                yield put({ type:'index/setBslist', payload: lgk.data || [] });
            } else {
                message.error((lgk && lgk.msg) || C.Constant.DFTERMSG);
            }
            // yield put({ type: 'signin', payload: lgk });
        },
        *throwError() {
            throw new Error('hi error');
        }
    },
}