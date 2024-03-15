import React from "react";
import NavBar from "./components/NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
const RecipeOfTheDay = React.lazy(() => import("./Pages/Recipe"));
const SavedRecipes = React.lazy(() => import("./Pages/SavedRecipes"));

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="saved" element={<SavedRecipes />} />
        <Route path="recipe" element={<RecipeOfTheDay />} />
      </Routes>
    </>
  );
}

export default App;
