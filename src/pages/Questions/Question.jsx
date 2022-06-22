import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Collapse,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import InputIcon from "@mui/icons-material/Input";

import actionCreators from "../../redux/questions/actionCreators";
import { useSnackbar } from "notistack";
import { format } from "date-fns";
import AnswerQuestion from "../../components/common/modals/AnswerQuestion";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Question = ({ question, answer, createdAt, id }) => {
  const [openModal, setOpenModal] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { deleteQuestion } = actionCreators;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { enqueueSnackbar } = useSnackbar();

  const showMessage = (message, status) => {
    enqueueSnackbar(message, { variant: status });
  };

  return (
    <>
      <AnswerQuestion
        setOpenModal={setOpenModal}
        open={openModal}
        question={question}
        answer={answer}
        createdAt={createdAt}
        id={id}
      />
      <Card>
        <CardHeader subheader={format(new Date(createdAt), "dd.MM.yyyy")} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {question}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() => {
              deleteQuestion(id, showMessage);
            }}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <InputIcon />
          </IconButton>
          <ExpandMore expand={expanded} onClick={handleExpandClick}>
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{answer || "Не отвечен"}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default Question;
