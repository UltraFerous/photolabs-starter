import { React, useState } from 'react';
import '../styles/HomeRoute.scss';

import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import photos from '../mocks/photos';

const HomeRoute = function() {
  const [liked, setLiked] = useState([]);
  const [alert, setAlert] = useState(0);


  const setLikedPicture = function(likedPicture, input) {
    const likedArr = [...liked];
    const index = likedArr.findIndex((pic) => pic.id === likedPicture.id);
    if (index === -1 && input === 1) {
      likedArr.push(likedPicture);
      setAlertNote(1);
    }
    if (input === 0) {
      likedArr.splice(index, 1);
    }
    setLiked(likedArr);
  };

  const setAlertNote = function(input) {
    (input === 0 && setAlert(0));
    (input === 1 && setAlert(1));
    return alert;
  };



  return (
    <div className='home-route'>
      <TopNavigation setAlertNote={setAlertNote} />
      <PhotoList photos={photos} setLikedPicture={setLikedPicture} />
    </div>
  );
};

export default HomeRoute;