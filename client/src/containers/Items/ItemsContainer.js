import React, { Component } from "react";
import Items from "./Items";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchItemsAndUsers } from "../../redux/modules/items";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

class ItemsContainer extends Component {
  static propTypes = {};
  // componentDidMount() {
  //   this.props.dispatch(fetchItemsAndUsers());
  // }

  render() {
    const { loading, items } = this.props.data;

    return loading ? <p> Loading...</p> : <Items list={items} />;
  }
}
const fetchItems = gql`
  query {
    items {
      id: id
      title
      itemowner {
        id
        fullname
        email
      }
      borrower {
        id
        fullname
      }
      imageurl
      description
      available
      tags {
        id
        title
      }
    }
  }
`;

// const mapStateToProps = state => ({
//   isLoading: state.items.isLoading,
//   items: state.items.items,
//   error: state.items.error,
//   values: state.items.filtered
// });

export default graphql(fetchItems)(ItemsContainer);
