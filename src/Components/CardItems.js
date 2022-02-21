import "./Card.css";
import React from "react";

const CardItems = ({ post, index }) => {
  return (
    <>
      <div className="cardContainer">
        <div className="item1">
          <h2>#{index + 1}</h2>
          <img src={post.owner.avatar_url} />
          <h3>{post.name}</h3>
        </div>
        <div className="item2">
          <p>
            <i className="iconpost fa-solid fa-user"></i> {post.name}
          </p>
          <p>
            <i className="iconstar fa-solid fa-star"></i>{" "}
            {post.stargazers_count} stars
          </p>
          <p>
            <i className="iconfork fa-solid fa-code-fork"></i>{" "}
            {post.forks_count} forks
          </p>
          <p>
            <i className="iconissue fa-solid fa-triangle-exclamation"></i>{" "}
            {post.open_issues_count} open issues
          </p>
        </div>
      </div>
    </>
  );
};

export default CardItems;
