import { actionTypes } from "./actionType";
import { bindActionCreators } from "redux";
import { store } from "../index";
import { basicLink } from "../../constants/basicLink";

const getNews = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.SET_LOADING_NEWS,
      payload: {
        isLoadingNews: true,
      },
    });
    try {
      fetch(basicLink + "news")
        .then((res) => res.json())
        .then((data) =>
          dispatch({
            type: actionTypes.SET_NEWS,
            payload: { news: data },
          })
        );
    } catch {
      console.log(`Что-то пошло не так`);
    }
  };
};

const deleteNews = (id, showMessage) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_NEWS,
      payload: { isLoadingNews: true },
    });
    try {
      fetch(basicLink + `news/${id}`, {
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
              type: actionTypes.DELETE_NEWS,
              payload: { id },
            });
          }
        });
    } catch {
      console.log(`Что-то пошло не так`);
    }
  };
};

const changeNews = (id, values, setOpenModal, showMessage) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_NEWS,
      payload: { isLoadingNews: true },
    });
    try {
      fetch(basicLink + `news/${id}`, {
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
            dispatch({
              type: actionTypes.CHANGE_NEWS,
              payload: {
                id: id,
                title: values.title,
                description: values.description,
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

const addNewNews = (values, setOpenModal, showMessage) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_NEWS,
      payload: { isLoadingNews: true },
    });
    try {
      fetch(basicLink + `news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        credentials: "include",
      })
        .then((req) => req.json())
        .then((data) => {
          if (data.status > 399 && data.status < 500) {
            showMessage(data.message, "error");
            setOpenModal(false);
          } else {
            dispatch({
              type: actionTypes.ADD_NEWS,
              payload: {
                news: data,
              },
            });
            setOpenModal(false);
            showMessage("Новость добавлена", "success");
          }
        });
    } catch {
      console.log(`Что-то пошло не так`);
    }
  };
};

const changeFilterQuery = (text) => ({
  type: actionTypes.CHANGE_FILTER_QUERY_NEWS,
  payload: { filterQuery: text },
});

export default bindActionCreators(
  { getNews, changeFilterQuery, deleteNews, changeNews, addNewNews },
  store.dispatch
);
