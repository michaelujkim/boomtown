const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers"); // Next step!
const typeDefs = `
input TagInput{
  id:ID
  title: String
}
input AddItemInput{
  imageurl: String
  title: String
  description: String
  tags:[TagInput]
}
input UpdateItemInput{
  imageurl: String
  title: String
  description: String
  tags:[TagInput]
}
input BorrowItemInput{
  borrower: [UserInput]
}
input UserInput{
  id:ID
  fullname: String
}


type Tag{
  id:ID
  title: String
}
type User{
  id: ID
  email: String
  fullname: String
  shareditems: [Item]
  imageurl: String
  
}  

type Item{
  id: ID
  title: String
  itemowner: User
  borrower: User
  imageurl: String
  description: String
  available: Boolean
  tags:[Tag]
  }
 
  type Mutation{
    addItem(newItem:AddItemInput):Item
    updateItem(currentItem:UpdateItemInput):Item
    borrowItem(currentItem:BorrowItemInput):Item
  }

  type Query{
    items:[Item]
    user(id:ID): User
    users:[User]
    item(id:ID): Item
  }
`;
module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
