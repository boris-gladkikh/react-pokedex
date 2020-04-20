import React from 'react';
import Pokedex from "./Pokedex";
import Pokecard from "./Pokecard";
import "./game.css";
import {choice, remove} from "./helpers";

function Pokegame({ gameArray}){
  let hand1Array = [];

  for (let i = 0; i < 4; i++){
    let card = choice(gameArray)
    hand1Array.push(card);
    remove(gameArray, card);
  }
  let hand1Exp = hand1Array.reduce(function(total,pokemon){
    return total += pokemon.base_experience;
  },0);
  let hand2Exp = gameArray.reduce(function(total,pokemon){
    return total += pokemon.base_experience;
  },0);
  let isWinner1,isWinner2;

  if(hand1Exp > hand2Exp){
    isWinner1 = true;
    isWinner2 = false;
  } else {
    isWinner1 = false;
    isWinner2 = true;
  }
  return (

    <div className="pokegame-container">
      < Pokedex pokemonArray={hand1Array} totalScore={hand1Exp} isWinner={isWinner1} /> 
      < Pokedex pokemonArray={gameArray} totalScore={hand2Exp} isWinner={isWinner2}/>
      


    </div>
  )
  



}

Pokegame.defaultProps = {
  gameArray: [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
  ]
}
export default Pokegame