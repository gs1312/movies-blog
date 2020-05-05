import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class DeleteBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const id = this.state.id;
    axios
      .delete(`http://localhost:5000/${id}`)
      .then((res) => {
        window.alert(res.data.message);
        window.alert("Dont Forget To Logout if not doing further Opertaions");
        this.setState({
          redirect: true,
        });
      })
      .catch((err) => {
        console.log(err);
        window.alert("Please check your Blog Id and Try Again!!!");
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
      this.props.history.push("/admin");
    }
    window.alert(
      "You need Blog Id to delete a perticular Blog (Get it From Your Blog Page)."
    );
  }
  render() {
    if (this.state.redirect === true) return <Redirect to="/user" />;
    return (
      <div>
        <div className="delete-panel">
          <form>
            <input
              type="id"
              className="form-text"
              placeholder="Enter Blog ID"
              name="id"
              // value={this.state.id}
              onChange={(e) => {
                this.setState({ id: e.target.value });
              }}
            />
            <button id="button" onClick={this.handleSubmit}>
              Delete Blog
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default DeleteBlog;
