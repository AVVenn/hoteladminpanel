import { actionTypes } from "./actionType";

const initialState = {
  rooms: [],
  filterText: "",
  isLoadingRooms: false,
};

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING_ROOMS:
      return {
        ...state,
        isLoadingRooms: action.payload.isLoadingRooms,
      };
    case actionTypes.SET_ROOMS:
      return {
        ...state,
        rooms: action.payload.rooms,
        isLoadingRooms: false,
      };
    default:
      return state;
  }
};
