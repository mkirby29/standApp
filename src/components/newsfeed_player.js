import React from 'react';
import AudioPlayer from 'react-modular-audio-player';
import '../assets/css/newsfeed_player.css';
import play from '../assets/images/play-circle.svg';
import pause from '../assets/images/pause-circle.svg';
import audioTest from '../assets/audio/betterdays.mp3';
import photo from '../assets/images/avatars/10kevinSoccer.jpg'

// // var Sound = require('react-native-sound');
// Sound.setCategory('Playback');

let playlist = [
    {
        src: audioTest,
        title: 'Song Title',
        artist: 'Royalty Free',
        avatar: photo
    }
]

let rearrangedPlayer = [
    {
      className: "beatles",
      style: { cursor: "pointer" },
      innerComponents: [
        {
          type: "play",
          style: {
            width: "100%",
            justifyContent: "center",
            filter: "invert(100%)",
            opacity: "0.4"
          }
        }
      ]
    }
  ]

export default () => {
    return (
        <AudioPlayer
            audioFiles={playlist}
            rearrange={rearrangedPlayer}
            playerWidth="100%"
            iconSize="4rem"
            //change images to match title
            playIcon={play}
            playHoverIcon={play}
            pauseIcon={pause}
            pauseHoverIcon={pause}

        />
    )
}