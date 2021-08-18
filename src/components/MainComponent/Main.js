import React from "react";
import Form from "../FormComponent/Form";
import List from "../ListComponent/List";

const Main = () => {
  return (
    <div className="container mt-5 mb-5" style={{ minHeight: "500px" }}>
      <Form />
      <List />
    </div>
  );
};

export default Main;
