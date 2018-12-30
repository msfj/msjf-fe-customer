export default {
  namespace: 'heigth',
  state: {
    height: window.innerHeight,
    width: window.innerWidth
  },
  reducers: {
    changeHeight(state, { payload: { height, width } }) {
      return { ...state, height, width }
    }
  },
  effects: {
    *resize({ payload: { height, width } }, { call, put}) {
      yield put({
        type: 'changeHeight',
        payload: { height, width }
      });
    }
  },
  subscriptions: {
    setup({ dispatch }) {
      return window.onresize = () => {
        dispatch({ type:'resize', payload: { height: window.innerHeight, width: window.innerWidth }})
      }
    }
  }


};
