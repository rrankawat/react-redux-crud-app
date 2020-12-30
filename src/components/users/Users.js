import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/userAction';

import User from './User';

const Users = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, []);

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

const mapStateToProps = (state) => ({
  users: state.user.users,
});

export default connect(mapStateToProps, { getUsers })(Users);
