/* eslint-disable */
import React from "react";
import "../../css/header.css";
import "../../css/layout.css";
import Search from "./Search";
import Navbar from "./Navbar";
import Head from "./Head";

export const Header = () => {
  return (
    <>
      <Head />
      <Search />
      <Navbar />
    </>
  );
};

export default Header;
