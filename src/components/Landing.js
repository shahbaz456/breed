import React from "react";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="land">
      <h1 className="heading">Welcome to Breeds</h1>
      <Link to="/home">
        <button className="goto">--Go to Homepage--</button>
      </Link>
    </div>
  );
};

export default Landing;
