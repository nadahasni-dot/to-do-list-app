import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeEditing, updateToDo } from "../../../actions/formActions";

const ListItem = ({ task }) => {
  const dispatch = useDispatch();
  const toDoList = useSelector((state) => state.toDoList);

  const handleDelete = () => {
    const newList = toDoList.filter((value) => value.id !== task.id);
    dispatch(updateToDo(newList));

    const formEdit = {
      isEditing: false,
      type: "todo",
      data: {},
    };
    dispatch(changeEditing(formEdit));
  };

  const handleEdit = () => {
    const formEdit = {
      isEditing: true,
      type: "todo",
      data: task,
    };

    dispatch(changeEditing(formEdit));
  };

  const handleDone = () => {
    const newList = toDoList.map((value) => {
      if (value.id === task.id) {
        return {
          ...value,
          status: 1,
        };
      } else {
        return value;
      }
    });
    dispatch(updateToDo(newList));
  };

  return (
    <li
      className={`list-group-item ${
        task.status === 1 ? "list-group-item-success" : ""
      } d-flex justify-content-between align-items-center`}
    >
      <div className="m-2">
        <div className="fw-bold">{task.detail}</div>
        {task.date}
      </div>
      <div>
        <button className="btn btn-primary btn-sm m-1" onClick={handleEdit}>
          Edit
        </button>
        {task.status === 0 ? (
          <>
            <button
              className="btn btn-danger btn-sm m-1"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button className="btn btn-success btn-sm m-1" onClick={handleDone}>
              Done
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </li>
  );
};

export default ListItem;
