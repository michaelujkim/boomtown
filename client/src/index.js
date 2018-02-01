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

import { ApolloProvider } from "react-apollo";
import client from "./config/apolloClient";
import PrivateRoute from "./components/PrivateRoute";
import { firebaseAuth } from "./config/firebaseconfig";
import { updateAuthState, userLoading } from "./redux/modules/auth";
let gotProfile = false;
store.subscribe(() => {
  const values = store.getState();
  if (!values.authenticated !== "LOADING_USER" && !gotProfile) {
    gotProfile = true;
    store.dispatch(userLoading(false));
  }
});
firebaseAuth.onAuthStateChanged(user => {
  console.log("checking for user");
  if (user) {
    store.dispatch(updateAuthState(user));
  } else {
    store.dispatch(updateAuthState(false));
  }
});

const NotFound = () => <h1>Whoops. You broke the internet again.</h1>;
const Boomtown = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div>
          <Router>
            <div>
              <Layout>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/login" component={Login} />

                  <PrivateRoute exact path="/items" component={Items} />

                  <PrivateRoute
                    exact
                    path="/profile/:userid"
                    component={Profile}
                  />
                  <PrivateRoute exact path="/share" component={Share} />
                  <Route exact path="/404" component={NotFound} />
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
