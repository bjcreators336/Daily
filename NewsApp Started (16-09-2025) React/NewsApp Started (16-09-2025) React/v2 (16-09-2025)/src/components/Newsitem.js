import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    const { title, description, imageurl, newsUrl } = this.props;
    // Use public folder for fallback image
    const fallbackImage = "/BJ-Creators-New-1.png";
    return (
      <>
        <div className="my-3">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={imageurl ? imageurl : fallbackImage}
              className="card-img-top"
              alt="news"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = fallbackImage;
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a
                rel="noreferrer"
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-dark"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        {/* <div style={{ marginRight: '2em' }}></div> */}
      </>
    );
  }
}

export default Newsitem;
