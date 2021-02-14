import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import cn from 'classnames'
import database from '../../../../service/firebase';

import PokemonCard from '../../../../components/PokemonCard'

import { FireBaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';

import s from './style.module.css';

const FinishPage = () => {
    const firebase = useContext(FireBaseContext);
    const pokemonContext = useContext(PokemonContext);


    const history = useHistory();
    const handleStartGame = () => {
        history.push(`/game`)
        pokemonContext.onPokemons2({})



    }
    if (Object.keys(pokemonContext.pokemons).length === 0) {
        history.replace('/game');
    }

    const handleClickCard = (key) => {
        const pokemon = {...pokemonContext.pokemons2[key]};
        console.log(pokemon)
        firebase.addPokemon(pokemon)
 
        history.push(`/game`)

          
      }
    return (
        <div className={s.flex}>
             <div className={s.playerOne}>
                {Object.entries(pokemonContext.pokemons).map(([key, {name, id, type, values, img, selected,}]) => 
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
                    />
                )}
            </div>

            <button onClick={handleStartGame}>END GAME</button>

            <div className={s.playerTwo}>
                {Object.entries(pokemonContext.pokemons2).map(([key, {name, id, type, values, img, selected,}]) => 
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
                                if (Object.keys(pokemonContext.pokemons2) || selected) {
                                  handleClickCard(key)
                                }
                               }}
                        />
                    )}
            </div>
        </div>
    );
};

export default FinishPage;