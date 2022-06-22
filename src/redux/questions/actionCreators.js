import { actionTypes } from "./actionTypes";
import { bindActionCreators } from "redux";
import { store } from "../index";
import { basicLink } from "../../constants/basicLink";

const getAllQuestions = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_QUESTIONS,
      payload: { isLoadingAllQuestions: true },
    });
    fetch(basicLink + "questions")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: actionTypes.SET_QUESTIONS,
          payload: { allQuestions: data },
        })
      );
  };
};

const deleteQuestion = (id, showMessage) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_QUESTIONS,
      payload: { isLoadingAllQuestions: true },
    });
    try {
      fetch(basicLink + `questions/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
        .then((req) => req.json())
        .then((data) => {
          if (data.status > 399) {
            showMessage(data.message, "error");
          } else {
            showMessage(data, "success");
            dispatch({
              type: actionTypes.DELETE_QUESTION,
              payload: { id },
            });
          }
        });
    } catch {
      console.log(`Что-то пошло не так`);
    }
  };
};

const answerQuestion = (id, values, setOpenModal, showMessage) => {
  return (dispatch) => {
    console.log(id);
    dispatch({
      type: actionTypes.SET_LOADING_QUESTIONS,
      payload: { isLoadingAllQuestions: true },
    });
    try {
      fetch(basicLink + `questions/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        credentials: "include",
      })
        .then((req) => req.json())
        .then((data) => {
          if (data.status > 399) {
            showMessage(data.message, "error");
            setOpenModal(false);
          } else {
            console.log(data);
            dispatch({
              type: actionTypes.ANSWER_QUESTION,
              payload: {
                id: id,
                question: values.question,
                answer: values.answer,
              },
            });
            setOpenModal(false);
            showMessage(data, "success");
          }
        });
    } catch {
      console.log(`Что-то пошло не так`);
    }
  };
};

const changeFilterQuery = (text) => ({
  type: actionTypes.FILTER_BY_SEARCH,
  payload: { filterQuery: text },
});

export default bindActionCreators(
  { getAllQuestions, deleteQuestion, answerQuestion, changeFilterQuery },
  store.dispatch
);
