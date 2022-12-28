import { useState } from "react";
import HomePage from "./page/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouritePage from "./page/FavouritePage";
import Navbar from "./components/Navbar";

function App() {
  const [search, setSearch] = useState("");
  function searchText(text) {
    setSearch(text);
  }
  return (
    <BrowserRouter>
      <Navbar propUp={searchText} />
      <Routes>
        <Route path="/" element={<HomePage searchHandler={search} />} />
        <Route path="/favourites" element={<FavouritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
