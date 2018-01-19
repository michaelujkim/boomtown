import React, { Component } from "react";
import Filter from "./Filter";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchItemsAndUsers } from "../../redux/modules/items";

class FilterContainer extends Component {
  static propTypes = {};
  componentDidMount() {
    this.props.dispatch(fetchItemsAndUsers());
  }

  render() {
    return <Filter list={this.props.items} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.items.isLoading,
  items: state.items.items,
  error: state.items.error
});

export default connect(mapStateToProps)(FilterContainer);
