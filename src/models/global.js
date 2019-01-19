import Service from '../util/Service';

export default {
    namespace: 'global',
    state: {
        text: 'hello umi+dva',
        login: false,
    },
    reducers: {
        setText(state) {
            return {
                ...state,
                text: 'setted dva',
            };
        },
        signin(state, { payload: lgk }) {
            console.log(lgk)
            return {
                ...state,
                login: true,
            };
        },
    },
    effects: {
        *login({payload: param}, { call, put }) {
            console.log(param);
            const lgk = yield call(Service.userLoginByMbl, {param});
            yield put({ type: 'signin', payload: lgk });
            // yield put({ type: 'signin' });
        },
        *throwError() {
            throw new Error('hi error');
        }
    },
}