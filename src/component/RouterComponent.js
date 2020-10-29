import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Homepage';
import Readmore from '../pages/Readmore';


export default function RouterComponent() {
  return(
    <Router>
      <Switch>
        <Route exact path="/readmore" component={Readmore} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>

  );
}