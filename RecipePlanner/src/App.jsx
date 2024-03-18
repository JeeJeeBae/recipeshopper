import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Recipe from "./Pages/Recipe";
import SavedRecipes from "./SavedRecipes";

function App() {
  const [savedRecipe, setSavedRecipe] = useState(null);

  const handleSaveRecipe = (recipe) => {
    setSavedRecipe(recipe);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="saved"
          element={<SavedRecipes savedRecipe={savedRecipe} />}
        />
        <Route
          path="recipe"
          element={<Recipe onSaveRecipe={handleSaveRecipe} />}
        />
      </Routes>
    </>
  );
}

export default App;
