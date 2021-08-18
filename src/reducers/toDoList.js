const toDoListReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return [...state, action.payload];
    case "UPDATE_TODO":
      return [...action.payload];
    default:
      return state;
  }
};

export default toDoListReducer;
