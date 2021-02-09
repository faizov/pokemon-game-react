import { useState, useEffect, useContext } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom'

import s from './style.module.css';
import PokemonCard from '../../../../components/PokemonCard';
import { FireBaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';

const DATA = {
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

const Game = () => {
  const [pokemons, setPokemons] = useState({});

  const firebase = useContext(FireBaseContext);
  const pokemonContext = useContext(PokemonContext);

  const match = useRouteMatch();
  const history = useHistory();
  const handleStartGame = () => {
      history.push(`${match.path}board`)
  }

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    })
  }, [])

  const handleAddCard = () => {
    const data = DATA;
    firebase.addPokemon(data)
  }
  
  const addPokemonContext = (val) => {
    pokemonContext.pokemon.push(val);
    console.log(pokemonContext)
  }

  const handleClickCard = (id) => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        if (pokemon.id === id && !pokemon.isSelected) {
          pokemon.isSelected = true;
          addPokemonContext(item);
        };
        // firebase.postPokemon(item[0], pokemon);
        acc[item[0]] = pokemon; 
        return acc;
      }, {});
    });
  }

  return (
    <>
      <button onClick={handleAddCard}>Add pokemon!</button>
      <div className={s.flex}>
        {Object.entries(pokemons).map(([key, {name, id, type, values, img, isActive, isSelected, minimize, className}]) => 
            <PokemonCard
                key={key} 
                name={name} 
                id={id} 
                type={type}
                values={values}
                img={img}
                handleClickCard={handleClickCard}
                isActive={true}
                isSelected={isSelected}
                className={className}
            />
        )}
      </div>
      <button onClick={handleStartGame}>Start Game!</button>

    </>
  )
}

export default Game;