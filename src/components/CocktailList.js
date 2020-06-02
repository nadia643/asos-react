import React from 'react';
import Cocktail from './Cocktail';


export default function CocktailList({ cocktails, loading }) {
  if(loading) {
    return <h2>Loading...</h2>
  }
  if(cocktails.length < 1) {
    return <h2>No cocktails matched your search criteria.</h2>
  }
  
  

  return (
    <div>
      <h1>Cocktails</h1>
      <div>
        { cocktails.map(item => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}
