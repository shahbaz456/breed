import React, { useState } from "react";
import Header from "./Header";
import ImageContainer from "./ImageContainer";
import { useSelector } from "react-redux";
import Modal1 from "./Modal";

const Fav = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [currentIndex, setcurrentIndex] = useState();
  const favImage = useSelector((state) => state.data.favImage);
  const likeBreed = useSelector((state) => state.data.likeBreed);

  return (
    <div>
      <Header
        link={`/home`}
        gotoBtn="Homepage"
        heading="Favourite"
        breed={likeBreed}
      />
      <div className="image-div">
        {favImage.length
          ? favImage.map((item, index) => (
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

export default Fav;
