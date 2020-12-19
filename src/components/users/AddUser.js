import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddUser = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [age, setAge] = useState('');

  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (firstName !== '' && lastName !== '' && age !== '') {
      const newUser = {
        firstName,
        lastName,
        age,
      };

      await axios.post(`http://localhost:5000/users`, newUser);

      // reset state
      setFirstName('');
      setlastName('');
      setAge('');

      // redirect
      history.push('/');
    }
  };

  return (
    <div className="w-50">
      <h2 className="mb-4">Add User</h2>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <input type="submit" className="btn btn-success mt-2" value="Submit" />
      </form>
    </div>
  );
};

export default AddUser;
