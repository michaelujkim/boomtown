import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import muiTheme from "./config/theme";
import Login from "./containers/Login";
import Layout from "./components/Layout";
import Profile from "./containers/Profile";
import Share from "./containers/Share/Share";
import Items from "./containers/Items";
import HeaderBar from "./components/HeaderBar";
import { ApolloProvider } from "react-apollo";
import client from "./config/apolloClient";

const NotFound = () => <h1>Whoops. You broke the internet again.</h1>;
const Boomtown = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div>
          <Router>
            <div>
              <HeaderBar />
              <Layout>
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/" component={Items} />
                  <Route exact path="/profile/:userid" component={Profile} />
                  <Route exact path="/share" component={Share} />
                  {/* <Route exact path="/404" component={NotFound} /> */}
                </Switch>
              </Layout>
            </div>
          </Router>
        </div>
      </Provider>
    </ApolloProvider>
  </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById("root"));
registerServiceWorker();
