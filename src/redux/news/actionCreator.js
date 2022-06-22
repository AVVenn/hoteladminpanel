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

const changeFilterQuery = (text) => ({
  type: actionTypes.CHANGE_FILTER_QUERY_NEWS,
  payload: { filterQuery: text },
});

export default bindActionCreators(
  { getNews, changeFilterQuery },
  store.dispatch
);
