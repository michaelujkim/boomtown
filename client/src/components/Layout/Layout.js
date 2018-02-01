import React from "react";
import PropTypes from "prop-types";
import HeaderBar from "../HeaderBar";
import "./styles.css";
import { connect } from "react-redux";

const Layout = ({ children, userLoading, authenticated }) =>
  userLoading ? (
    <div>"loading..."</div>
  ) : (
    <div className="appContentWrapper">
      <div className="appHeader">{authenticated && <HeaderBar />}</div>
      <div className="appContent">{children}</div>
      {/* And a footer here, but not on the login route... */}
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

export default connect(mapStateToProps)(Layout);
