import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = { article: [], loading: false, page: 1 };
  }

  async componentDidMount() {
    console.log("async componentDidMount");
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2474c53b6e1542f4bbef8cdd99f6c444";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ article: parsedData.articles });
  }

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2474c53b6e1542f4bbef8cdd99f6c444&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ article: parsedData.articles });
  };

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2474c53b6e1542f4bbef8cdd99f6c444&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ article: parsedData.articles });
  };

  render() {
    return (
      <>
        <div className="container mt-3">
          <h2>Top Headlines.</h2>
          <div className="row">
            {this.state.article.map((element) => {
              return (
                <div className="col" key={element.url}>
                  <NewsItem
                    title={
                      element.title.length > 45
                        ? element.title.slice(0, 45)
                        : element.title
                    }
                    description={
                      element.description
                        ? element.description.length > 50
                          ? element.description.slice(0, 50)
                          : element.description
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
              );
            })}
          </div>

          <div className="container text-center">
            <div
              className="btn-group me-2"
              role="group"
              aria-label="Second group"
            >
              <button
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-secondary mx-1 bg-dark"
                onClick={this.handlePrevClick}
              >
                &#8592; Prev
              </button>
              <button
                disabled={this.state.page >= 5}
                type="button"
                className="btn btn-secondary mx-1 bg-dark"
                onClick={this.handleNextClick}
              >
                Next &#8594;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
