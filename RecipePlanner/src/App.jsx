import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
const RecipeOfTheDay = React.lazy(() => import("./Pages/Recipe"));
const SavedRecipes = React.lazy(() => import("./Pages/SavedRecipes"));
import SearchBar from "./components/SearchBar";
import SearchCards from "./components/SearchCards";
// const Members = React.lazy(() => import("./components/SearchCards"));
// import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="recipe" element={<RecipeOfTheDay />} />
        <Route path="saved" element={<SavedRecipes />} />
      </Routes>
      {/* <SearchBar />
      <SearchCards /> */}
      {/* <Recipe></Recipe> */}
    </>
  );
}

export default App;
