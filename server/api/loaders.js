const DataLoader = require("dataloader");

const itemLoader = function({ postgresResource: { getItems } }) {
  return {
    getItems: new DataLoader(ids => Promise.all(ids.map(id => getItems(id))))
    // other data loaders go here...
  };
};

module.exports = itemLoader;
