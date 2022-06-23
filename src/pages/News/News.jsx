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

import { useSnackbar } from "notistack";
import { format } from "date-fns";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import InputIcon from "@mui/icons-material/Input";

import actionCreators from "../../redux/news/actionCreator";
import NewsChangeModal from "../../components/common/modals/NewsChangeModal";

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

const News = ({ title, description, createdAt, id }) => {
  const [openModal, setOpenModal] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { deleteNews } = actionCreators;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { enqueueSnackbar } = useSnackbar();

  const showMessage = (message, status) => {
    enqueueSnackbar(message, { variant: status });
  };

  return (
    <>
      <NewsChangeModal
        setOpenModal={setOpenModal}
        open={openModal}
        title={title}
        description={description}
        createdAt={createdAt}
        id={id}
      />
      <Card>
        <CardHeader subheader={format(new Date(createdAt), "dd.MM.yyyy")} />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() => {
              deleteNews(id, showMessage);
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
            <Typography paragraph>{description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default News;
