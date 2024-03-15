import React, { useState } from "react";
import Header from "../components/recipepage/Header";
import Prep from "../components/recipepage/Prep";
import Ingredients from "../components/recipepage/Ingredients";
import Servings from "../components/recipepage/Servings";
import Cost from "../components/recipepage/Cost";
import AddItems from "../components/recipepage/AddItems";
import Summary from "../components/recipepage/Summary";

const Recipe = () => {
  const [servingSize, setServingSize] = useState(0);

  const handleServingSizeChange = (newServingSize) => {
    setServingSize(newServingSize);
  };

  return (
    <div>
      <Header />
      <Prep />
      <Summary />
      <Ingredients servingSize={servingSize} /> {/* Correct prop name */}
      <div className="fixedContainer">
        <div className="rowC ">
          <Servings onServingSizeChange={handleServingSizeChange} />
          <Cost />
          <AddItems />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Recipe;
