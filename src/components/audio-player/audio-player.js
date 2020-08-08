import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './audio-player.css';

const Player = ({ url}) => (

  <AudioPlayer
    src={url}
    autoPlay={false}
    autoPlayAfterSrcChange={false}
    showJumpControls={false}
    customProgressBarSection={
      [
        RHAP_UI.MAIN_CONTROLS,
        RHAP_UI.PROGRESS_BAR,
      ]
    }
    customControlsSection={
      [
        RHAP_UI.CURRENT_TIME,
        RHAP_UI.VOLUME_CONTROLS,
        RHAP_UI.DURATION,
      ]
    }
  />
);

export default Player;
