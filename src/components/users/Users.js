import React, { useState, useEffect } from 'react';
import axios from 'axios';

import User from './User';

const Users = (props) => {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    const res = await axios.get(`http://localhost:5000/users`);
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>{props.title}</h1>

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users !== null ? (
            users.map((user) => <User key={user.id} user={user} />)
          ) : (
            <tr>
              <td colSpan="5">No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
