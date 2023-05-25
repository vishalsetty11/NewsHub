import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    return (
      <>
        <div
          className="card my-4"
          style={{ width: "18rem", backgroundColor: "#2e2e2e", color: "#fff" }}
        >
          <img
            src="https://picsum.photos/200/300?random=1"
            className="card-img-top"
            alt="Image missing"
            height={"400px"}
            width={"300px"}
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-dark" target="_blank">
              For more information.
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
