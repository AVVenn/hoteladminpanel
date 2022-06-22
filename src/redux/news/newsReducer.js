import { actionTypes } from "./actionType";
const initialState = {
  news: [],
  filterQuery: "",
  isLoadingNews: false,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NEWS:
      return {
        ...state,
        news: action.payload.news,
        isLoadingNews: false,
      };
    case actionTypes.SET_LOADING_NEWS:
      return {
        ...state,
        isLoadingNews: action.payload.isLoadingNews,
      };
    case actionTypes.CHANGE_FILTER_QUERY_NEWS:
      return {
        ...state,
        filterQuery: action.payload.text,
      };
    default:
      return state;
  }
};
