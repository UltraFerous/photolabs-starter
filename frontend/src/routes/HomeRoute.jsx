import { React, useEffect, useState } from 'react';
import '../styles/HomeRoute.scss';
import useApplicationData from '../hooks/useApplicationData.js';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import LikedPhotoModal from './LikedPhotoModal';

import photos from '../mocks/photos';

const HomeRoute = function() {

  const {
    setLikedPicture,
    setAlertNote,
    setTopic,
    openPreview,
    closePreview,
    displayLikedPhotos,
    setLikedDisplay,
    changeLike,
    likedChecker,
    state
  } = useApplicationData();

  return (
    <div className='home-route'>
      <TopNavigation setAlertNote={setAlertNote} alert={state.alert} topics={state.topicData} setTopic={setTopic} openPreview={openPreview} liked={state.liked} displayLikedPhotos={displayLikedPhotos} likedDisplay={state.likedDisplay} setLikedDisplay={setLikedDisplay} />
      <PhotoList likedChecker={likedChecker} changeLike={changeLike} photos={state.photoData} setLikedPicture={setLikedPicture} openPreview={openPreview} liked={state.liked} like={state.like} />
      {state.open !== null && <PhotoDetailsModal likedChecker={likedChecker} changeLike={changeLike} liked={state.liked} photoData={state.photoData} openPreview={openPreview} item={state.open} setLikedPicture={setLikedPicture} closePreview={closePreview} />}
      {state.likedDisplay && <LikedPhotoModal likedChecker={likedChecker} changeLike={changeLike} likedPhotoData={state.liked} likedDisplay={state.likedDisplay} setLikedDisplay={setLikedDisplay} displayLikedPhotos={displayLikedPhotos} setLikedPicture={setLikedPicture} openPreview={openPreview} />}
    </div>
  );
};

export default HomeRoute;