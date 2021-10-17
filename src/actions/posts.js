import * as api from "../api/index";

// Action Creators

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH ALL", payload: data });
  } catch (error) {
    console.log(`error`, error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(`error`, error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(`error`, error.message);
  }
};
