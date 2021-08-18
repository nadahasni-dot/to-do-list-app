import React from "react";
import ListItem from "../ListItemComponent/ListItem";
import { useSelector } from "react-redux";
import EmptyList from "../EmptyList";

const OnProgressList = () => {
  const toDoList = useSelector((state) => state.toDoList);

  const getOnProgress = () => {
    return toDoList
      .filter((value) => value.status === 0)
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const displayOnProgress = () => {
    return getOnProgress().map((value) => {
      return <ListItem key={value.id} task={value} />;
    });
  };

  return (
    <div className="col-md-6 col-sm-12 mb-3">
      <h4>On Progress ({getOnProgress().length})</h4>
      <ul className="list-group">
        {displayOnProgress()}
        {getOnProgress().length === 0 ? <EmptyList /> : ""}
      </ul>
    </div>
  );
};

export default OnProgressList;
