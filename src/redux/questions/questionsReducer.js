import { actionTypes } from "./actionTypes";
const initialState = {
  allQuestions: [],
  isLoadingAllQuestions: false,
};

export const allQuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_QUESTIONS:
      return {
        ...state,
        allQuestions: action.payload.allQuestions,
        isLoadingAllQuestions: false,
      };
    case actionTypes.SET_LOADING_QUESTIONS:
      return {
        ...state,
        isLoadingAllQuestions: action.payload.isLoadingAllQuestions,
      };
    default:
      return state;
  }
};
