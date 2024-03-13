import React from "react";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="Recipe Header">
          <img className="recipeImage" src="example.jpg"></img>
          <div className="recipeTitle">
            <h2>Recipe Title</h2>
            <div>Total time: 1 hour</div>
            <br />
            <button>Start Cooking</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
