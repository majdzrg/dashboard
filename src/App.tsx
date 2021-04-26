import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import Main from './component/main/Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Main/>
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
