import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Random() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);


  
  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        );
        const data = await response.json();
        console.log(data);
        
        if(data.drinks) {
          const {
            strDrink: name, 
            strDrinkThumb: image, 
            strAlcoholic: info,
            strCategory: category, 
            strGlass: glass, 
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5
          } = data.drinks[0];

            const ingredients = [
              strIngredient1, 
              strIngredient2, 
              strIngredient3, 
              strIngredient4, 
              strIngredient5
            ];
            const measurements = [
              strMeasure1,
              strMeasure2,
              strMeasure3,
              strMeasure4,
              strMeasure5
            ]

            const newCocktail = {
              name, 
              image,
              info,
              category,
              glass,
              instructions,
              ingredients,
              measurements
            };
            setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }

      } catch (error) {
        console.log(error);        
      }
      setLoading(false)
    }
    getCocktail();
  }, [id]);

  if(loading) {
    return <h2 className="section-title">Loading...</h2>
  }
  if(!cocktail) {
    return <h2 className="section-title">No cocktail to display</h2>
  }
  else {
    const { name, image, category, info, glass, instructions, ingredients, measurements }
    = cocktail;
    return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-single btn-animated">Back home</Link>
      <div className="single-drink">
      <h2 className="heading heading-single-cocktail">{name}</h2>
        <img src={image} alt={name} className="single-cocktail-image"></img>
        <div className="drink-info">
          <p>Name: {name}</p>
          <p>Category: {category}</p>
          <p>Info: {info}</p>
          <p>Glass: {glass}</p>
          <p>Instructions: {instructions}</p>
          <p>
            Ingredients: { " " }
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item},  </span> : null;
              })}
          </p>
          <p> 
            Measurements: { " " }
              {measurements.map((item, index) => {
                return item ? <span key={index}> {item}, </span> : null;
              })}

          </p>
        </div>
      </div>
    </section>
    )
  }

}
