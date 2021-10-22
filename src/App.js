import logo from './logo.svg';
import './App.css';
import Home from './routes/Home';
import Details from './routes/Details';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Toolbar from './components/Toolbar';
import List from './routes/List';

function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
        <Toolbar />
        <div className="pt-12">

          <Switch>
            {/* <Route exact path='/category/:category' component={MealList} /> */}
            {/* <Route exact path='/cuisine/:cuisine' component={List} /> */}
            <Route exact path='/:section/:id' component={List} />
            {/* <Route exact path='/about' component={Home} /> */}
            <Route exact path='/:recipeId' component={Details} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
