import React, { useState, useEffect } from "react";

const Prep = () => {
  const [recipePrep, setRecipePrep] = useState("");

  useEffect(() => {
    const fetchRecipePrep = async () => {
      try {
        const res = await fetch(
          "https://api.spoonacular.com/recipes/716429/information?apiKey=605e15e03efe45f6a04b91d3501a440b&includeNutrition=false"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();

        setRecipePrep(data.summary);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRecipePrep();
  }, []);

  return (
    <>
      <div className="container">
        <div className="prep">
          <h5>Preparation:</h5>

          {recipePrep}
        </div>
      </div>
    </>
  );
};

export default Prep;
