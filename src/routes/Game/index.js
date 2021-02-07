import { useState, useEffect } from 'react';
import database from '../../service/firebase';

import s from './style.module.css';
import PokemonCard from '../../components/PokemonCard/';



const Game = () => {
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val())
    })
  }, [])

  const handleAddCard = () => {
      const data = {
        "abilities" : [ "intimidate", "shed-skin", "unnerve" ],
        "base_experience" : 157,
        "height" : 35,
        "id" : 24,
        "img" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
        "name" : "arbok",
        "stats" : {
          "attack" : 95,
          "defense" : 69,
          "hp" : 60,
          "special-attack" : 65,
          "special-defense" : 79,
          "speed" : 80
        },
        "type" : "poison",
        "values" : {
          "bottom" : "A",
          "left" : "A",
          "right" : 9,
          "top" : 5
        }
    }

    const newKey = database.ref().child('pokemons').push().key;
    database.ref('pokemons/' + newKey).set(data);

    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val())
    })
  }
        

  
  const handleClickCard = (id) => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
          const pokemon = {...item[1]};
          if (pokemon.id === id) {
            const objID = item[0];
            database.ref('pokemons/'+ objID).set({
              ...item[1],
              isActive: !pokemon.isActive,
            });
            pokemon.isActive = !pokemon.isActive;
          };
  
          acc[item[0]] = pokemon;
          return acc;
      }, {});
     
  });
    
  }

  return (
    <>
    <button onClick={handleAddCard}>Add pokemon!</button>
    <div className={s.flex}>
      {Object.entries(pokemons).map(([key, {name, id, type, values, img, isActive}]) => 
          <PokemonCard
              key={key} 
              name={name} 
              id={id} 
              type={type}
              values={values}
              img={img}
              handleClickCard={handleClickCard}
              isActive={isActive}
          />
      )}
    </div>
    </>
  )
}

export default Game;