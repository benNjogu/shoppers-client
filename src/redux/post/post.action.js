import * as api from "../../api";
import { postActionTypes } from "./post.actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: postActionTypes.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: postActionTypes.CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// export const updatePost = () => async (dispatch) => {
//   try {
//     const { data } = await api.createPost(post);

//     dispatch({ type: postActionTypes.CREATE, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };
