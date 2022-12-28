import React from "react";
import Wrapper from "../style/NavbarStyle";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Wrapper>
      <div className="logo">
        <Link to={"/"}>
          <h1>
            News <span>monkey.</span>
          </h1>
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search your news..." />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      {/* <div className="favourite">
        <Link to={"/favourites"}>
          <i className="fa-solid fa-heart"></i>
        </Link>
      </div> */}
    </Wrapper>
  );
}

export default Navbar;
