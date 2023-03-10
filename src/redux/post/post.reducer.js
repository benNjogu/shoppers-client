import { postActionTypes } from "./post.actionTypes";

const INITIAL_STATE = {
  posts: [],
};

const postReducer = (state = [], action) => {
  switch (action.type) {
    case postActionTypes.FETCH_ALL:
      return action.payload;
    case postActionTypes.CREATE:
      return [...state, action.payload];
    case postActionTypes.UPDATE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case postActionTypes.DELETE:
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};

export default postReducer;
