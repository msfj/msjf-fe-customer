import Service from '../util/Service';
import C from '../util/common';
import { message } from 'antd';
import router from 'umi/router';

const state = 'open';

const num = (n, fn) => {
    let tm = setInterval(() => {
        if(n<=0){
            clearInterval(tm);
        }
        fn(n--);
    }, 1000);
}

export default {
    namespace: 'global',
    state: {
        login: false,
        loginType: '0',
        imgCode: {},
        msgCode: {
            isget: false,
            count: 60,
            mobile: ''
        },
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
        },
        setMsgCode(state, { payload: msgCode }) {
            console.log(msgCode)
            const msg = { ...state.msgCode, ...msgCode };
            console.log(msg)
            return {
                ...state,
                msgCode: msg
            };
        }
    },
    effects: {
        *login({ payload: param }, { call, put, select }) {
            console.log(param);
            const req = param.secd ? 'corporationLogin' : 'memberLogin';
            if(!param.secd) {
                param.uniqueID = yield select(state => {
                    return state.global.imgCode.uniqueID;
                });
            }
            const res = yield call(Service[req], { param, state });
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
            const lgk = yield call(Service.getCorporationLogin, { param, state });
            if(lgk && lgk.flag === C.Constant.SUCFLAG ) {
                // window.g_app._store.dispatch({ type:'index/closeLogin' });
                yield put({ type:'index/setBslist', payload: lgk.data || [] });
            } else {
                message.error((lgk && lgk.msg) || C.Constant.DFTERMSG);
            }
            // yield put({ type: 'signin', payload: lgk });
        },
        *getMsgCode({ payload: param }, { call, put, select }) {
            param.templateId = '2031012026749';
            // verificateType

            const res = yield call(Service.getMsgCode, { param, state });
            if(res && res.flag === C.Constant.SUCFLAG ) {
                // yield put({ type: 'setMsgCode', payload: { isget: true } });
                num(60, (count)=>{
                    const isget = count > 1;
                    put({ type: 'setMsgCode', payload: { count, isget } });
                });
            } else {
                message.error((res && res.msg) || C.Constant.DFTERMSG);
            }
        },
    },
}