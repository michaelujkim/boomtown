import React, { Component } from "react";
import Items from "./Items";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchItemsAndUsers } from "../../redux/modules/items";

class ItemsContainer extends Component {
  static propTypes = {};
  componentDidMount() {
    this.props.dispatch(fetchItemsAndUsers());
  }

  render() {
    console.log(this.props.values);
    return <Items list={this.props.items} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.items.isLoading,
  items: state.items.items,
  error: state.items.error,
  values: state.items.filtered
});

export default connect(mapStateToProps)(ItemsContainer);
