import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const LikeButton = ({ item }) => {
  const dispatch = useDispatch();

  const favImage = useSelector((state) => state.data.favImage);
  const currentBreed = useSelector((state) => state.data.currentBreed);

  return (
    <>
      <button
        className="heart"
        onClick={() => {
          if (favImage.includes(item)) {
            dispatch({ type: "DISLIKE", payload: { item, currentBreed } });
            toast.warn("Remove from favourite");

            console.log("item disliked", item, currentBreed);
          } else {
            dispatch({ type: "LIKE", payload: { item, currentBreed } });
            toast.success("Add to favourite");

            console.log("item liked", item, currentBreed);
          }
        }}
      >
        <BsFillHeartFill
          className={favImage.includes(item) ? "not-like liked" : "not-like"}
        />
      </button>
      {/* <button
      className="heart" onClick={()=>{
        dispatch({type:'DISLIKE', payload: item})
      }}>

      <IoHeartDislike />
    </button> */}
    </>
  );
};

export default LikeButton;
