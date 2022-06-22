import { actionTypes } from "./actionType";
import { bindActionCreators } from "redux";
import { store } from "../index";
import { basicLink } from "../../constants/basicLink";

const getUser = (values) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_USER,
      payload: { isLoadingUser: true },
    });
    fetch(basicLink + "auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status > 200 && data.status < 500) {
          dispatch({
            type: actionTypes.LOGIN_FAILURE,
            payload: { error: data.message },
          });
        } else {
          dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: { user: data },
          });
        }
      })
      .catch((err) => {
        "Шото пошло не так";
      });
  };
};

const logOut = () => ({
  type: actionTypes.LOGIN_OUT,
  payload: {},
});

const resetErrorFields = () => ({
  type: actionTypes.RESET_ERROR_FIELDS,
});

export default bindActionCreators(
  {
    logOut,
    getUser,
    resetErrorFields,
  },
  store.dispatch
);
