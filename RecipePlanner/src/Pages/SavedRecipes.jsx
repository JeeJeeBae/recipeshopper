import React from "react";

const SavedRecipes = ({ savedRecipe }) => {
  return (
    <>
      <div className="savedTitle">Your saved recipes:</div>
      <div className="SavedCardContainer">
        <div className="">
          <div className="savedCard">
            {savedRecipe && (
              <div className="savedCardContent">
                <div className="savedCardImageContainer">
                  <img
                    className="savedCardImage"
                    src={savedRecipe.image}
                    alt={savedRecipe.title}
                  />
                </div>
                <div className="savedCardTitle">
                  <h2>{savedRecipe.title}</h2>
                  <p>Ready in {savedRecipe.time} minutes.</p>
                </div>

                <button className="deleteButton">delete</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedRecipes;
