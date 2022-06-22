import React, { useEffect } from "react";
import {
  selectAllQuestions,
  getFilteredQuestionsWithAnswer,
  getFilteredQuestionsWithoutAnswer,
  selectIsLoadingAllQuestions,
  selectFilterQuery,
} from "../../redux/questions/questionSelectors";
import actionCreators from "../../redux/questions/actionCreators";
import { useSelector } from "react-redux";
import {
  Grid,
  CircularProgress,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Question from "./Question";

const QuestionsList = () => {
  const { getAllQuestions, changeFilterQuery } = actionCreators;
  const allQuestions = useSelector(selectAllQuestions);
  useEffect(() => {
    if (allQuestions.length === 0) {
      getAllQuestions();
    }
  }, []);

  const answered = useSelector(getFilteredQuestionsWithAnswer);
  const unAnswered = useSelector(getFilteredQuestionsWithoutAnswer);
  const filterQuery = useSelector(selectFilterQuery);
  const isLoadingQuestions = useSelector(selectIsLoadingAllQuestions);

  return (
    <Grid container spacing={1.5}>
      <Grid item xs={12}>
        <Typography variant="h2" align="center">
          Все вопросы
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              label="Найти вопрос"
              fullWidth
              value={filterQuery}
              onChange={({ target: { value } }) => changeFilterQuery(value)}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              fullWidth
              sx={{ py: 2 }}
              onClick={() => getAllQuestions()}
            >
              Обновить
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Typography variant="h4" align="center">
          Неотвеченные вопросы
        </Typography>
      </Grid>
      {isLoadingQuestions ? (
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Grid>
      ) : unAnswered.length === 0 ? (
        <Grid item xs={12}>
          <Typography align="center" variant="h6">
            Не найдено
          </Typography>
        </Grid>
      ) : (
        unAnswered.map((question) => (
          <Grid item xs={12} sm={4} key={question._id}>
            <Question
              createdAt={question.createdAt}
              question={question.question}
              id={question._id}
            />
          </Grid>
        ))
      )}
      <Grid item sx={{ mt: 4 }} xs={12}>
        <Typography variant="h4" align="center">
          Отвеченные
        </Typography>
      </Grid>
      {isLoadingQuestions ? (
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Grid>
      ) : answered.length === 0 ? (
        <Grid item xs={12} sx={{ mt: 4 }}>
          <Typography align="center" variant="h6">
            Не найдено
          </Typography>
        </Grid>
      ) : (
        answered.map((question) => (
          <Grid item xs={12} sm={4} key={question._id}>
            <Question
              createdAt={question.createdAt}
              question={question.question}
              answer={question?.answer}
              id={question._id}
            />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default QuestionsList;
