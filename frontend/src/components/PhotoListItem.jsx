import { React, useState } from "react";
import PhotoFavButton from './PhotoFavButton';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  const [open, setOpen] = useState(false);

  const openPreview = function(input) {
    input ? setOpen(true) : setOpen(false);
    return open;
  };

  return (
    <div className="photo-list__item">
      {open && <PhotoDetailsModal openPreview={openPreview} item={props.item} setLikedPicture={props.setLikedPicture} />}
      <PhotoFavButton item={props.item} setLikedPicture={props.setLikedPicture} />
      <img className="photo-list__image" src={props.item.urls.regular} alt="" onClick={() => { openPreview(true); }} />
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
