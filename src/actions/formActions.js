export const createToDo = (task) => {
  return {
    type: "CREATE_TODO",
    payload: task,
  };
};

export const updateToDo = (newList) => {
  return {
    type: "UPDATE_TODO",
    payload: newList,
  };
};

export const changeEditing = (editData) => {
  return { type: "CHANGE_EDITING", payload: editData };
};
