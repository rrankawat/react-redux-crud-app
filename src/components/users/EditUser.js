import React, { useState } from 'react';
import axios from 'axios';

const EditUser = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [age, setAge] = useState('');

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
      props.history.push('/');
    }
  };

  return (
    <div className="w-50">
      <h2 className="mb-4">Edit User</h2>

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
        <input type="submit" className="btn btn-success mt-2" value="Update" />
      </form>
    </div>
  );
};

export default EditUser;
