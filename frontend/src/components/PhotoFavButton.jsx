import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton() {
  const [like, setLike] = useState(0);

  const changeLike = function() {
    (like === 0 ? setLike(1) : setLike(0));
    return;
  };

  return (
    <div className="photo-list__fav-icon" onClick={changeLike}>
      <div className="photo-list__fav-icon-svg">
        {like === 0 && <div><FavIcon displayAlert={false} selected={false} /></div>}
        {like === 1 && <div><FavIcon displayAlert={false} selected={true} /></div>}
      </div>
    </div>
  );
}

export default PhotoFavButton;;