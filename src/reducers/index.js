import { ACTIONS } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_FAVORITE:
      if (state.myList.find((item) => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case ACTIONS.DELETE_FAVORITE:
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload),
      };
    case ACTIONS.SIGN_IN:
      return {
        ...state,
        user: action.payload,
      };
    case ACTIONS.SIGN_UP:
      return {
        ...state,
        user: action.payload,
      };
    case ACTIONS.SIGN_OUT:
      return {
        ...state,
        user: null,
      };
    case ACTIONS.GET_VIDEO_SOURCE:
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === +action.payload) ||
          state.originals.find((item) => item.id === +action.payload) ||
          null,
      };
    default:
      return state;
  }
};

export default reducer;
