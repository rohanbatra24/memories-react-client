import auth from "./auth";
import posts from "./posts";

const { combineReducers } = require("redux");

export default combineReducers({
  posts,
  auth,
});
