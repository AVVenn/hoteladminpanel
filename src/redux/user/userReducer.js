import { actionTypes } from "./actionType";

const initialState = {
  user: null,
  isLoadingUser: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING_USER:
      return {
        ...state,
        isLoadingUser: action.payload.isLoadingUser,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        error: null,
        isLoadingUser: false,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoadingUser: false,
      };
    case actionTypes.LOGIN_OUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
