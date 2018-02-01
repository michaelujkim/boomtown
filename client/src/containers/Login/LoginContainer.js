import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Login from "./Login";
import { firebaseApp, firebaseAuth } from "../../config/firebaseconfig";
import { Route, Redirect } from "react-router-dom";
class LoginContainer extends Component {
  static propTypes = {};
  constructor() {
    super();
    this.state = {
      emailInputValue: "",
      passwordInputValue: "",
      loginError: { message: "" }
    };
  }

  login = () => {
    if (this.state.emailInputValue && this.state.passwordInputValue) {
      firebaseAuth
        .signInWithEmailAndPassword(
          this.state.emailInputValue,
          this.state.passwordInputValue
        )
        .then(args => {
          this.props.history.push("/items");
        })
        .catch(function(error) {
          // Handle Errors here.
          this.setState({ loginError: error });
          // ...
        });
    }
  };
  handleUpdateEmail = e => {
    this.setState({
      emailInputValue: e.target.value
    });
  };
  handleUpdatePassword = e => {
    this.setState({
      passwordInputValue: e.target.value
    });
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/" }
    };
    return !this.props.authenticated ? (
      <Login
        login={this.login}
        emailInputValue={this.state.emailInputValue}
        passwordInputValue={this.state.passwordInputValue}
        handleUpdateEmail={this.handleUpdateEmail}
        handleUpdatePassword={this.handleUpdatePassword}
        loginError={this.state.loginError}
      />
    ) : (
      <Redirect to={from} />
    );
  }
}
const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  userLoading: state.auth.userLoading
});

export default connect(mapStateToProps)(LoginContainer);
