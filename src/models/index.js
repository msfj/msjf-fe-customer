export default {
    namespace: 'index',
    state: {
        loginvs: false,
        loginType: 0,
        bsvisible: false,
        bsindex: 0,
        loginModel: 0
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
        }
    },
    effects: {
        *login(action, { call, put }) {
            yield put({
                type: 'signin',
            });
        },
        *throwError() {
            throw new Error('hi error');
        }
    },
}