import { postActionTypes } from "./post.actionTypes";

const INITIAL_STATE = {
  posts: [],
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postActionTypes.FETCH_ALL:
      return action.payload;
    case postActionTypes.CREATE:
      return [...INITIAL_STATE.posts, action.payload];
    default:
      return state;
  }
};

export default postReducer;
