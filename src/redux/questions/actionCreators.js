import { actionTypes } from "./actionTypes";
import { bindActionCreators } from "redux";
import { store } from "../index";

const getAllQuestions = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_QUESTIONS,
      payload: { isLoadingAllQuestions: true },
    });
    fetch("http://localhost:8800/api/questions")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: actionTypes.SET_QUESTIONS,
          payload: { allQuestions: data },
        })
      );
  };
};

export default bindActionCreators({ getAllQuestions }, store.dispatch);
