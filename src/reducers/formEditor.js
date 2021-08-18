const formEditorReducer = (
  state = { isEditing: false, type: "todo", data: {} },
  action
) => {
  switch (action.type) {
    case "CHANGE_EDITING":
      return action.payload;
    default:
      return state;
  }
};

export default formEditorReducer;
