import { actionTypes } from "./actionTypes";
const initialState = {
  allQuestions: [],
  filterQuery: "",
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
    case actionTypes.DELETE_QUESTION:
      return {
        ...state,
        allQuestions: state.allQuestions.filter(
          (question) => question._id !== action.payload.id
        ),
        isLoadingAllQuestions: false,
      };
    case actionTypes.ANSWER_QUESTION:
      return {
        ...state,
        allQuestions: state.allQuestions.map((question) => {
          if (question._id === action.payload.id) {
            return {
              ...question,
              answer: action.payload.answer,
              question: action.payload.question,
            };
          } else {
            return question;
          }
        }),
        isLoadingAllQuestions: false,
      };
    case actionTypes.FILTER_BY_SEARCH:
      return {
        ...state,
        filterQuery: action.payload.filterQuery,
      };
    default:
      return state;
  }
};
