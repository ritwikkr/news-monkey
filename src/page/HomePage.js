import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsPallate from "../components/NewsPallate";
import Wrapper from "../style/HomePageStyle";
import Loading from "../components/Loading";

function HomePage() {
  // State
  const [news, setNews] = useState([]);

  // Calling API
  useEffect(() => {
    fetchApi();
  }, []);

  // Functions
  async function fetchApi() {
    try {
      const URI = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=76d80e17311e41278bbd2d4ab587f2ae`;
      const { data } = await axios.get(URI);
      setNews(data.articles);
    } catch (error) {
      console.log(error);
    }
  }

  if (news.length === 0) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <NewsPallate news={news} />
    </Wrapper>
  );
}

export default HomePage;
