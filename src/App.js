import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import AddUser from './components/users/AddUser';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/add" component={AddUser} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
