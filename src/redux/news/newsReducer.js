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
        filterQuery: action.payload.filterQuery,
      };
    case actionTypes.DELETE_NEWS:
      return {
        ...state,
        news: state.news.filter(
          (newsItem) => newsItem._id !== action.payload.id
        ),
        isLoadingNews: false,
      };
    case actionTypes.CHANGE_NEWS:
      return {
        ...state,
        news: state.news.map((newsItem) =>
          newsItem._id === action.payload.id
            ? {
                ...newsItem,
                title: action.payload.title,
                description: action.payload.description,
              }
            : newsItem
        ),
        isLoadingNews: false,
      };
    case actionTypes.ADD_NEWS:
      return {
        ...state,
        news: [...state.news, action.payload.news],
        isLoadingNews: false,
      };
    default:
      return state;
  }
};
