import React from 'react';
import { Link } from 'react-router-dom';

export default function Cocktail({ image, name, id, info, glass, measurements }) {
  return (
    <article className="cocktail"> 
      <div className="img-container">
        <img className="cocktail-img" src={image} alt={name} />
      </div>
      <div className="cocktail-card-details">
        <h3>{ name }</h3>
        <h4>{ glass }</h4>
        <p>{ info }</p>
        <Link to={`/cocktail/${id}`} className="btn btn-white btn-animated">Details</Link>
      </div>
    </article>
  )
}
