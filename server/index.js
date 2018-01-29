const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const schema = require("./api/schema"); // Next step!
const app = express();
const GQL_PORT = process.env.PORT; // Where does this come from?
const createLoaders = require("./api/loaders");
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({
    schema,
    context: { loaders: createLoaders() }
  })
);
app.use("*", cors());
// Where we will send all of our GraphQL requests
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
// A route for accessing the GraphiQL tool
app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);
app.listen(GQL_PORT, () =>
  console.log(`GraphQL is now running on http://localhost:${GQL_PORT}/graphql`)
);
