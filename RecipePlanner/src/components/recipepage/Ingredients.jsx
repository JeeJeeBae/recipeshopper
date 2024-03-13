import React from "react";

const Ingredients = () => {
  return (
    <>
      <div className="ingredientContainer">
        <div className="ingredientCard">
          <img className="ingredientImage" src="example.jpg"></img>
          <div className="ingredientInfo">
            <div className="ingredientAmount">Ingredient amount</div>
            <div className="ingredientName">
              chili paste (such as sow ambal oelek)*
            </div>
            <div>
              <input className="checkbox" type="checkbox"></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ingredients;
