import React from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { HomePage, CommentsPage } from './pages/index';

import './assets/styles/App.scss';
import './assets/styles/custom.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* use exact path for "/" otherwise it will match every path containing "/" */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/comments" component={CommentsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
