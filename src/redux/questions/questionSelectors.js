import { createSelector } from "reselect";

export const selectAllQuestions = ({ questions }) => questions.allQuestions;
export const selectIsLoadingAllQuestions = ({ questions }) =>
  questions.isLoadingAllQuestions;
export const selectFilterQuery = ({ questions }) => questions.filterQuery;

export const getFilteredQuestionsWithAnswer = createSelector(
  selectAllQuestions,
  selectFilterQuery,
  (questions, filterQuery) =>
    questions.filter(
      (question) =>
        question.question.toLowerCase().includes(filterQuery.toLowerCase()) &&
        "answer" in question
    )
);

export const getFilteredQuestionsWithoutAnswer = createSelector(
  selectAllQuestions,
  selectFilterQuery,
  (questions, filterQuery) =>
    questions.filter(
      (question) =>
        question.question.toLowerCase().includes(filterQuery.toLowerCase()) &&
        !question.answer
    )
);

// export const selectAnsweredQuestions = ({ questions }) =>
//   questions.allQuestions.filter((question) => "answer" in question);

// export const selectUnAnsweredQuestions = ({ questions }) =>
//   questions.allQuestions.filter((question) => !question.answer);
