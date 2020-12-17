import React from 'react';

const User = (props) => {
  const { id, firstName, lastName, age } = props.user;

  return (
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{age}</td>
      <td>
        <a href="/#" className="btn btn-danger btn-sm">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default User;
