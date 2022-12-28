import React from "react";
import Wrapper from "../style/NewsPallateStyle";
import NewsCard from "./NewsCard";

function NewsPallate({ news, propDown }) {
  // const favList = JSON.parse(localStorage.getItem("favList")) || [];
  function setToLocalStorage(news) {
    // favList.push(news);
    // const rit = favList.find((item) => item.title === news.title);
    // localStorage.setItem("favList", JSON.stringify(favList));
  }
  const rit = news.filter((item) => {
    return item.title.toLowerCase().includes(propDown.toLowerCase());
  });
  if (rit.length === 0) {
    return (
      <Wrapper>
        <div className="none">
          <img
            src="https://us.123rf.com/450wm/sabelskaya/sabelskaya1812/sabelskaya181200435/sabelskaya181200435.jpg?ver=6"
            alt="not found"
          />
          <p>No such news found...</p>
          <p>
            <small>Hit Refresh</small>
          </p>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {rit.map((item, index) => (
        <NewsCard {...item} propUp={setToLocalStorage} key={index} />
      ))}
    </Wrapper>
  );
}

export default NewsPallate;
