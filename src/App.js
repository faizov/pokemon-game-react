import {
  useRouteMatch,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import cn from 'classnames';

import HomePage from './routes/Home/'
import GamePage from '../src/routes/Game/routes/'
import AboutPage from './routes/About/'
import ContactPage from './routes/Contact/'
import NotFound from './routes/NotFound/'
import MenuHeader from './components/MenuNavbar/'
import Footer from './components/Footer/'

import s from './style.module.css'

import Firebase from './service/firebase';
import {FireBaseContext} from './context/firebaseContext'

const App = () => {
  const math = useRouteMatch('/');

  return (
    <FireBaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route>
          <>
            <MenuHeader bgActive={!math.isExact}/>
            <div className={cn(s.wrap, {[s.isHomePage]: math.isExact})}>
              <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/game" component={GamePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/contact" component={ContactPage}/>

                <Route render={() => (
                  <Redirect to="/404"/>
                )} />
              </Switch>
            </div>
            
            <Footer />
          </>
        </Route>
      </Switch>
    </FireBaseContext.Provider>
  );
};
export default App;