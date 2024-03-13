import React from "react";
import Servings from "./Calculator/Servings";
import Cost from "./Calculator/Cost";
import AddItems from "./Calculator/AddItems";

const Fixed = () => {
  return (
    <>
      <div className="fixedContainer">
        <div className="rowC ">
          <Servings className=""></Servings>
          <Cost className=""></Cost>
          <AddItems className=""></AddItems>
        </div>
      </div>
    </>
  );
};

export default Fixed;
