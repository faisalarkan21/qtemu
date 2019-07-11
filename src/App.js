import { Form, Icon, Input, Button, Checkbox } from "antd";
import React from "react";
import "./App.css";
import { Row, Col } from "antd";
// import { Dashboard } from "./Dashboard";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "zzzzzzzzzzzzzzzzzzzzzzzzzzz"
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

  handleSubmit = () => {
    console.log("this.state.username", this.state.username);
    if (this.state.username === "" || this.state.password === "") {
      alert("Harap isi username dan password");
    } else {
      alert(
        `Username = ${this.state.username}, Password = ${this.state.password}`
      );
    }
  };

  render() {
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