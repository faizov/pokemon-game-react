import {
  useRouteMatch,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import cn from 'classnames'

import HomePage from './routes/Home/'
import GamePage from './routes/Game/'
import AboutPage from './routes/About/'
import ContactPage from './routes/Contact/'
import NotFound from './routes/NotFound/'
import MenuHeader from './components/MenuNavbar/'
import Footer from './components/Footer/'

import s from './style.module.css'

const App = () => {
  const math = useRouteMatch('/');

  return (
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
  );
};
export default App;