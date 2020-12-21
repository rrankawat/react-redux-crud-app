import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const EditUser = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();

  const getUser = async () => {
    const res = await axios.get(
      `http://localhost:5000/users/${props.match.params.id}`
    );

    setFirstName(res.data.firstName);
    setLastName(res.data.lastName);
    setAge(res.data.age);
  };

  useEffect(() => {
    getUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      age: ageRef.current.value,
    };

    await axios.put(
      `http://localhost:5000/users/${props.match.params.id}`,
      updatedUser
    );

    // redirect
    props.history.push('/');
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
            defaultValue={firstName}
            ref={firstNameRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Enter Last Name"
            defaultValue={lastName}
            ref={lastNameRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            placeholder="Enter Age"
            defaultValue={age}
            ref={ageRef}
          />
        </div>
        <input type="submit" className="btn btn-success mt-2" value="Update" />
      </form>
    </div>
  );
};

export default EditUser;
