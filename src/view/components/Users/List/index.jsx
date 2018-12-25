// modules
import React from 'react';
import PropTypes from 'prop-types';
// assets
import './assets/styles.scss';

export const Users = ({ users, toProfile }) => (
  <table className="highlight centered users">
    <thead>
      <tr>
        <th>Login</th>
        <th>Profile Link</th>
        <th>Avatar</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr
          key={user.id}
          className="users__row"
          onClick={() => toProfile(user.login)}
        >
          <td>{user.login}</td>
          <td>{user.html_url}</td>
          <td>
            <img className="users__img" src={user.avatar_url} alt="avatar" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

Users.propTypes = {
  users: PropTypes.array.isRequired,
  toProfile: PropTypes.func.isRequired
}