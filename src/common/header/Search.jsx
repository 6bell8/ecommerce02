import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Search = () => {
  window.addEventListener("scroll", function () {
    const search = this.document.querySelector(".search");
    search.classList.toggle("active", this.window.scrolly > 100);
  });
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt="" />
          </div>
          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="검색해보세요!"></input>
            <span>카테고리</span>
          </div>

          <div className="icon f_flex width">
            <i className="fa fa-user icon_circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>0</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
