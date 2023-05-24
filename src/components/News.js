import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <>
        <div className="container mt-3">
          <h3>Top Headlines.</h3>
          {/* Row 1 */}
          <div className="row">
            <div className="col">
              <NewsItem />
            </div>
            <div className="col">
              <NewsItem />
            </div>
            <div className="col">
              <NewsItem />
            </div>
          </div>

          {/* Row2 */}
          <div className="row">
            <div className="col">
              <NewsItem />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
