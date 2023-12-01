import React from "react";
import PhotoFavButton from './PhotoFavButton';


import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className="photo-list__item">
      <PhotoFavButton item={props.item} setLikedPicture={props.setLikedPicture} />
      <img className="photo-list__image" src={props.item.urls.regular} alt="" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.item.user.profile} alt="" />
        <div>
        <div className="photo-list__user-info"> {props.item.user.username} </div>
        <div className="photo-list__user-location"> {props.item.location.city} {props.item.location.country} </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
