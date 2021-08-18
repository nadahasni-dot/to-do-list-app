import React from "react";
import DoneList from "./DoneComponent/DoneList";
import OnProgressList from "./OnProgressComponent/OnProgressList";

const List = () => {
  return (
    <div className="row">
      <OnProgressList />
      <DoneList />
    </div>
  );
};

export default List;
