import React from 'react';
import birdsData from '../../bird-data';

import './query-item.css';

const QueryItem = () => {
  const sound = birdsData[0][0].audio;

  return (
    <div className="query-item">
      <p>Item name</p>
      <figure>
      <figcaption>Listen to the sound:</figcaption>
        <audio
          controls
          src={ sound }>
            Your browser does not support the
            <code>audio</code> element.
        </audio>
      </figure>
    </div>
  );
};

export default QueryItem;