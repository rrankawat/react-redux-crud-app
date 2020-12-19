import React from 'react';

const User = (props) => {
  const { id, firstName, lastName, age } = props.user;

  const onClick = () => {
    props.onDelete(id);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{age}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={onClick}>
          Delete
        </button>{' '}
        <a href={`/edit/${id}`} className="btn btn-secondary btn-sm">
          Edit
        </a>
      </td>
    </tr>
  );
};

export default User;
