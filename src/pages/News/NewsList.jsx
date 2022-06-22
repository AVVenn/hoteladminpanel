import React, { useEffect } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import News from "./News";
import actionCreator from "../../redux/news/actionCreator";
import { useSelector } from "react-redux";
import {
  selectNews,
  selectLoadingNews,
  selectFilterQuery,
} from "../../redux/news/newsSelectors";

const NewsList = () => {
  const { getNews, changeFilterQuery } = actionCreator;
  const news = useSelector(selectNews);
  const isLoading = useSelector(selectLoadingNews);
  const filterQuery = useSelector(selectFilterQuery);

  useEffect(() => {
    if (news.lenght === 0) {
      getNews();
    }
  }, []);

  return (
    <Grid container spacing={1.5}>
      <Grid item xs={12}>
        <Typography variant="h2" align="center">
          Все новости
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              label="Найти новость"
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
              onClick={() => getNews()}
            >
              Обновить
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {isLoading ? (
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
      ) : news.length === 0 ? (
        <Grid item xs={12}>
          <Typography align="center" variant="h6">
            Не найдено
          </Typography>
        </Grid>
      ) : (
        news.map((newsItem) => (
          <Grid item xs={12} sm={4} key={news._id}>
            <News
              createdAt={news.createdAt}
              news={news.question}
              id={news._id}
            />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default NewsList;
