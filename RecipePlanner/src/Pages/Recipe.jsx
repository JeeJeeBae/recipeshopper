import React from "react";
import Header from "../components/recipepage/Header";
import Prep from "../components/recipepage/Prep";
import Ingredients from "../components/recipepage/Ingredients";
import Servings from "../components/recipepage/Servings";
import Cost from "../components/recipepage/Cost";
import AddItems from "../components/recipepage/AddItems";
import Summary from "../components/recipepage/Summary";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Prep></Prep>
      <Summary></Summary>
      <Ingredients></Ingredients>
      <div className="fixedContainer">
        <div className="rowC ">
          <Servings className=""></Servings>
          <Cost className=""></Cost>
          <AddItems className=""></AddItems>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Main;
