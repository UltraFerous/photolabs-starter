import React, { useCallback, useState } from 'react';
import useApplicationData from '../hooks/useApplicationData.js'
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {
    like,
    changeLike,
  } = useApplicationData(props);

  return (
    <div className="photo-list__fav-icon" onClick={() => {changeLike();}} >
      <div className="photo-list__fav-icon-svg">
        {like === 0 && <div><FavIcon displayAlert={false} selected={false} /></div>}
        {like === 1 && <div><FavIcon displayAlert={false} selected={true} /></div>}
      </div>
    </div>
  );
}

export default PhotoFavButton;