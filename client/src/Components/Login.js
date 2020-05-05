import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.password]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    const data = {
      email,
      password,
    };
    axios
      .post("http://localhost:5000/login", data)
      .then((res) => {
        window.alert(res.data.message);
        const token = res.data.token;
        setCookie("token", token);
        this.setState({
          redirect: true,
        });
      })
      .catch((err) => {
        window.alert("Login Failed!!!");
        console.log(err);
      });

    const setCookie = (name, value, days = 7, path = "/") => {
      const expires = new Date(Date.now() + days * 864e5).toUTCString();
      document.cookie =
        name +
        "=" +
        encodeURIComponent(value) +
        "; expires=" +
        expires +
        "; path=" +
        path;
    };
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/user" />;
    }
    return (
      <div>
        <div className="container">
          <h2 id="title">Log In</h2>
          <div className="items">
            <form onSubmit={this.handleChange}>
              <input
                type="text"
                id="form-text"
                name="name"
                style={{ display: "none" }}
                value={this.state.name}
                placeholder="Full Name(Optional)"
                onChange={this.handleChange.bind(this)}
              />
              <input
                type="email"
                id="form-text"
                name="email"
                value={this.state.email}
                placeholder="Email"
                onChange={this.handleChange.bind(this)}
              />
              <input
                type="password"
                id="form-password"
                name="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.handleChange.bind(this)}
              />

              <button id="button" onClick={this.handleSubmit}>
                Log In
              </button>
            </form>
            <h2 id="text"> New User?</h2>
            <Link to="/admin/signup">
              <button id="button"> Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
