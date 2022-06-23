import React, { useEffect, useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import AddNewNews from "../../components/common/modals/AddNewNews";
import News from "./News";
import actionCreator from "../../redux/news/actionCreator";
import { useSelector } from "react-redux";
import {
  selectNews,
  selectLoadingNews,
  selectFilterQuery,
  selectFilteredNews,
} from "../../redux/news/newsSelectors";

const NewsList = () => {
  const [openModal, setOpenModal] = useState(false);
  const { getNews, changeFilterQuery } = actionCreator;
  const news = useSelector(selectNews);
  const isLoading = useSelector(selectLoadingNews);
  const filterQuery = useSelector(selectFilterQuery);
  const filteredNews = useSelector(selectFilteredNews);

  useEffect(() => {
    if (news.length === 0) {
      getNews();
    }
  }, []);

  return (
    <>
      <AddNewNews setOpenModal={setOpenModal} open={openModal} />
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
          <Grid item xs={12} sx={{ my: 4 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{ py: 2 }}
              onClick={() => {
                setOpenModal(true);
              }}
              endIcon={<AddCircleOutlineIcon />}
            >
              Создать новость
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isLoading ? (
            <CircularProgress />
          ) : filteredNews.length === 0 ? (
            <Typography align="center" variant="h6">
              Не найдено
            </Typography>
          ) : (
            <Grid container spacing={2}>
              {filteredNews.map((newsItm) => (
                <Grid item xs={12} sm={4}>
                  <News
                    title={newsItm.title}
                    description={newsItm.description}
                    createdAt={newsItm.createdAt}
                    id={newsItm._id}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default NewsList;
