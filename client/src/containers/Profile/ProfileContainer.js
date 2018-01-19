import React, { Component } from "react";
import Profile from "./Profile";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux/modules/profile";

class ProfileContainer extends Component {
  static propTypes = {};
  componentDidMount() {
    this.props.dispatch(fetchUsers(this.props.match.params.userid));
  }
  render() {
    console.log(this.props.user);
    return <Profile list={this.props.user} />;
  }
}
const mapStateToProps = state => ({
  isLoading: state.profile.isLoading,
  user: state.profile.items,
  error: state.profile.error
});
export default connect(mapStateToProps)(ProfileContainer);
