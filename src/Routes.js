import React from "react";
import { Provider } from "react-redux";
import configureStore from "../src/store/configureStore";
import App from "./App";
import { LayoutDashboard } from "./component/Layout";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const PrivateRoute = ({ component, isAuthenticated, ...rest }) => {
  console.log('rest', rest)
  return (
    // eslint-disable-line
    <Route
      {...rest}
      render={props =>
        false ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location } // eslint-disable-line
            }}
          />
        )
      }
    />
  );
};

const store = configureStore();

class BasicExample extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/login" component={App} />
              <PrivateRoute path="/" component={LayoutDashboard} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default BasicExample;
