import React, { useCallback, useState } from 'react';

const useApplicationData = function() {
  return ({
    state: {
      like: useState(0),
      open: useState(false),
      alert: useState([])
    },
    onPhotoSelect: function(likedPicture, input) {
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
    },
    setPhotoSelected: function(input) {
      input ? setOpen(true) : setOpen(false);
      return open;
    },
    onClosePhotoDetailsModal: function(input) {
      input ? setOpen(true) : setOpen(false);
      return open;
    }
  });
};