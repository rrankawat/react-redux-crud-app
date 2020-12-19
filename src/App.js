import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/add" component={AddUser} />
          <Route exact path="/edit/:id" component={EditUser} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
