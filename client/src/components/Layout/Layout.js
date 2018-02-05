import React from "react";
import PropTypes from "prop-types";
import HeaderBar from "../HeaderBar";
import "./styles.css";
import { connect } from "react-redux";
import FlatButton from "material-ui/FlatButton";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

const Layout = ({ children, userLoading, authenticated }) =>
  userLoading ? (
    <div>"loading..."</div>
  ) : (
    <div className="appContentWrapper">
      <div className="appHeader">{authenticated && <HeaderBar />}</div>
      <div className="appContent">{children}</div>
      <div className="appFooter">
        <Link to={`/share`}>share</Link>
      </div>
    </div>
  );

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: PropTypes.node
};
const mapStateToProps = state => ({
  userloading: state.auth.userloading,
  authenticated: state.auth.authenticated
});

export default withRouter(connect(mapStateToProps)(Layout));
