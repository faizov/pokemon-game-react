import React, { useState } from 'react';
import {
    useRouteMatch,
    Switch,
    Route,
  } from "react-router-dom";

import StartPage from './Start/'
import BoardPage from './Board/'
import FinishPage from './Finish/'

import {PokemonContext} from '../../../context/pokemonContext'

const GamePage = () => {
    const match = useRouteMatch();
    const [selectedPokemon, setSelectedPokemon] = useState({})

    const handleSelectPokemon = (key, pokemon) => {
        setSelectedPokemon(prevState => {
            if(prevState[key]) {
                const copyState = {...prevState};

                delete copyState[key];

                return copyState;
            }
            return {
                ...prevState,
                [key]: pokemon,
            }
        })
    };

    return (
        <PokemonContext.Provider value={{
            pokemons: selectedPokemon,
            onSelectedPokemon: handleSelectPokemon
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;