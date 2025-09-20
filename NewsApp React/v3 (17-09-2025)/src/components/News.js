import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spiner from "./Spiner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      articlesWithImages: [],
      articlesWithoutImages: [],
      loading: false,
      page: 1,
      totalArticles: 0,
    };
  }

  async componentDidMount() {
    this.update(this.state.page);
  }

  async update(page) {
    let url1 = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=530672f38032486398e4342185ff5f65&pageSize=${this.props.pageSize}&page=${page}`;

    let url2 = `https://gnews.io/api/v4/top-headlines?country=${this.props.country}&topic=${this.props.category}&token=9ad3ee5a401b7d075d591a339f2e8584&lang=en&max=${this.props.pageSize}&page=${page}`;

    this.setState({ loading: true });

    try {
      let data = await fetch(url1);
      let parsedData = await data.json();

      if (!parsedData.articles || parsedData.articles.length === 0) {
        let data2 = await fetch(url2);
        let parsedData2 = await data2.json();

        this.handleArticles(parsedData2.articles || [], parsedData2.totalArticles || parsedData2.totalResults || 0, page);
      } else {
        this.handleArticles(parsedData.articles || [], parsedData.totalResults || 0, page);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }

  handleArticles(articles, total, page) {
    let withImages = articles.filter((a) => a.urlToImage || a.image);
    let withoutImages = articles.filter((a) => !a.urlToImage && !a.image);

    this.setState({
      articles: articles,
      articlesWithImages: withImages,
      articlesWithoutImages: withoutImages,
      totalArticles: total,
      loading: false,
      page: page,
    });
  }

  handleNextClick = () => {
    if (this.state.page < Math.ceil(this.state.totalArticles / this.props.pageSize)) {
      this.update(this.state.page + 1);
    }
  };

  handlePrevClick = () => {
    if (this.state.page > 1) {
      this.update(this.state.page - 1);
    }
  };

  render() {
    return (
      <>
        <div className="container my-5">
          <h2 className="text-center" style={{ margin: "35px 0px" }}>News World - Top Headlines</h2>
          {this.state.loading && <Spiner />}

          {/* ✅ Sirf images wali news */}
          <div className="row">
            {!this.state.loading &&
              this.state.articlesWithImages.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element?.title ? element.title.slice(0, 50) : ""}
                      description={
                        element?.description ? element.description.slice(0, 100) : ""
                      }
                      imageurl={element?.urlToImage || element?.image || ""}
                      newsUrl={element?.url || ""}
                    />
                  </div>
                );
              })}
          </div>

          {/* ✅ Leftovers Section */}
          {this.state.articlesWithoutImages.length > 0 && (
            <div className="text-center my-5">
              <h3>📌 Leftovers (No Images)</h3>
              {this.state.articlesWithoutImages.map((element) => {
                return (
                  <div key={element.url} className="my-3 p-3 border rounded">
                    <h5>{element?.title}</h5>
                    <p>{element?.description || "No description available"}</p>
                    <a href={element?.url} target="_blank" rel="noreferrer">
                      Read More
                    </a>
                  </div>
                );
              })}
            </div>
          )}
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
              this.state.page >= Math.ceil(this.state.totalArticles / this.props.pageSize)
            }
            className="btn btn-dark mb-3"
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
