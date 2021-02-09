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
    const [pokemon, setPokemon] = useState([])
    const handleClick = (val) => {
        setPokemon(val);
    };
    return (
        <PokemonContext.Provider value={{
            pokemon,
            select: handleClick
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