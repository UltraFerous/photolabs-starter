import {React, useEffect} from 'react';
import TopicList from 'components/TopicList';
import FavIcon from './FavIcon';
import topics from '../mocks/topics';
import '../styles/TopNavigationBar.scss';
import useApplicationData from '../hooks/useApplicationData.js';

const TopNavigation = (props) => {

  const {
    setAlertNote,
  } = useApplicationData(props);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      {props.alert === 0 && <div onClick={() => props.setAlertNote(0)}><FavIcon displayAlert={false} selected={true} /></div>}
      {props.alert === 1 && <div onClick={() => props.setAlertNote(0)}><FavIcon displayAlert={true} selected={true} /></div>}
    </div>
  );
};

export default TopNavigation;