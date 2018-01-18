import React, { Component } from "react";
import Items from "./Items";

const ITEMS_URL = "http://localhost:4000/items";
const USERS_URL = "http://localhost:4000/users";
export default class ItemsContainer extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    //TODO: fetch JSON and atach to state!
    const items = fetch(ITEMS_URL).then(r => r.json());
    const users = fetch(USERS_URL).then(r => r.json());

    Promise.all([items, users]).then(response => {
      const [itemsList, usersList] = response;

      const combined = itemsList.map(item => {
        const { fullname, email } = usersList.find(
          user => user.id === item.itemowner
        );
        item.itemowner = { fullname, email };

        return item;
      });
      // .map(item => {
      //   const { id } = usersList.find(user => user.id === item.borrower);
      //   item.borrower = { id };

      //   return item;
      // });
      this.setState({ items: combined });
      //TODO: merge 2 lists together into a single list
      // attach the new list to state,
      // and pass the list into the items component.
    });
  }
  render() {
    return <Items list={this.state.items} />;
  }
}
