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
        signin(state) {
            return {
                ...state,
                login: true,
            };
        },
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