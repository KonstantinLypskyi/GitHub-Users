// modules
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// system
import { Book } from 'routes/book';
// assets
import './assets/styles.scss';

export const User = ({ user, followers, subscribers, toggleVisible }) => (
  <div className="user">
    <img src={user.avatar_url} alt="avatar" />
    <Link to={Book.list()}>Back</Link>
    <ul className="user__list">
      <li>Name: {user.name}</li>
      <li>
        <span
          className="user__list-select"
          onClick={() => toggleVisible('followers')}
        >
          Followers &dArr;
        </span>
        <ul>
          {followers &&
            user.followers.map(follower => (
              <li key={follower.id}>Login: {follower.login}</li>
            ))}
        </ul>
      </li>
      <li>
        <span
          className="user__list-select"
          onClick={() => toggleVisible('subscribers')}
        >
          Subscriptions &dArr;
        </span>
        <ul>
          {subscribers &&
            user.subscribers.map(subscriber => (
              <li key={subscriber.id}>Name: {subscriber.name}</li>
            ))}
        </ul>
      </li>
      <li>Created at: {user.created_at}</li>
      <li>Company: {user.company}</li>
      <li>Email: {user.email}</li>
      <li>Blog: {user.blog}</li>
      <li>Biography: {user.bio}</li>
    </ul>
  </div>
);

User.propTypes = {
    user: PropTypes.object.isRequired,
    followers: PropTypes.bool.isRequired,
    subscribers: PropTypes.bool.isRequired,
    toggleVisible: PropTypes.func.isRequired
}