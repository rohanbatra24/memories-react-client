const reducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    case "UPDATE": {
      console.log(`1`, 1);
      return posts.map((post) => {
        console.log(post._id === action.payload._id);
        return post._id === action.payload._id ? action.payload : post;
      });
    }
    default:
      return posts;
  }
};

export default reducer;
