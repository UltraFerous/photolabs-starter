import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const similarPhotosIds = Object.values(props.item.similar_photos);
  const similarPhotos = similarPhotosIds.map((photo) => {
    const photoObj = props.photoData.find(ph => ph.id === photo.id);
    return photoObj;
  })

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => props.closePreview()}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton item={props.item} liked={props.liked} setLikedPicture={props.setLikedPicture} />
        <img className="photo-details-modal__image" src={props.item.urls.full} alt="" />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={props.item.user.profile} alt="" />
          <div>
            <div className="photo-details-modal__photographer-info"> {props.item.user.username} </div>
            <div className="photo-details-modal__photographer-location"> {props.item.location.city} {props.item.location.country} </div>
          </div>
        </div>

        <div className="photo-details-modal__header"> SIMILAR PHOTOS </div>

        <div className="photo-details-modal__image" >
          <PhotoList photos={similarPhotos} liked={props.liked} setLikedPicture={props.setLikedPicture} openPreview = {props.openPreview}/>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
