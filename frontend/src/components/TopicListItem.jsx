import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  title: "Nature",
};

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item" onClick={() => {props.setTopic(props.topic.id)}}>
      <span>{props.topic.title}</span>
    </div>
  );
};

export default TopicListItem;
