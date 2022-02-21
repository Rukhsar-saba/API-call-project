import React, { Component } from "react";
import "./Card.css";
// import axios from "axios";
import CardItems from "./CardItems";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      errorMsg: "",
    };
  }

  // componentDidMount(props) {
  // fetchProfile(props) {
  //   axios
  //     .get(
  //       `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.props.language}&sort=stars&order=desc&type=Repositories`
  //     )
  //     .then((response) => {
  //       // console.log(response.data.items);
  //       this.setState({ post: response.data.items });
  //     })
  //     .catch((error) => {
  //       // console.log(error);
  //       this.setState({ errorMsg: "Error retreiving data... " });
  //     });
  // }
  // componentDidMount() {
  //   this.fetchProfile();
  // }

  render() {
    const { post, errorMsg } = this.state;
    return (
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
    );
  }
}

export default Card;
