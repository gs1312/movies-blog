import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
    this.deleteCookie = this.deleteCookie.bind(this);
  }

  deleteCookie() {
    const expires = new Date(Date.now() - 1 * 864e5).toUTCString();
    document.cookie =
      "token" +
      "=" +
      encodeURIComponent("") +
      "; expires=" +
      expires +
      "; path=" +
      "/";
    window.alert("Logged Out!!!");
    this.setState({
      redirect: true,
    });
  }
  componentDidMount() {
    const getCookie = (name) => {
      return document.cookie.split("; ").reduce((r, v) => {
        const parts = v.split("=");
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
      }, "");
    };

    if (!getCookie("token")) {
      window.alert("Login In First");
      this.props.history.push("/login");
    }
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <div className="menu">
          <Link to="/user/create">
            <button id="button">Create Blog</button>
          </Link>
          <Link to="/user/delete">
            <button id="button">Delete Blog</button>
          </Link>

          <button id="button" onClick={this.deleteCookie}>
            Log Out
          </button>
        </div>
      </div>
    );
  }
}

export default Menu;
