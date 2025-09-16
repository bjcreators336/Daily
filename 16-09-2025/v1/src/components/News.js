import React, { Component } from "react";
import Newsitem from "./Newsitem";

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
    let url =
      "https://newsapi.org/v2/everything?q=uae&from=2025-09-10&to=2025-09-10&sortBy=popularity&apiKey=289fcc6823da40a0b6bb8867addb4d1d&pageSize=20&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
  }
  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalArticles / 20)) {
      // If there are no more articles to load, do not increment the page
      console.log("No more articles to load");
      return;
    } else {
      this.setState({ page: this.state.page + 1 });
      let url = `https://newsapi.org/v2/everything?q=uae&from=2025-09-10&to=2025-09-10&sortBy=popularity&apiKey=289fcc6823da40a0b6bb8867addb4d1d&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        totalArticles: parsedData.totalResults,
      });
    }
  };
  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    let url = `https://newsapi.org/v2/everything?q=uae&from=2025-09-10&to=2025-09-10&sortBy=popularity&apiKey=289fcc6823da40a0b6bb8867addb4d1d&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
        <div className="container my-5">
          <h2>News World - Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={
                      element && element.title ? element.title.slice(0, 50) : ""
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
          <button className="btn btn-dark  mb-3" onClick={this.handleNextClick}>
            Load More &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
