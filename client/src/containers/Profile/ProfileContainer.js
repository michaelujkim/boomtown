import React, { Component } from "react";
import Profile from "./Profile";
const ITEMS_URL = "http://localhost:4000/items";
const USERS_URL = "http://localhost:4000/users";
export default class ProfileContainer extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  componentDidMount() {
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
      // .filter(item => {
      //   item.itemowner.fullname = itemsList.find(
      //     item => item.itemowner.fullname === "Mandi Wise"
      //   );
      // });

      this.setState({ items: combined });
    });
  }
  render() {
    return <Profile list={this.state.items} />;
  }
}
