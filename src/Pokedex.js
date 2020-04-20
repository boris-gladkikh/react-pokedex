import React from 'react';
import Pokecard from "./Pokecard";
import "./pokedex.css"


function Pokedex({ pokemonArray, isWinner, totalScore }) {
  return (
    <div>
    <div className="poketable">

      {pokemonArray.map(p => {
        return Pokecard(p)
      })}

    </div>
    <h5>Score: {totalScore}</h5>
    <h3>{isWinner? "You Win, Pal!!!": "Maybe next time!"}</h3>
    </div>
  )

}

Pokedex.defaultProps = {
  pokemonArray: [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
  ],
  isWinner: false,
  totalScore: 872
}

export default Pokedex