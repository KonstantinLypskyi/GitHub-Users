// modules
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// system
import { Book } from 'routes/book';
// custom
import List from './List';
import Single from './Single';


const Users = () => (
  <Switch>
    <Route exact path={Book.single()} component={Single} />
    <Route path={Book.list()} component={List} />
  </Switch>
)

export default Users;