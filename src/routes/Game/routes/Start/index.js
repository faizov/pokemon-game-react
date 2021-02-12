import { useState, useEffect, useContext } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom'

import s from './style.module.css';
import PokemonCard from '../../../../components/PokemonCard';
import { FireBaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';

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

  const handleClickCard = (key) => {
    const pokemon = {...pokemons[key]};
    pokemonContext.onSelectedPokemon(key, pokemon);

    setPokemons(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      }
    }));
  }

  return (
    <>
      <div className={s.flex}>
        {Object.entries(pokemons).map(([key, {name, id, type, values, img, selected,}]) => 
            <PokemonCard
                key={key} 
                name={name} 
                id={id} 
                type={type}
                values={values}
                img={img}
                isActive={true}
                isSelected={selected}
                className={s.card}
                handleClickCard={() => {
                  if (Object.keys(pokemonContext.pokemons).length < 5 || selected) {
                    handleClickCard(key)
                  }
                 }}
            />
        )}
      </div>
      <button 
        onClick={handleStartGame}
        disabled={Object.keys(pokemonContext.pokemons).length < 5}
      >
        Start Game!
      </button>

    </>
  )
}

export default Game;