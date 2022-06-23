import React from "react";
import { Dialog, DialogTitle, DialogContent, Grid } from "@mui/material";

import ButtonWrapper from "../Form UI/Button";
import Textfield from "../Form UI/Textfield";
import { Formik, Form } from "formik";
import * as yup from "yup";

import { useSnackbar } from "notistack";
import actionCreator from "../../../redux/news/actionCreator";

const FORM_VALIDATION = yup.object().shape({
  title: yup.string().required("Обязательно"),
  description: yup.string().required("Обязательно"),
});

const NewsChange = ({ setOpenModal, open, title, description, id }) => {
  const { changeNews } = actionCreator;
  console.log(id);
  const INITIAL_FORM_STATE = {
    title: title,
    description: description,
  };
  const { enqueueSnackbar } = useSnackbar();

  const showMesssage = (message, status) => {
    enqueueSnackbar(message, { variant: status });
  };

  return (
    <Dialog onClose={() => setOpenModal(false)} open={open}>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values, { resetForm }) => {
          changeNews(id, values, setOpenModal, showMesssage);
          resetForm({
            values: { ...INITIAL_FORM_STATE },
          });
        }}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DialogTitle variant="h3">Изменить новость</DialogTitle>
            </Grid>
            <Grid item xs={12}>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Textfield
                      name="title"
                      label="Заголовок"
                      type="text"
                      multiline
                      rows={3}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="description"
                      label="Новость"
                      type="text"
                      multiline
                      rows={6}
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <Grid item xs={12}>
                <ButtonWrapper>Изменить</ButtonWrapper>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Dialog>
  );
};

export default React.memo(NewsChange);
