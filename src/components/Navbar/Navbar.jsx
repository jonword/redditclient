import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, fetchSearchResults } from "../Posts/postsSlice";
import { FaReddit } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import "./navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.posts.searchTerm);
  const posts = useSelector((state) => state.posts.posts);

  const onHandleSubmit = (e) => {
    document.querySelectorAll("input").value = "";
    e.preventDefault();
    dispatch(fetchSearchResults(searchTerm));
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <FaReddit className="logo-icon" />
          <p>
            R<span>ea</span>ddit
          </p>
        </div>
        <form className="search" onSubmit={onHandleSubmit}>
          <input
            type="text"
            placeholder="Search"
            aria-label="Search posts"
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
          <button type="submit" aria-label="Search" onSubmit={onHandleSubmit}>
            <HiOutlineSearch />
          </button>
        </form>
      </header>
    </>
  );
};

export default Navbar;
