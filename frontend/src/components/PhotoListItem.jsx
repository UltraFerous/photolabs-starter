import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={props.sampleDataForPhotoListItem.imageSource} alt="" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.sampleDataForPhotoListItem.profile} alt="" />
        <div>
        <div className="photo-list__user-info"> {props.sampleDataForPhotoListItem.username} </div>
        <div className="photo-list__user-location"> {props.sampleDataForPhotoListItem.location.city} {props.sampleDataForPhotoListItem.location.country} </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
