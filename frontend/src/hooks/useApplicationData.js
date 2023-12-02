import React, { useState, useReducer } from 'react';

const useApplicationData = function(props) {

  const STATES = {
    alert: 0,
    open: false,
    liked: [],
    like: 0
  };

  const ACTIONS = {
    LIKE_PHOTO_ADDED: 'LIKE_PHOTO_ADDED',
    LIKE_PHOTO_REMOVED: 'LIKE_PHOTO_REMOVED',
    ALERT_TRUE: 'ALERT_TRUE',
    ALERT_FALSE: 'ALERT_FALSE',
    OPEN_TRUE: 'OPEN_TRUE',
    OPEN_FALSE: 'OPEN_FALSE',
    LIKE_TRUE: 'LIKE_TRUE',
    LIKE_FALSE: 'LIKE_FALSE'
  };

  const reducer = function(state, action) {
    if (action.type === "LIKED_PHOTO_ADDED") {
      return { ...state, liked: action.payload };
    }
    if (action.type === "LIKED_PHOTO_REMOVED") {
      return { ...state, liked: action.payload };
    }
    if (action.type === "ALERT_TRUE") {
      console.log("AELET")
      return { ...state, alert: 1 };
    }
    if (action.type === "ALERT_FALSE") {
      return { ...state, alert: 0 };
    }
    if (action.type === "OPEN_TRUE") {
      return { ...state, open: true };
    }
    if (action.type === "OPEN_FALSE") {
      return { ...state, open: false };
    }
    if (action.type === "LIKE_TRUE") {
      return { ...state, like: 1 };
    }
    if (action.type === "LIKE_FALSE") {
      return { ...state, like: 0 };
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, STATES);

  const setLikedPicture = function(likedPicture, input) {
    const likedArr = [...state.liked];
    const index = likedArr.findIndex((pic) => pic.id === likedPicture.id);

    if (index === -1 && input === 1) {
      likedArr.push(likedPicture);
      dispatch({ type: "LIKED_PHOTO_ADDED", payload: likedArr });
      setAlertNote(1);
    }
    if (input === 0) {
      likedArr.splice(index, 1);
      dispatch({ type: "LIKED_PHOTO_REMOVED", payload: likedArr });
    }
    return state.liked;
  };

  const setPhotoSelected = function(input) {
    input ? dispatch({ type: "OPEN_TRUE" }) : dispatch({ type: "OPEN_FALSE" });
    return open;
  };

  const setAlertNote = function(input) {
    (input === 0 && dispatch({ type: "ALERT_FALSE" }));
    (input === 1 && dispatch({ type: "ALERT_TRUE" }));
    return state.alert;
  };

  const changeLike = function() {
    (state.like === 0 ? props.setLikedPicture(props.item, 1) : props.setLikedPicture(props.item, 0));
    (state.like === 0 ? dispatch({ type: "LIKE_TRUE" }) : dispatch({ type: "LIKE_FALSE" }));
    return;
  };

  const openPreview = function(input) {
    input ? dispatch({ type: "OPEN_TRUE" }) : dispatch({ type: "OPEN_FALSE" });
    return open;
  };

  return { setLikedPicture, setPhotoSelected, setAlertNote, changeLike, openPreview, state };
};

export default useApplicationData;