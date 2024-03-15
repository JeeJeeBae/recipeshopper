import React, { useState, useEffect } from "react";

const Servings = ({ recipeId }) => {
  const [servingSize, setServingSize] = useState(0);

  useEffect(() => {
    const fetchServingSize = async () => {
      try {
        const response = await fetch(
          "https://api.spoonacular.com/recipes/638308/information?apiKey=605e15e03efe45f6a04b91d3501a440b&includeNutrition=false"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        setServingSize(data.servings);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchServingSize();
  }, [recipeId]);

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
