import React, { Component } from "react";
import "./Card.css";
import CardItems from "./CardItems";
import axios from "axios";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: "all",
      post: [],
      errorMsg: "",
    };
    this.fetchProfile = this.fetchProfile.bind(this);
    this.updateStateAndData = this.updateStateAndData.bind(this);
  }

  fetchProfile() {
    axios
      .get(
        `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.language}&sort=stars&order=desc&type=Repositories`
      )
      .then((response) => {
        // console.log(response.data.items);
        this.setState({ post: response.data.items });
      })
      .catch((error) => {
        // console.log(error);
        this.setState({ errorMsg: "Error retreiving data... " });
      });
  }
  componentDidMount() {
    this.fetchProfile();
  }

  updateStateAndData(event) {
    // console.log(event.target.value);
    switch (event.target.value) {
      case "all":
        this.setState({
          language: "all",
        });
        break;
      case "javascript":
        this.setState({
          language: "javascript",
        });
        break;
      case "ruby":
        this.setState({
          language: "ruby",
        });
        break;
      case "java":
        this.setState({
          language: "java",
        });
        break;
      case "css":
        this.setState({
          language: "css",
        });
        break;

      default:
        this.setState({
          language: "python",
        });
        break;
    }

    this.fetchProfile();
  }

  render() {
    const { post, errorMsg } = this.state;
    return (
      <section className="completecontainer">
        <div className="navContainer">
          <button
            onClick={this.updateStateAndData}
            value="all"
            className="active"
          >
            All
          </button>
          <button onClick={this.updateStateAndData} value="javascript">
            JavaScript
          </button>
          <button onClick={this.updateStateAndData} value="ruby">
            Ruby
          </button>
          <button onClick={this.updateStateAndData} value="java">
            Java
          </button>
          <button onClick={this.updateStateAndData} value="css">
            CSS
          </button>
          <button onClick={this.updateStateAndData} value="python">
            Python
          </button>
        </div>

        <div className="container">
          <div className="box">
            {errorMsg ? (
              <p className="errormsg">{errorMsg}</p>
            ) : post.length ? (
              post.map((post, index) => (
                <CardItems key={post.id} index={index} post={post} />
              ))
            ) : (
              <p className="loading"> Loadding... </p>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default NavBar;
