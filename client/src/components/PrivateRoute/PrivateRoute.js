import React from "react";
import { connect } from "react-redux";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ authenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (authenticated) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/" />;
      }
    }}
  />
);
const mapStateToProps = state => ({
  userLoading: state.auth.userLoading,
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(PrivateRoute);
