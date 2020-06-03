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
            strIngredient6,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6
          } = data.drinks[0];

            const ingredients = [
              strIngredient1, 
              strIngredient2, 
              strIngredient3, 
              strIngredient4, 
              strIngredient5,
              strIngredient6
            ];
            const measurements = [
              strMeasure1,
              strMeasure2,
              strMeasure3,
              strMeasure4,
              strMeasure5,
              strMeasure6
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


    function refreshPage() {
      window.location.reload(false);
    }
    let imageOne = `https://www.thecocktaildb.com/images/ingredients/${ingredients[0]}.png`;
    let imageTwo = `https://www.thecocktaildb.com/images/ingredients/${ingredients[1]}.png`;
    let imageThree = `https://www.thecocktaildb.com/images/ingredients/${ingredients[2]}.png`;
    let imageFour = `https://www.thecocktaildb.com/images/ingredients/${ingredients[3]}.png`;
    let imageFive = `https://www.thecocktaildb.com/images/ingredients/${ingredients[4]}.png`;
    let imageSix = `https://www.thecocktaildb.com/images/ingredients/${ingredients[5]}.png`;

    let imageOneLarge = `https://www.thecocktaildb.com/images/ingredients/${ingredients[0]}.png`;
    let imageTwoLarge = `https://www.thecocktaildb.com/images/ingredients/${ingredients[1]}.png`;
    let imageThreeLarge = `https://www.thecocktaildb.com/images/ingredients/${ingredients[2]}.png`;
    let imageFourLarge = `https://www.thecocktaildb.com/images/ingredients/${ingredients[3]}.png`;
    let imageFiveLarge = `https://www.thecocktaildb.com/images/ingredients/${ingredients[4]}.png`;
    let imageSixLarge = `https://www.thecocktaildb.com/images/ingredients/${ingredients[5]}.png`;

    return (
    <section className="section cocktail-section">
      <div className="random-buttons">
        <Link to="/" className="btn btn-single btn-animated">Back home</Link>
        <button className="btn btn-single btn-animated" onClick={refreshPage}>Give me another one</button>
      </div>
      <div className="single-drink">
        
      <h2 className="heading heading-single-cocktail">{name}</h2>
        <img src={image} alt={name} className="single-cocktail-image"></img>
        <div className="drink-info">
          <p>Name: {name}</p>
          <p>Category: {category}</p>
          <p>Info: {info}</p>
          <p>Glass: {glass}</p>
          <p>Instructions: {instructions}</p>
  
          <div className="ingredient-image-container">
            <div className="ingredient-image ingredient-image-one">
              <a href={imageOneLarge} target="blank"> 
                <img src={imageOne} alt=""/> 
              </a>
              {measurements[0]} {ingredients[0]}
            </div> 
            <div className="ingredient-image ingredient-image-two">
              <a href={imageTwoLarge} target="blank"> 
                <img src={imageTwo} alt=""/>
              </a>
              {measurements[1]} {ingredients[1]}
            </div> 
            <div className="ingredient-image ingredient-image-three">
              <a href={imageThreeLarge} target="blank">
                <img src={imageThree} alt=""/>
              </a>
              {measurements[2]} {ingredients[2]}
            </div> 
            <div className="ingredient-image ingredient-image-four">
              <a href={imageFourLarge} target="blank">
                <img src={imageFour} alt=""/>
              </a>
              {measurements[3]} {ingredients[3]}
            </div> 
            <div className="ingredient-image ingredient-image-five">
              <a href={imageFiveLarge} target="blank">
                <img src={imageFive} alt=""/>
                </a>
              {measurements[4]} {ingredients[4]}
            </div> 
            <div className="ingredient-image ingredient-image-six">
              <a href={imageSixLarge} target="blank">
                <img src={imageSix} alt=""/>
              </a>
              {measurements[5]} {ingredients[5]}
            </div> 
          </div>
          {/* <p>
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
          </p> */}
          
        </div>
      </div>
    </section>
    )
  }

}
