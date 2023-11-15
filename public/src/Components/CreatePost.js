import React, { Component, useState } from "react";
import axios from "axios";
import "../css/createPost.css";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      single_input: null,
      username: "",
      date: "",
      description: "",
      tag: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "file") {
      this.setState({ [name]: event.target.files[0] });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = async (event) => {
    const createPostForm = document.getElementById("createPostForm");
    event.preventDefault();
    const formData = new FormData(createPostForm);
    try {
      console.log(formData);
      const response = await axios.post("http://localhost:4000/createpost", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload successful:", response);
      // Reset the form fields if needed
      this.setState({
        single_input: null,
        username: "",
        date: "",
        description: "",
        tag: "",
      });
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  render() {
    return (
      <>
        <div className="creatPostContainer">
          <form className="createPostForm" id="createPostForm" onSubmit={this.handleSubmit}>
            <input
              required
              type="file"
              name="single_input"
              id="inputt"
              accept="image/jpeg, image/png, image/jpg"
              className="form-control myinput"
              onChange={this.handleInputChange}
            />

            <div className="inputBox remove_phone">
              <span>User Name</span>
              <input
                type="text"
                name="username"
                value={'username'}
                readOnly
              />
            </div>
            <div className="inputBox remove_phone">
              <span>Date</span>
              <input
                type="text"
                name="date"
                value={Date.now()}
                readOnly
              />
            </div>

            <label id="labell" htmlFor="inputt" className="submit-btn">
              UPLOAD PHOTO
            </label>

            <div className="inputBox">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                className="card-number-input"
                name="description"
                placeholder="Enter Post Description"
                value={this.state.description}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="tag">Tag</label>
              <input
                type="text"
                id="tag"
                name="tag"
                placeholder="Enter a Tag"
                className="cvv-input"
                value={this.state.tag}
                onChange={this.handleInputChange}
              />
            </div>

            <button type="submit" className="submit-btn">
              ADD NEW POST
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default MyComponent;
