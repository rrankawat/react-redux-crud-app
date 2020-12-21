import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to={`/edit/${id}`} className="btn btn-secondary btn-sm">
          Edit
        </Link>
      </td>
    </tr>
  );
};

export default User;
