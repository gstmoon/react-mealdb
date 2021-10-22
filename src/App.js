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
        <div className="pt-12" style={{ minHeight: "100vh" }}>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:section/:id' component={List} />
            <Route exact path='/:recipeId' component={Details} />
          </Switch>
        </div>

        {/* footer */}
        <div className="w-full h-28 flex items-center justify-center">
          <div className="w-full mx-5 border-t border-gray-300 p-10">
            <a
              className="hover:underline"
              href="https://github.com/gstmoon/react-mealdb"
              target="_blank">
              View Source code on Github
            </a>
          </div>
        </div>
        {/* end: footer */}
      </div>
    </BrowserRouter>
  );
}

export default App;
