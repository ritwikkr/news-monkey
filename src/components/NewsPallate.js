import React from "react";
import Wrapper from "../style/NewsPallateStyle";
import NewsCard from "./NewsCard";

function NewsPallate({ news }) {
  console.log(news);
  const favList = JSON.parse(localStorage.getItem("favList")) || [];
  function setToLocalStorage(news) {
    // favList.push(news);
    const rit = favList.find((item) => item.title === news.title);
    console.log(rit);
    localStorage.setItem("favList", JSON.stringify(favList));
  }
  return (
    <Wrapper>
      {news.map((item, index) => (
        <NewsCard {...item} propUp={setToLocalStorage} key={index} />
      ))}
    </Wrapper>
  );
}

export default NewsPallate;
