import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spiner from "./Spiner";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    this.update(1);
  }
  async update(page) {
    let url = `https://newsapi.org/v2/everything?q=world&from=2025-09-10&to=2025-09-10&sortBy=popularity&apiKey=289fcc6823da40a0b6bb8867addb4d1d&pageSize=${this.props.pageSize}&page=${page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles ? parsedData.articles : [],
      totalArticles: parsedData.totalResults,
      loading: false,
    });
  }
  handleNextClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      () => {
        this.update(this.state.page);
      }
    );
  };
  handlePrevClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }),
      () => {
        this.update(this.state.page);
      }
    );
  };

  render() {
    return (
      <>
        <div className="container my-5">
          <h2>News World - Top Headlines</h2>
          {this.state.loading && <Spiner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={
                        element && element.title
                          ? element.title.slice(0, 50)
                          : ""
                      }
                      description={
                        element && element.description
                          ? element.description.slice(0, 100)
                          : ""
                      }
                      imageurl={
                        element && element.urlToImage ? element.urlToImage : ""
                      }
                      newsUrl={element && element.url ? element.url : ""}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark mx-3 mb-3"
            onClick={this.handlePrevClick}
          >
            &larr; Load Previous
          </button>
          <button
            disabled={
              this.state.page >=
              Math.ceil(this.state.totalArticles / this.props.pageSize)
            }
            className="btn btn-dark  mb-3"
            onClick={this.handleNextClick}
          >
            Load More &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
