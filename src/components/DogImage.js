import React from "react";
import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";

const DogImage = ({ imgSrc, toggle, currentIndex, cI }) => {
  const history = useHistory();
  const location = useLocation();
  const currentBreed = useSelector((state) => state.data.currentBreed);

  return (
    <img
      src={imgSrc}
      alt="dog"
      onClick={() => {
        if (location.pathname === "/home") {
          history.push(
            `/home?breed=${currentBreed}&modal=true&idx=${currentIndex}`
          );
        } else {
          history.push(
            `/favourite?breed=${currentBreed}&modal=true&idx=${currentIndex}`
          );
        }
        cI(currentIndex);
        toggle();
      }}
    />
  );
};

export default DogImage;
