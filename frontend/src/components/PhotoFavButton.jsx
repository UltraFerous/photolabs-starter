import React, { useCallback, useEffect, useState } from 'react';
import useApplicationData from '../hooks/useApplicationData.js';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  return (
    <div className="photo-list__fav-icon" onClick={() => { props.changeLike(props.item); }} >
      <div className="photo-list__fav-icon-svg">
        {props.likedChecker(props.item.id, props.liked) === false && <FavIcon displayAlert={false} selected={false} />}
        {props.likedChecker(props.item.id, props.liked) === true && <FavIcon displayAlert={false} selected={true} />}
      </div>
    </div>
  );
}

export default PhotoFavButton;