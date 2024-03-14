import React, { useState, useEffect } from "react";

const Servings = ({ recipeId }) => {
  const [servingSize, setServingSize] = useState(0);

  // useEffect to fetch the default serving size when the component mounts
  useEffect(() => {
    const fetchServingSize = async () => {
      try {
        const response = await fetch(
          "https://api.spoonacular.com/recipes/716429/information?apiKey=605e15e03efe45f6a04b91d3501a440b&includeNutrition=false"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // Set the default serving size fetched from the API
        setServingSize(data.servings);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchServingSize();
  }, [recipeId]); // Fetch default serving size when recipeId changes

  // Event handler to handle changes to the serving size input
  const handleServingSizeChange = (event) => {
    setServingSize(event.target.value);
  };

  return (
    <div className="servingsContainer">
      <p>Step 1: Choose serving size:</p>

      <div className="rowb">
        <input
          className="servingsInput"
          type="number"
          value={servingSize}
          onChange={handleServingSizeChange}
        />
        <div className="servingsText">Servings</div>
      </div>
    </div>
  );
};

export default Servings;
