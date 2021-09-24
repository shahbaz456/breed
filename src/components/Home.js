import React, { useEffect, useState } from "react";
import "../App.css";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import ImageContainer from "./ImageContainer";
import { useLocation } from "react-router-dom";
import Modal1 from "./Modal";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  let query = useQuery();
  const dispatch = useDispatch();
  const location = useLocation();
  const [BSelect, setBSelect] = useState(true);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [currentIndex, setcurrentIndex] = useState();

  const breedImages = useSelector((state) => state.data.breedImages);
  const breeds = useSelector((state) => state.data.breeds);

  const dogBreed = async () => {
    let response = await fetch(`https://dog.ceo/api/breeds/list/all`, {
      method: "GET",
    });
    const data = await response.json();
    console.log("breed Getting", data);
    dispatch({ type: "LIST_BREEDS", payload: Object.keys(data.message) });
  };

  useEffect(
    () => {
      dogBreed();
      console.log("1");
    },
    // eslint-disable-next-line

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  useEffect(
    () => {
      if (BSelect && query.get("breed") && breeds.length > 0) {
        setBSelect(false);
        dispatch({ type: "FILTER", payload: query.get("breed") });
        console.log("breed filter useEffect", BSelect);
      }
      if (location.pathname === "/home") {
        // console.log('am i at home');
      }
      console.log("2");
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [breeds]
  );
  const dogImg = async (breed) => {
    let response = await fetch(`https://dog.ceo/api/breed/${breed}/images`, {
      method: "GET",
    });
    const data = await response.json();
    console.log("ImageGetting", data);
    dispatch({ type: "GET_BREED_IMAGES", payload: data.message });
  };
  useEffect(() => {
    const fetchImage = async () => {
      if (query.get("breed")) {
        await dogImg(query.get("breed"));
        console.log("3");
      }
      if (query.get("modal") === "true") {
        setModal(true);
      }
    };
    fetchImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.get("breed")]);
  useEffect(() => {
    if (query.get("breed")) {
      dispatch({ type: "CURRENT-BREED", payload: query.get("breed") });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header
        heading="Home"
        link="/favourite"
        gotoBtn="Favourites"
        breed={breeds}
      />
      <div className="image-div">
        {breedImages.length
          ? breedImages.map((item, index) => (
              <ImageContainer
                item={item}
                index={index}
                toggle={toggle}
                setcurrentIndex={setcurrentIndex}
              />
            ))
          : null}
        <Modal1 modal={modal} toggle={toggle} currentIndex={currentIndex} />
      </div>
    </div>
  );
};

export default Home;
