import* as types from './../Contants/ui';

const initialState = {
    showSidebar: true,
    showLoading:false
};

const reducer = (state=initialState,action) =>
{
    switch (action.type) {
        case types.SHOW_SIDEBAR: {
            return {
              ...state,
              showSidebar: true,
            };
          }
          case types.HIDE_SIDEBAR: {
            return {
              ...state,
              showSidebar: false,
            };
          }
          case types.SHOW_LOADING: {
            return {
              ...state,
              showLoading: true,
            };
          }
          case types.HIDE_LOADING: {
            return {
              ...state,
              showLoading: false,
            };
          }
        default:
            return state;
    }
};

export default reducer;