// import Player from '@vimeo/player';
// import { throttle } from 'lodash';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// player.on(
//   'timeupdate',
//   throttle(e => {
//     localStorage.setItem('videoplayer-current-time', e.seconds);
//   }, 1000)
// );

// player
//   .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
//   .catch(function (error) {
//     console.error(error);
//   });
import Vimeo from '@vimeo/player';
import _throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

const player = new Vimeo('vimeo-player');

player.on('loaded', () => {
  const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY) || 0;
  player.setCurrentTime(currentTime);
});

player.on(
  'timeupdate',
  _throttle(({ seconds }) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, seconds);
  }, 1000)
);