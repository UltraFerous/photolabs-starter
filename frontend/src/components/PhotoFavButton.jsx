import React, { useCallback, useState } from 'react';
import useApplicationData from '../hooks/useApplicationData.js';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {
    state,
    changeLike,
  } = useApplicationData(props);

  return (
    <div className="photo-list__fav-icon" onClick={() => { changeLike(); }} >
      <div className="photo-list__fav-icon-svg">
        {state.like === 0 && <div><FavIcon displayAlert={false} selected={false} /></div>}
        {state.like === 1 && <div><FavIcon displayAlert={false} selected={true} /></div>}
      </div>
    </div>
  );
}

export default PhotoFavButton;