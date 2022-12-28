import HomePage from "./page/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouritePage from "./page/FavouritePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
