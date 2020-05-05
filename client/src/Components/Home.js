import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async (params) => {
    try {
      const data = await axios.get("http://localhost:5000/");
      setblogs(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="head">Movies Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <div className="blog-container" key={blog._id}>
            <div className="details">
              <div>
                <h1>{blog.name}</h1>
                <h4>{blog.releaseDate}</h4>
                <h4>
                  Genre: {blog.genre} | Duration: {blog.duration} | Rating:{" "}
                  {blog.rating} | Language: {blog.language}
                </h4>
                <p>
                  Description:
                  <br />
                  {blog.description}
                </p>
              </div>
              <div>
                <h4>Cast: {blog.cast} </h4>
                <h4>Director: {blog.director} </h4>
                <h6>Blog Id: {blog._id} </h6>
                <button id="button">
                  <a href={blog.trailerLink} target="_blank">
                    Watch Trailer
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Home;
