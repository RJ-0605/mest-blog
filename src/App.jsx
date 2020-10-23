import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ThemeProvider from './ThemeProvider';
import MainPage from './MainPage';
import AnotherPage from './AnotherPage';

function App() {

  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route path="/main" component={MainPage} />
          <Route path="/another" component={AnotherPage} />
          <Route path="/" component={MainPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App;