import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from './components/Home';
import ResultDetails from './components/ResultDetails';
import UserNotFound from './components/UserNotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path={ROUTES.LANDING} component={Home}/>
        <Route exact path={ROUTES.SEARCH} component={Home}/>
        <Route exact path={ROUTES.RESULT} component={ResultDetails}/>
        <Route exact path={ROUTES.NOT_FOUND} component={UserNotFound}/>
      </div>
    </Router>
  );
}

export default App;
