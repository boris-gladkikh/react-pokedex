import React from 'react';
import "./card.css";


function Pokecard(props) {
  let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
  return (
    <div className="card">
      <ul>
        <li><h3> {props.name}</h3></li>
        <li><img src={imgUrl} alt="pokemon"></img></li>

        <li> Type: {props.type}</li>
        <li> EXP: {props.base_experience}</li>

      </ul>

    </div>
  )

}

export default Pokecard;