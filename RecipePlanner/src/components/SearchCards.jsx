import React, { useState, useEffect } from "react";

const SearchCards = () => {
  const [cardTitle, setCardTitle] = useState("The Recipe Title");
  const [cardImage, setCardImage] = useState("default.png");

  useEffect(() => {
    const fetchRecipeCardData = async () => {
      try {
        const res = await fetch(
          "https://api.spoonacular.com/recipes/findByIngredients?apiKey=605e15e03efe45f6a04b91d3501a440b&ingredients=Chicken&number=10&limitLicense=true&ranking=1&ignorePantry=false"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();

        setCardTitle(data.title);
        setCardImage(data.image);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the function to fetch recipe data when the component mounts
    fetchRecipeCardData();
  }, []); // Empty dependency array to ensure this effect runs only once when the component mounts

  return (
    <>
      <div className="container">
        <div className="cardHeader">
          <div className="row">
            <img className="cardImage" src={cardImage} alt="Recipe"></img>
            <div className="cardTitle">
              <h2>{cardTitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCards;
