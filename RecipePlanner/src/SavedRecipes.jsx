import React from "react";
import { saveRecipeToAirtable } from "./Airtable";
import FetchAirtable from "./FetchAirtable";

const SavedRecipes = ({ savedRecipe }) => {
  const saveToAirtable = async () => {
    try {
      await saveRecipeToAirtable(savedRecipe); // Call the function to save recipe
      alert("Recipe saved successfully!");
    } catch (error) {
      console.error("Error saving:", error);
      alert("An error occurred while saving the recipe.");
    }
  };

  return (
    <div className="savedTitle">
      <div className="container">
        {savedRecipe && (
          <div>
            <h3>{savedRecipe.title}</h3>
            <img src={savedRecipe.image} alt={savedRecipe.title} />
            <p>Ready in {savedRecipe.time} minutes.</p>
            <button onClick={saveToAirtable}>Save recipe?</button>
          </div>
        )}
      </div>
      <FetchAirtable></FetchAirtable>
    </div>
  );
};

export default SavedRecipes;
