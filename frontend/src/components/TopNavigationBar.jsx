import React from 'react';
import TopicList from 'components/TopicList';
import FavIcon from './FavIcon';
import topics from '../mocks/topics';
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      {props.setAlertNote(2) === 0 && <div onClick={() => props.setAlertNote(0)}><FavIcon displayAlert={false} selected={true} /></div>}
      {props.setAlertNote(2) === 1 && <div onClick={() => props.setAlertNote(0)}><FavIcon displayAlert={true} selected={true} /></div>}
    </div>
  );
};

export default TopNavigation;