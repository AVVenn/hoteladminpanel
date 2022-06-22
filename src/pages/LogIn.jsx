import * as React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Textfield from "../components/common/Form UI/Textfield";
import ButtonWrapper from "../components/common/Form UI/Button";
import actionCreator from "../redux/user/actionCreator";
import { useSelector } from "react-redux";
import { selectError, selectisLoadingUser } from "../redux/user/userSelectors";
import { BoxCenter } from "../components/common/Boxes";

const INITIAL_FORM_STATE = {
  username: "",
  password: "",
};
const FORM_VALIDATION = yup.object().shape({
  username: yup.string().required("Обязательно"),
  password: yup.string().required("Обязательно"),
});

export default function LogIn() {
  const { getUser, resetErrorFields } = actionCreator;
  const isLoading = useSelector(selectisLoadingUser);
  const errorText = useSelector(selectError);
  const navigate = useNavigate();
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Войти в админ панель
          </Typography>
          <Formik
            sx={{ mt: 1 }}
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values, actions) => {
              actions.resetForm({
                values: {
                  username: "",
                  password: "",
                },
              });
              resetErrorFields();
              getUser(values);
              navigate("/");
            }}
          >
            <Form>
              <Textfield
                margin="normal"
                fullWidth
                label="Логин"
                name="username"
                autoFocus
                error={errorText ? true : false}
                helperText={errorText}
              />
              <Textfield
                margin="normal"
                fullWidth
                label="Пароль"
                type="password"
                name="password"
                error={errorText ? true : false}
                helperText={errorText}
              />
              {isLoading ? (
                <BoxCenter>
                  <CircularProgress />
                </BoxCenter>
              ) : (
                <ButtonWrapper>Войти</ButtonWrapper>
              )}
            </Form>
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
}
