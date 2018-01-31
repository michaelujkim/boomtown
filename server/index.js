const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const typeDefs = require("./api/schema"); // Next step!
const app = express();
const initResolvers = require("./api/resolvers");
const config = require("./config");
const { makeExecutableSchema } = require("graphql-tools");

config(app);
const jsonResource = require("./api/resources/jsonResource")(app);
const postgresResource = require("./api/resources/postgresResource");
const firebaseResource = require("./api/resources/firebaseResource")(app);
postgresResource(app).then(pgResource => start(pgResource));
function start(postgresResource) {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers: initResolvers({
      jsonResource,
      postgresResource
    })
  });

  const createLoaders = require("./api/loaders");

  app.use("*", cors());
  // Where we will send all of our GraphQL requests
  app.use(
    "/graphql",
    bodyParser.json(),
    graphqlExpress({
      schema,
      context: { loaders: createLoaders({ postgresResource }) }
    })
  );
  // A route for accessing the GraphiQL tool
  app.use(
    "/graphiql",
    graphiqlExpress({
      endpointURL: "/graphql"
    })
  );
  app.listen(app.get("PORT"), () =>
    console.log(
      `GraphQL is now running on http://localhost:${app.get("PORT")}/graphql`
    )
  );
}
