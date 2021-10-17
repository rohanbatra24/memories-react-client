import {
  CREATE,
  DELETE,
  FETCH_ALL,
  LIKE,
  UPDATE,
} from "../constants/actionTypes";

const reducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      console.log(`action.payload`, action.payload);
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE: {
      return posts.map((post) => {
        return post._id === action.payload._id ? action.payload : post;
      });
    }
    case DELETE: {
      return posts.filter((post) => {
        return post._id !== action.payload;
      });
    }
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
};

export default reducer;
