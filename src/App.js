import { Form, Icon, Input, Button, Checkbox } from "antd";
import React from "react";
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Row, Col } from "antd";

import "./App.css";
import { postLogin } from "./actions/auth";
// import { Dashboard } from "./Dashboard";
 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChange = e => {
    const {
      target: { value, id }
    } = e;
    console.log("e", e);
    console.log("value", value);
    this.setState({
      [id]: value
    });
  };

  componentWillReceiveProps(nextProps){
    console.log('nextprops', nextProps)

    const {dataAuth: {isValid}} = nextProps
    if (this.props !== nextProps){
      console.log('isValid', isValid)
      if (isValid){
        this.props.history.push('/')
      }
    }
  }

  handleSubmit = () => {

    this.props.dispatch(postLogin({username: this.state.username, password: this.state.password}))

   };

  render() {

    console.log('this.props', this.props)
    return (
      <Row
        type="flex"
        justify="space-around"
        align="middle"
        className="container"
      >
        <Col>
          <h1>Login</h1>
          <Form className="login-form">
            <Form.Item>
              <Input
                value={this.state.username}
                id="username"
                onChange={this.onChange}
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item>
              <Input
                value={this.state.password}
                id="password"
                onChange={this.onChange}
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Checkbox>Remember me</Checkbox>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={this.handleSubmit}
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
    dataAuth: state.auth.data,
    logOut: state.logOut,
  };
}

export default withRouter(connect(mapStateToProps)(App));
