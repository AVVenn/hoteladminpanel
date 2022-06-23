import React from "react";
import { Dialog, DialogTitle, DialogContent, Grid } from "@mui/material";

import ButtonWrapper from "../Form UI/Button";
import Textfield from "../Form UI/Textfield";
import { Formik, Form } from "formik";
import * as yup from "yup";

import { useSnackbar } from "notistack";
import actionCreator from "../../../redux/news/actionCreator";

const FORM_VALIDATION = yup.object().shape({
  name: yup.string().required("Обязательно"),
  photo0: yup.string(),
  photo1: yup.string(),
  photo2: yup.string(),
  photo3: yup.string(),
  photo4: yup.string(),
  photo5: yup.string(),
  description: yup.string().required("Обязательно"),
  facilities: yup.string().required("Обязательно"),
  price: yup.number().required("Обязательно"),
  nuberOfPlaces: yup.nuberofPlaces.required("Обязательно"),
});

const NewsChange = ({ open, setOpenModal }) => {
  const { addNewRoom } = actionCreator;
  const INITIAL_FORM_STATE = {
    name: "",
    photo0: "",
    photo1: "",
    photo2: "",
    photo3: "",
    photo4: "",
    photo5: "",
    description:
      "Общежитие расположено в самом центре Гомеля: 200 метров до Гомельского дворцово-паркового ансамбля, 50 метров до кинотеатра им.Калинина, 500 метров до цирка, 300 метров до центрального рынка. К услугам гостей бесплатный WiFi и фортепиано.",
    facilities: "",
    price: "",
    nuberOfPlaces: "",
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
          values = { ...values, rating: 5 };
          addNewRoom(values, setOpenModal, showMesssage);
          resetForm({
            values: { ...INITIAL_FORM_STATE },
          });
        }}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DialogTitle variant="h3">Создание новой комнаты</DialogTitle>
            </Grid>
            <Grid item xs={12}>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Textfield name="name" label="Название" type="text" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="description"
                      label="Описание"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="facilities"
                      label="Удобства (через ', ' )"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="price" label="Цена" type="text" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="numberOfPlaces"
                      label="Всего мест"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="photo0"
                      label="Ссылка на фото 1"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="photo1"
                      label="Ссылка на фото 2"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="photo2"
                      label="Ссылка на фото 3"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="photo3"
                      label="Ссылка на фото 4"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="photo4"
                      label="Ссылка на фото 5"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="photo5"
                      label="Ссылка на фото 6"
                      type="text"
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <Grid item xs={12}>
                <ButtonWrapper>Добавить</ButtonWrapper>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Dialog>
  );
};

export default React.memo(NewsChange);
