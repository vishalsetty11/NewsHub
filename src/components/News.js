import React, { Component } from "react";
import NewsItem1 from "./NewsItem1";
import NewsItem2 from "./NewsItem2";
import NewsItem3 from "./NewsItem3";
import NewsItem4 from "./NewsItem4";

export class News extends Component {
  render() {
    return (
      <>
        <div className="container mt-3">
          <h3>Top Headlines.</h3>
          {/* Row 1 */}
          <div className="row">
            <div className="col">
              <NewsItem1 />
            </div>
            <div className="col">
              <NewsItem2 />
            </div>
            <div className="col">
              <NewsItem3 />
            </div>
          </div>

          {/* Row2 */}
          <div className="row">
            <div className="col">
              <NewsItem4 />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
