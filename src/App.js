import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from './components/Home.tsx';
import ResultDetails from './components/ResultDetails.tsx';
import UserNotFound from './components/UserNotFound.tsx';
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
