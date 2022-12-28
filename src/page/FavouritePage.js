import React, { useEffect, useState } from "react";
import NewsPallate from "../components/NewsPallate";
import Wrapper from "../style/FavouritePageStyle";

function FavouritePage() {
  const [favNewsList, setFavNewsList] = useState([]);
  useEffect(() => {
    const favList = JSON.parse(localStorage.getItem("favList"));
    setFavNewsList(favList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (favNewsList.length === 0) {
    return <h1>Wait...</h1>;
  }
  return (
    <Wrapper>
      <div className="fav-content">
        <div className="title">
          <h1>Your Favourites...</h1>
        </div>
        {console.log(favNewsList)}
        {/* {favNewsList.map((news) => ( */}
        <NewsPallate news={favNewsList} />
        {/* ))} */}
      </div>
    </Wrapper>
  );
}

export default FavouritePage;
