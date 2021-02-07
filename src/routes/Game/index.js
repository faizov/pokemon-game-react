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
  }, [pokemons])

  const handleAddCard = () => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc,item) => {
        const pokemon = item[1];
        var updates = {};
        const newPostKey = database.ref().child('pokemons').push().key;
        updates["/pokemons/" + newPostKey] = pokemon;
        return database.ref().update(updates);
        
      }, {});
    });
  };
  
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