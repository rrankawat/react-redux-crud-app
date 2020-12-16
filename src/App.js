import React from 'react';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <Users title="All Users" />
      </div>
    </div>
  );
};

export default App;
