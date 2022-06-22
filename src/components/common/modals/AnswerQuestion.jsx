import React from "react";
import { Dialog, DialogTitle, DialogContent, Grid } from "@mui/material";

import ButtonWrapper from "../Form UI/Button";
import Textfield from "../Form UI/Textfield";
import { Formik, Form } from "formik";
import * as yup from "yup";

import { useSnackbar } from "notistack";
import actionCreator from "../../../redux/questions/actionCreators";

const FORM_VALIDATION = yup.object().shape({
  question: yup.string().required("Обязательно"),
  answer: yup.string().required("Обязательно"),
});

const AnswerQuestion = ({ setOpenModal, open, question, answer, id }) => {
  const { answerQuestion } = actionCreator;

  const INITIAL_FORM_STATE = {
    question: question,
    answer: answer || "",
  };
  const { enqueueSnackbar } = useSnackbar();

  const showMessage = (message, status) => {
    enqueueSnackbar(message, { variant: status });
  };

  return (
    <Dialog onClose={() => setOpenModal(false)} open={open}>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values, { resetForm }) => {
          answerQuestion(id, values, setOpenModal, showMessage);
          resetForm({
            values: { ...INITIAL_FORM_STATE },
          });
        }}
      >
        <Form>
          <Grid container spacing={2} sx={{ maxWidth: "450px" }}>
            <Grid item xs={12}>
              <DialogTitle variant="h3">Ответить на вопрос</DialogTitle>
            </Grid>
            <Grid item xs={12}>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Textfield
                      name="question"
                      label="Вопрос"
                      type="text"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="answer"
                      label="Ответ"
                      type="text"
                      multiline
                      rows={4}
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <Grid item xs={12}>
                <ButtonWrapper>Ответить</ButtonWrapper>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Dialog>
  );
};

export default React.memo(AnswerQuestion);
