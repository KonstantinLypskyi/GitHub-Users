// modules
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
// system
import { requestFetchSingleUser } from 'pages/Users/actions';
import {
  selectSingleUser,
  selectLoading,
  selectError
} from 'pages/Users/selectors';
import { withError } from 'hoc/withError';
// view
import * as View from 'view';

class User extends React.Component {
  static propTypes = {
    fetchUser: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
  };

  state = {
    // visible
    followers: false,
    subscribers: false
  };

  componentDidMount() {
    const {
      fetchUser,
      match: {
        params: { id }
      }
    } = this.props;
    fetchUser(id);
  }

  toggleVisible = name => this.setState({ [name]: !this.state[name] });

  render() {
    const { user, loading } = this.props;
    const { followers, subscribers } = this.state;
    if (loading) {
      return <View.Loader />;
    }
    return (
      <View.User
        user={user}
        followers={followers}
        subscribers={subscribers}
        toggleVisible={this.toggleVisible}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectSingleUser(),
  loading: selectLoading(),
  error: selectError()
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(requestFetchSingleUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withError(User)));