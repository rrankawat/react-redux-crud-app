import React, { useState, useEffect } from 'react';
import axios from 'axios';

import User from './User';

const Users = () => {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    const res = await axios.get(`http://localhost:5000/users`);
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const onDelete = async (id) => {
    let copyUsers = users;
    copyUsers = copyUsers.filter((user) => user.id !== id);
    setUsers(copyUsers);

    // delete from db
    await axios.delete(`http://localhost:5000/users/${id}`);
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>All Users</h1>
        <div className="mt-2">
          <a href="/add" className="btn btn-primary">
            Add User
          </a>
        </div>
      </div>

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
            users.map((user) => (
              <User key={user.id} user={user} onDelete={onDelete} />
            ))
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
