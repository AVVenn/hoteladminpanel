import { actionTypes } from "./actionType";
import { bindActionCreators } from "redux";
import { store } from "../index";

const getRooms = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.SET_LOADING_ROOMS,
      payload: { isLoadingRooms: true },
    });
    fetch("http://localhost:8800/api/rooms")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: actionTypes.SET_ROOMS,
          payload: { rooms: data },
        })
      );
  };
};

export default bindActionCreators({ getRooms }, store.dispatch);
