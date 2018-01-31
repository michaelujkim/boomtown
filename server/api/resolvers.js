const fetch = require("node-fetch");
const jsonResource = require("./resources/jsonResource");
const postgresResource = require("./resources/postgresResource");
const firebaseResource = require("./resources/firebaseResource");
module.exports = ({
  jsonResource: { getUsers, getUser, getSharedItems },
  postgresResource: { getItem, getItems, createItems, getTags, updateItems }
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
        return sharedItems(`?itemowner=${user.id}`);
      },
      items: (user, args, context) => {
        return context.loaders.getAllItems.load(user.id);
      }
    },

    Mutation: {
      addItem(root, { newItem: { title } }) {
        // save this new item in the database!
        // must return new item type, thanks to our mutation schema
        return { title };
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
