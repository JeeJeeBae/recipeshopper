import React, { useState, useEffect } from "react";

const Header = () => {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeImage, setRecipeImage] = useState("");
  const [recipeTime, setRecipeTime] = useState(0);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const res = await fetch(
          "https://api.spoonacular.com/recipes/716429/information?apiKey=605e15e03efe45f6a04b91d3501a440b&includeNutrition=false"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();

        setRecipeTitle(data.title);
        setRecipeImage(data.image);
        setRecipeTime(data.readyInMinutes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the function to fetch recipe data when the component mounts
    fetchRecipeData();
  }, []); // Empty dependency array to ensure this effect runs only once when the component mounts

  return (
    <>
      <div className="container">
        <div className="recipeHeader">
          <div className="row">
            <img className="recipeImage" src={recipeImage} alt="Recipe"></img>
            <div className="recipeTitle">
              {/* Display the dynamically fetched recipe title */}
              <h2>{recipeTitle}</h2>
              <div>Ready in {recipeTime} minutes.</div>
              <br />
              <button className="startButton">Start Cooking</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
