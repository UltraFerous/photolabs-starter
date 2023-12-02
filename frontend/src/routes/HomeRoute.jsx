import { React, useState } from 'react';
import '../styles/HomeRoute.scss';
import useApplicationData from '../hooks/useApplicationData.js'
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import photos from '../mocks/photos';

const HomeRoute = function() {
  
  const {
    setLikedPicture,
    setAlertNote,
  } = useApplicationData();

  return (
    <div className='home-route'>
      <TopNavigation setAlertNote={setAlertNote} />
      <PhotoList photos={photos} setLikedPicture={setLikedPicture} />
    </div>
  );
};

export default HomeRoute;