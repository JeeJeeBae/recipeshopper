import React, { useState, useEffect } from "react";

const Ingredients = ({ servingSize }) => {
  const [ingredients, setIngredients] = useState([]);
  const [adjustedAmounts, setAdjustedAmounts] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch(
          "https://api.spoonacular.com/recipes/644148/information?apiKey=605e15e03efe45f6a04b91d3501a440b&includeNutrition=false"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setIngredients(data.extendedIngredients);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchIngredients();
  }, []);

  useEffect(() => {
    // Update ingredient amounts when serving size changes
    if (servingSize > 0) {
      updateIngredientAmounts();
    }
  }, [servingSize]);

  const updateIngredientAmounts = () => {
    // Update ingredient amounts based on new serving size
    const updatedAdjustedAmounts = ingredients.map((ingredient) =>
      ((ingredient.amount / 4) * servingSize).toFixed(2)
    );
    setAdjustedAmounts(updatedAdjustedAmounts);
  };

  return (
    <div className="ingredientContainer">
      <div className="ingredientsTitle">Ingredients</div>
      {ingredients.map((ingredient, index) => (
        <div key={index} className="ingredientCard">
          <img
            className="ingredientImage"
            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
            alt={ingredient.name}
          />
          <div className="ingredientInfo">
            <div className="ingredientAmount">
              {adjustedAmounts.length > 0 &&
              adjustedAmounts[index] !== undefined
                ? adjustedAmounts[index]
                : ((ingredient.amount / 4) * servingSize).toFixed(2)}{" "}
              {ingredient.unit}
            </div>
            <div className="ingredientName">{ingredient.originalName}</div>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
