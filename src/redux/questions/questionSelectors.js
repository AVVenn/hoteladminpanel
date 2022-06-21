export const selectAllQuestions = ({ questions }) => questions.allQuestions;
export const selectIsLoadingAllQuestions = ({ questions }) =>
  questions.isLoadingAllQuestions;

export const selectAnsweredQuestions = ({ questions }) =>
  questions.allQuestions.filter((question) => "answer" in question);
