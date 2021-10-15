import * as api from "../api/index";

// Action Creators

export const getPosts = () => async (dispatch) => {
  console.log(`iin getposts`);
  try {
    const { data } = await api.fetchPosts();

    console.log(`data`, data);

    dispatch({ type: "FETCH ALL", payload: data });
  } catch (error) {
    console.log(`error`, error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  console.log(`post`, post);
  try {
    const { data } = await api.createPost(post);

    console.log(`data`, data);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(`error`, error.message);
  }
};
