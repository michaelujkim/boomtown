import React, { Component } from "react";
import Profile from "./Profile";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux/modules/profile";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class ProfileContainer extends Component {
  static propTypes = {};
  // componentDidMount() {
  //   this.props.dispatch(fetchUsers(this.props.match.params.userid));
  // }
  render() {
    const { loading, user } = this.props.data;
    console.log(this.props.data);
    return <Profile list={this.props.data.items} />;
  }
}
const fetchUser = gql`
  query getUser($id: ID) {
    user(id: $id) {
      bio
      email
      fullname
      borroweditems {
        id
      }
      shareditems {
        id
        title
        imageurl
        description
        available
        created
        tags {
          title
        }
        borrower {
          id
          fullname
        }
        itemowner {
          id
          bio
          email
          fullname
        }
      }
    }
  }
`;
export default graphql(fetchUser, {
  options: ({ match }) => ({
    variables: {
      id: match.params.userid
    }
  })
})(ProfileContainer);
