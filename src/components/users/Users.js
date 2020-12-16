import React, { useState } from 'react';

const Users = (props) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: 'Rakesh',
      lastName: 'Rankawat',
      age: 27,
    },
    {
      id: 2,
      firstName: 'Meenu',
      lastName: 'Rankawat',
      age: 27,
    },
    {
      id: 3,
      firstName: 'John',
      lastName: 'Doe',
      age: 35,
    },
  ]);

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
            users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>
                  <a href="/#" className="btn btn-danger btn-sm">
                    Delete
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <p>No data found</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
