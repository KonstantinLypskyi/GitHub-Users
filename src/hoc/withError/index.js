import React from 'react';

export const withError = Component => {
  class WithError extends React.Component {
    render() {
      if (this.props.error) {
        return 'An error has occurred. Please contact the developer.';
      }
      return <Component {...this.props} />;
    }
  }

  return WithError;
};

export default withError;
