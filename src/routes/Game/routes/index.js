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
    return (
        <PokemonContext.Provider value={{
            pokamon: [],
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