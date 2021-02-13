import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import cn from 'classnames'
import PokemonCard from '../../../../components/PokemonCard'

import { PokemonContext } from '../../../../context/pokemonContext';

import s from './style.module.css';

const FinishPage = () => {
    const pokemonContext = useContext(PokemonContext);

    console.log(pokemonContext.pokemons2)
    const history = useHistory();
    const handleStartGame = () => {
        history.push(`/game`)
        pokemonContext.onPokemons2({})



    }
    if (Object.keys(pokemonContext.pokemons).length === 0) {
        history.replace('/game');
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
                        />
                    )}
            </div>
        </div>
    );
};

export default FinishPage;