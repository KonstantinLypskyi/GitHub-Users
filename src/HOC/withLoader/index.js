// modules
import React from 'react';
// view
import * as View from 'view';

export const withLoader = Component => {
  class WithLoader extends React.Component {
    render() {
      const { loading } = this.props;

      return loading ? <View.Loader /> : <Component {...this.props} />;
    }
  }

  return WithLoader;
};