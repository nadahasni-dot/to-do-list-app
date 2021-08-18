import { combineReducers } from "redux";
import formEditorReducer from "./formEditor";
import toDoListReducer from "./toDoList";

const combinedReducer = combineReducers({
  toDoList: toDoListReducer,
  formEditor: formEditorReducer,
});

export default combinedReducer;
