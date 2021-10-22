import logo from './logo.svg';
import './App.css';
import Home from './routes/Home';
import Details from './routes/Details';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Toolbar from './components/Toolbar';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <BrowserRouter>
      <div className="App">
        <Toolbar />
        <div className="pt-12">

          <Switch>
            {/* <Route exact path='/category/:category' component={MealList} /> */}
            {/* <Route exact path='/cuisine/:cuisine' component={List} /> */}
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
