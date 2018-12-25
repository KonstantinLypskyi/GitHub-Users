// modules
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// system
import { requestFetchUsers } from 'pages/Users/actions';
import { selectListUsers, selectLoading } from 'pages/Users/selectors';
import { Book } from 'routes/book';
// view
import * as View from 'view';

class List extends React.Component {

  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  quantity = 100;

  componentDidMount() {
    this.props.fetchUsers(this.quantity);
  }
  
  toProfile = id => {
    this.props.history.push(Book.single(id))
  }

  render() {
    const { users, loading } = this.props;
    if (loading) {
      return <View.Loader />
    }
    return <View.Users users={users} toProfile={this.toProfile} />
  }
}

const mapStateToProps = createStructuredSelector({
  users: selectListUsers(),
  loading: selectLoading()
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: quantity => dispatch(requestFetchUsers(quantity))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)((List));
