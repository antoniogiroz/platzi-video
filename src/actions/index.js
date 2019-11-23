export const ACTIONS = {
  ADD_FAVORITE: 'ADD_FAVORITE',
  DELETE_FAVORITE: 'DELETE_FAVORITE',
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
  SIGN_OUT: 'SIGN_OUT',
  GET_VIDEO_SOURCE: 'GET_VIDEO_SOURCE',
};

export const addFavorite = (payload) => {
  return {
    type: ACTIONS.ADD_FAVORITE,
    payload,
  };
};

export const deleteFavorite = (payload) => {
  return {
    type: ACTIONS.DELETE_FAVORITE,
    payload,
  };
};

export const signIn = (payload) => {
  return {
    type: ACTIONS.SIGN_IN,
    payload,
  };
};

export const signUp = (payload) => {
  return {
    type: ACTIONS.SIGN_UP,
    payload,
  };
};

export const signOut = () => {
  return {
    type: ACTIONS.SIGN_OUT,
  };
};

export const getVideoSource = (payload) => {
  return {
    type: ACTIONS.GET_VIDEO_SOURCE,
    payload,
  };
};
