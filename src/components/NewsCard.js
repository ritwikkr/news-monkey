import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../style/NewsCardStyle";
import Date from "./Date";

function NewsCard({
  author,
  title,
  content,
  publishedAt,
  url,
  urlToImage,
  propUp,
}) {
  const [isFav, setIsFav] = useState(false);
  function setToFavHandler() {
    propUp({ title, author, content, publishedAt, url, urlToImage });
    setIsFav(!isFav);
  }
  return (
    <Wrapper>
      <a href={url} target="_blank" rel="noreferrer">
        <div className="card-title">
          <h1>{title.substr(0, 50) + "..."}</h1>
          <p className="date">
            <Date date={publishedAt} />
          </p>
          {console.log(isFav)}
          <i
            className={`${isFav ? `fa-solid` : `fa-regular`} fa-heart`}
            onClick={() => setToFavHandler()}
          ></i>
        </div>
        <div className="card-body">
          <div className="image">
            <img src={urlToImage} alt="news" />
          </div>
          <div className="content">
            <p>{content}</p>
            <p className="author">-By {author}</p>
          </div>
        </div>
      </a>
    </Wrapper>
  );
}

export default NewsCard;
