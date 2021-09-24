import React from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import BreedList from "./BreedList";

const Header = ({ link, gotoBtn, heading, breed }) => {
  return (
    <div>
      <div className="header-div">
        <h1 className="fonnt">Dog breed</h1>
        <SearchBar heading={heading} />
        <Link to={link}>
          <button className="goto">{gotoBtn}</button>
        </Link>
      </div>
      <BreedList breed={breed} />
    </div>
  );
};
export default Header;
