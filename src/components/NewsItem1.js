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
            src="https://images.unsplash.com/photo-1582943303378-39b87c0d9e07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmFrZWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
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
