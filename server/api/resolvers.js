const fetch = require("node-fetch");

const postgresResource = require("./resources/postgresResource");
const firebaseResource = require("./resources/firebaseResource");
module.exports = ({
  postgresResource: {
    getItem,
    getItems,
    createItem,
    getTags,
    updateItems,
    getSharedItems
  },
  firebaseResource: { getUser, getUsers }
}) => {
  //resolvers go here

  return {
    Query: {
      items(root, args, context) {
        //get me some items
        return context.loaders.getItems.load(args);
      },
      user(root, { id }) {
        // get me a user
        return getUser(id);
      },
      users() {
        return getUsers();
      },
      item(root, { id }) {
        return getItem(id);
      }
    },
    Item: {
      itemowner(item) {
        return getUser(item.itemowner);
      },
      borrower(item) {
        if (item.borrower) {
          return getUser(item.borrower);
        } else {
          return null;
        }
      },
      tags(item) {
        return getTags(item.id);
      }
    },
    User: {
      shareditems(user) {
        return getSharedItems(user.id);
      },
      items: (user, args, context) => {
        return context.loaders.getAllItems.load(user.id);
      }
    },

    Mutation: {
      createNewItem(root, { newItem }) {
        console.log(newItem);
        return createItem(newItem);
      },
      updateItem(root, { currentItem: { title } }) {
        return { title };
      },
      borrowItem(root, { currentItem: { title } }) {
        return { title };
      }
    }
  };
};
