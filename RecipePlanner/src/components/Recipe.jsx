import React from "react";
import Header from "./recipepage/Header";
import Prep from "./recipepage/Prep";
import Ingredients from "./recipepage/Ingredients";
import Fixed from "./recipepage/Fixed";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Prep></Prep>
      <Ingredients></Ingredients>
      <Fixed></Fixed>
    </div>
  );
};

export default Main;
