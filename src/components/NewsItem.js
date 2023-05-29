import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsurl } = this.props;
    return (
      <>
        <div
          className="card my-4"
          style={{ width: "18rem", backgroundColor: "#2e2e2e", color: "#fff" }}
        >
          <img
            src={imageUrl}
            rel="noreferrer"
            className="card-img-top"
            alt="Img : missing (NULL)"
            height={"250px"}
            width={"250px"}
          />
          <div className="card-body">
            <h4 className="card-title">{title}...</h4>
            <p className="card-text">{description}...</p>
            <a
              href={newsurl}
              className="btn btn-sm btn-dark"
              target="_blank"
              rel="noreferrer"
            >
              For more information.
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
