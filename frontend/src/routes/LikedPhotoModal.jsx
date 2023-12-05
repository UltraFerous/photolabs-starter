import { React, useEffect } from 'react';

import '../styles/LikedPhotoModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const likedPhotoModal = (props) => {

  return (
    <div className="liked-details-modal">
      <button className="liked-details-modal__close-button" onClick={() => props.setLikedDisplay(false)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="liked-details-modal__image" >
        <PhotoList photos={props.likedPhotoData} liked={props.likedPhotoData} setLikedPicture={props.setLikedPicture} openPreview={props.openPreview} />
      </div>
    </div>
  );
};

export default likedPhotoModal;
