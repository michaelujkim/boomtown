const fetch = require("node-fetch");

module.exports = app => {
  const ITEMS_URL = `http://localhost:4000/items`;
  const USERS_URL = `http://localhost:4000/users`;
  return {
    getSharedItems(id) {
      return fetch(`${ITEMS_URL}/?itemowner=${id}`).then(r => r.json());
    },
    getItems() {
      return fetch(ITEMS_URL).then(r => r.json());
    },

    getUsers() {
      return fetch(USERS_URL).then(r => r.json());
    },

    getItem(id) {
      return fetch(`${ITEMS_URL}/${id}`).then(r => r.json());
    },

    getUser(id) {
      return fetch(`${USERS_URL}/${id}`).then(r => r.json());
    }
  };
};
