import React from "react";
import Carousel from "react-elastic-carousel";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

const BreedList = ({ breed }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const breedFilter = useSelector((state) => state.data.breedFilter);
  const currentBreed = useSelector((state) => state.data.currentBreed);
  const likeBreed = useSelector((state) => state.data.likeBreed);
  let newMap = breed;

  if (location.pathname === "/home") {
    newMap = breedFilter;
  } else if (likeBreed && likeBreed.length) {
    newMap = [];
    likeBreed &&
      likeBreed.forEach(
        (item) =>
          !newMap.includes(item.currentBreed) && newMap.push(item.currentBreed)
      );
  } else {
    newMap = breed;
  }

  const breakPoints = [{ width: 800, itemsToScroll: 3, itemsToShow: 7 }];

  return (
    <div className="listed-wrap">
      {breed && breed.length > 0 && (
        <div className="dog-breed-btn">
          <Carousel breakPoints={breakPoints} pagination={false}>
            {newMap.length > 0 &&
              newMap.map((element, index) => (
                <button
                  key={element}
                  className={
                    location.pathname === "home" && currentBreed === element
                      ? "all-btnn active-buttn"
                      : "all-btn"
                  }
                  style={{ marginRight: 12 }}
                  onClick={() => {
                    history.push(`/home?breed=${element}`);
                    dispatch({ type: "CURRENT-BREED", payload: element });
                  }}
                >
                  {element}
                </button>
              ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default BreedList;
