import React, { useState } from 'react';

const useApplicationData = function(props) {

  const [alert, setAlert] = useState(0);
  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState([]);
  const [like, setLike] = useState(0);

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

  const setPhotoSelected = function(input) {
    input ? setOpen(true) : setOpen(false);
    return open;
  };

  const setAlertNote = function(input) {
    (input === 0 && setAlert(0));
    (input === 1 && setAlert(1));
    return alert;
  };

  const changeLike = function() {
    (like === 0 ? props.setLikedPicture(props.item, 1) : props.setLikedPicture(props.item, 0));
    (like === 0 ? setLike(1) : setLike(0));
    return;
  };

  const openPreview = function(input) {
    input ? setOpen(true) : setOpen(false);
    return open;
  };

  return { alert, open, liked, like, setLikedPicture, setPhotoSelected, setAlertNote, changeLike, openPreview };
};

export default useApplicationData;