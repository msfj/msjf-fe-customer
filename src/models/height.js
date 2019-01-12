export default {
  namespace: 'index',
  state: {
    headerStyle: false,
  },
  reducers: {
    setHeaderStyle(state, { payload: { headerStyle } }) {
      return { ...state, headerStyle }
    }
  },
  effects: {
    *resize({ payload: { headerStyle } }, { call, put }) {
      yield put({
        type: 'setHeaderStyle',
        payload: { headerStyle }
      });
    }
  },
  subscriptions: {
    // setup({ dispatch,history }) {
    //   window.onscroll = () => {
    //     if(!document.querySelectorAll(".bannerContainer h2")[0]) return false;
    //     if(document.querySelectorAll(".bannerContainer h2")[0].offsetTop < document.documentElement.scrollTop + 60){
    //       dispatch({ type: 'resize', payload: { headerStyle : true } })
    //     }else{
    //       dispatch({ type: 'resize', payload: { headerStyle : false } })
    //     }
    //   }
    // },

  }


};
