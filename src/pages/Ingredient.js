import React, { useState, useEffect } from 'react';
import CocktailListIngredient from '../components/CocktailListIngredient';
import SearchFormIngredient from '../components/SearchFormIngredient';


export default function Home() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      try {
        const response = await fetch(
          ` https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`
          );
          const data = await response.json();
          const { drinks } = data;
          if(drinks) {
            const newCocktails = drinks.map(item => {
              const {
                idDrink,
                strDrink,
                strDrinkThumb,
                strAlcoholic, 
                strGlass
              } = item;
              return {
                id: idDrink,
                name: strDrink,
                image: strDrinkThumb,
                info: strAlcoholic,
                glass: strGlass
              }
            });
            setCocktails(newCocktails)
          } else {
            setCocktails([])            
          }
        }
        catch(error) {
          console.log("you have erred, but it still seems to work so check this later");
        }
        setLoading(false);
      }
      getDrinks()
  }, [searchTerm])


  return (
    <main>
      <SearchFormIngredient setSearchTerm={setSearchTerm} />  
      <CocktailListIngredient loading={loading} cocktails={cocktails} />
      
    </main>
  )
}
