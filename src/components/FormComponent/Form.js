import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEditing,
  createToDo,
  updateToDo,
} from "../../actions/formActions";

const Form = () => {
  const dispatch = useDispatch();
  const toDoList = useSelector((state) => state.toDoList);
  const formEditor = useSelector((state) => state.formEditor);

  const [input, setInput] = useState({ detail: "", date: "" });

  useEffect(() => {
    if (formEditor.isEditing && formEditor.type === "todo") {
      const { detail, date } = formEditor.data;
      setInput({ detail, date });
    }
  }, [formEditor.data, formEditor.isEditing, formEditor.type]);

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { detail, date } = input;

    if (formEditor.isEditing && formEditor.type === "todo") {
      // SUBMIT EDIT
      const newList = toDoList.map((value) => {
        if (value.id === formEditor.data.id) {
          return {
            ...value,
            detail,
            date,
          };
        } else {
          return value;
        }
      });
      dispatch(updateToDo(newList));
    } else if (formEditor.isEditing && formEditor.type === "done") {
      
    } else {
      // SUBMIT CREATE
      let id = 1;

      if (toDoList.length > 0) {
        id = toDoList[toDoList.length - 1].id + 1;
      }

      dispatch(createToDo({ id: id, detail, date, status: 0 }));
    }

    clearInput();
  };

  const clearInput = () => {
    const formEdit = {
      isEditing: false,
      type: "todo",
      data: {},
    };

    dispatch(changeEditing(formEdit));
    setInput({ detail: "", date: "" });
  };

  return (
    <div className="row mb-4">
      <h2>Todo Form</h2>
      {formEditor.isEditing ? (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Edit mode is active
          <button
            onClick={clearInput}
            type="button"
            style={{ float: "right" }}
            className="btn btn-sm btn-secondary"
          >
            Cancel Edit
          </button>
        </div>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit}>
        <div className="row align-items-end">
          <div className="col-md-5 col-sm-12">
            <label htmlFor="detail" className="form-label">
              Task
            </label>
            <div className="input-group">
              <input
                type="text"
                id="detail"
                name="detail"
                className="form-control"
                required
                placeholder="Input your task here"
                value={input.detail}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-5 col-sm-12">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <div className="input-group">
              <input
                type="date"
                id="date"
                name="date"
                className="form-control"
                required
                placeholder="Input your date here"
                value={input.date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-2 col-sm-12">
            <button type="submit" className="btn btn-primary mt-3">
              {formEditor.isEditing ? "Update" : "Save"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
