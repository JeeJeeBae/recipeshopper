import React, { useState, useEffect } from "react";
import Servings from "./Calculator/Servings";
import Cost from "./Calculator/Cost";
import AddItems from "./Calculator/AddItems";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch(
          "https://api.spoonacular.com/recipes/716429/information?apiKey=605e15e03efe45f6a04b91d3501a440b&includeNutrition=false"
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
              {ingredient.amount} {ingredient.unit}
            </div>
            <div className="ingredientName">{ingredient.originalName}</div>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </div>
        </div>
      ))}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Ingredients;
