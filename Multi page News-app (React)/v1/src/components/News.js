import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    console.log("Hello! Im a constructor from News.js");
    this.state = {
      articles: this.articles,
      loding: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=uae&from=2025-09-10&to=2025-09-10&sortBy=popularity&apiKey=289fcc6823da40a0b6bb8867addb4d1d";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    console.log(parsedData);
  }

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
      </>
    );
  }
}

export default News;
