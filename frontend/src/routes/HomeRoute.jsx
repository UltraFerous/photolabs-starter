import { React, useEffect, useState } from 'react';
import '../styles/HomeRoute.scss';
import useApplicationData from '../hooks/useApplicationData.js'
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';

import photos from '../mocks/photos';

const HomeRoute = function() {
  
  const {
    setLikedPicture,
    setAlertNote,
    setTopic,
    openPreview,
    closePreview,
    state
  } = useApplicationData();

  return (
    <div className='home-route'>
      <TopNavigation setAlertNote={setAlertNote} alert={state.alert} topics={state.topicData} setTopic={setTopic}/>
      <PhotoList photos={state.photoData} setLikedPicture={setLikedPicture} openPreview={openPreview}/>
      {state.open !== null && <PhotoDetailsModal photoData = {state.photoData} openPreview={openPreview} item={state.open} setLikedPicture={setLikedPicture} closePreview={closePreview} />}
    </div>
  );
};

export default HomeRoute;