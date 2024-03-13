import React from "react";

const Cost = () => {
  return (
    <div className="costContainer">
      <div className="">Step 2: Choose your grocery:</div>
      <button className="groceryButton" type="submit">
        <img className="grocery" src="af.png"></img>
      </button>
      <button className="groceryButton" type="submit">
        <img className="grocery" src="red.png"></img>
      </button>
      <div className="cost">Estimated Cost: S$500</div>
    </div>
  );
};

export default Cost;
