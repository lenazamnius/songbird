// async function getData() {
//   const rawResponse = await fetch('https://cors-anywhere.herokuapp.com/https://www.xeno-canto.org/api/2/recordings?query=alauda+arvensis');
//   const content = await rawResponse.json();

//   console.log(content.recordings);
// }

// async function getBirdImg() {
//   const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e85226ff1f16a2f9bcbcf32ced341298&tag_mode=all&extras=url_m&format=json&nojsoncallback&tags=circus+cyaneus';
//   const response = await fetch(url);
//   const images = await response.json();

//   console.log(images.photos);
// }

// getBirdImg();

// getData();

  // plugins: ['react'],
  // extends: [
  //   'airbnb-base',
  //   'plugin:prettier/recommended',
  //   'plugin:react/recommended',
  //   'plugin:react-hooks/recommended',
  // ],

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(<App />,
  document.getElementById('root'));
