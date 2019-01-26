import Service from '../util/Service';
import C from '../util/common';
import { message } from 'antd';
import router from 'umi/router';

const status = 'open';

export default {
    namespace: 'global',
    state: {
        login: false,
        loginType: '0',
        imgCode: {},
        user: {}
    },
    reducers: {
        signin(state, { payload: res }) {
            const login = res.login;
            const { loginType='0' } = res.res.data;
            
            return {
                ...state,
                login,
                loginType,
                user: res.res.data
            };
        },
        setImgCode(state, { payload: imgCode }) {
            return {
                ...state,
                imgCode
            };
        },
        setLogout(state) {
            return {
                ...state,
                login: false,
                user: {}
            }
        }
    },
    effects: {
        *login({ payload: param }, { call, put, select }) {
            
            const req = param.secd ? 'corporationLogin' : 'memberLogin';
            if(!param.secd) {
                param.uniqueID = yield select(state => {
                    return state.global.imgCode.uniqueID;
                });
            }
            console.log(param);
            const res = yield call(Service[req], { param, status });
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
            const lgk = yield call(Service.getCorporationLogin, { param, status });
            if(lgk && lgk.flag === C.Constant.SUCFLAG ) {
                // window.g_app._store.dispatch({ type:'index/closeLogin' });
                yield put({ type:'index/setBslist', payload: lgk.data || [] });
            } else {
                message.error((lgk && lgk.msg) || C.Constant.DFTERMSG);
            }
            // yield put({ type: 'signin', payload: lgk });
        },
        *logout(_, { call, put }) {
            const lgk = yield call(Service.logout, { status });
            if(lgk && lgk.flag === C.Constant.SUCFLAG ) {
                // window.g_app._store.dispatch({ type:'index/closeLogin' });
                yield put({ type:'setLogout' });
                yield call(()=>{router.push('/');});
            } else {
                message.error((lgk && lgk.msg) || C.Constant.DFTERMSG);
            }
        }
    },
}