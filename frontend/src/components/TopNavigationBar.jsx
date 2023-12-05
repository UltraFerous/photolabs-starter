import { React, useEffect } from 'react';
import TopicList from 'components/TopicList';
import FavIcon from './FavIcon';
import '../styles/TopNavigationBar.scss';
import useApplicationData from '../hooks/useApplicationData.js';


const TopNavigation = (props) => {

  const {
    state,
  } = useApplicationData();



  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => { props.setLikedDisplay(false); props.setTopic(-1); }}>PhotoLabs</span>
      <TopicList topics={props.topics} setTopic={props.setTopic} />
      {props.alert === 0 && <div onClick={() => { props.setAlertNote(0); props.setLikedDisplay(true);}}><FavIcon displayAlert={false} selected={false} /></div>}
      {props.alert === 1 && <div onClick={() => { props.setAlertNote(0); props.setLikedDisplay(true);}}><FavIcon displayAlert={true} selected={true} /></div>}
    </div>
  );
};

export default TopNavigation;