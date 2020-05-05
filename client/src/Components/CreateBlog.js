import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class CreateBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      releaseDate: "",
      genre: "",
      language: "",
      duration: "",
      rating: "",
      description: "",
      cast: "",
      director: "",
      trailerLink: "",
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.releaseDate]: e.target.value,
      [e.target.genre]: e.target.value,
      [e.target.language]: e.target.value,
      [e.target.duration]: e.target.value,
      [e.target.rating]: e.target.value,
      [e.target.description]: e.target.value,
      [e.target.cast]: e.target.value,
      [e.target.director]: e.target.value,
      [e.target.trailerLink]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const name = this.state.name;
    const releaseDate = this.state.releaseDate;
    const genre = this.state.genre;
    const language = this.state.language;
    const duration = this.state.duration;
    const rating = this.state.rating;
    const description = this.state.description;
    const cast = this.state.cast;
    const director = this.state.director;
    const trailerLink = this.state.trailerLink;

    const data = {
      name,
      releaseDate,
      genre,
      language,
      duration,
      rating,
      description,
      cast,
      director,
      trailerLink,
    };
    axios
      .post("http://localhost:5000/", data)
      .then((res) => {
        window.alert(res.data.message);
        window.alert("Dont Forget To Logout if not doing further Opertaions");
        this.setState({
          redirect: true,
        });
      })
      .catch((err) => {
        console.log(err);
        window.alert("Failed!!!");
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
    const h = new Headers();
    h.append("auth-token", getCookie("token"));
  }
  render() {
    if (this.state.redirect === true) return <Redirect to="/user" />;
    return (
      <div>
        <div className="create-blog">
          <h1>Create Blog</h1>
          <div className="create-blog-details">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                className="form-text"
                placeholder="Name of the Movie"
                name="name"
                // value={this.state.name}
                onChange={this.handleChange.bind(this)}
              />
              <input
                type="text"
                className="form-text"
                placeholder="Release Date"
                name="releaseDate"
                // value={this.state.releaseDate}
                onChange={this.handleChange.bind(this)}
              />
              <input
                type="text"
                className="form-text"
                placeholder="Genre"
                name="genre"
                // value={this.state.genre}
                onChange={this.handleChange.bind(this)}
              />
              <input
                type="text"
                className="form-text"
                placeholder="Language"
                name="language"
                // value={this.state.language}
                onChange={this.handleChange.bind(this)}
              />
              <input
                type="text"
                className="form-text"
                placeholder="Duration"
                name="duration"
                // value={this.state.duration}
                onChange={this.handleChange.bind(this)}
              />
              <input
                type="text"
                className="form-text"
                placeholder="Rating"
                name="rating"
                // value={this.state.rating}
                onChange={this.handleChange.bind(this)}
              />
              <input
                type="text"
                className="form-text"
                placeholder="Description"
                name="description"
                // value={this.state.description}
                onChange={this.handleChange.bind(this)}
              />
              <input
                type="text"
                className="form-text"
                placeholder="Cast"
                name="cast"
                // value={this.state.cast}
                onChange={this.handleChange.bind(this)}
              />
              <input
                type="text"
                className="form-text"
                placeholder="Director"
                name="director"
                // value={this.state.director}
                onChange={this.handleChange.bind(this)}
              />
              <input
                type="text"
                className="form-text"
                placeholder="Trailer Link"
                name="trailerLink"
                // value={this.state.trailerLink}
                onChange={this.handleChange.bind(this)}
              />

              <button
                type="submit"
                id="button"
                className="submit"
                onClick={this.handleSubmit}
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBlog;
