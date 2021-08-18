import React from "react";
import { useSelector } from "react-redux";
import EmptyList from "../EmptyList";
import ListItem from "../ListItemComponent/ListItem";

const DoneList = () => {
  const toDoList = useSelector((state) => state.toDoList);

  const getDone = () => {
    return toDoList.filter((value) => value.status === 1)
    .sort((a, b) => new Date(b.date) - new Date(a.date));;
  };

  const displayDone = () => {
    return getDone().map((value) => {
      return <ListItem key={value.id} task={value} />;
    });
  };

  return (
    <div className="col-md-6 col-sm-12 mb-3">
      <h4>Done ({getDone().length})</h4>
      <ul className="list-group">
        {displayDone()}
        {getDone().length === 0 ? <EmptyList /> : ""}
      </ul>
    </div>
  );
};

export default DoneList;
