import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => { props.openPreview(false); console.log(props.item); }}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton item={props.item} setLikedPicture={props.setLikedPicture} />
        <img className="photo-details-modal__image" src={props.item.urls.full} alt="" />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={props.item.user.profile} alt="" />
          <div>
            <div className="photo-details-modal__photographer-info"> {props.item.user.username} </div>
            <div className="photo-details-modal__photographer-location"> {props.item.location.city} {props.item.location.country} </div>
          </div>
        </div>

        <div className="photo-details-modal__header"> SIMILAR PHOTOS </div>

        <div className="photo-details-modal__image" onClick={() => console.log("PHOTOLIST:", Object.values(props.item.similar_photos))}>
          <PhotoList photos={Object.values(props.item.similar_photos)} setLikedPicture={props.setLikedPicture}/>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
