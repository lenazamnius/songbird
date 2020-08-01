// async function getData() {
//   const rawResponse = await fetch('https://cors-anywhere.herokuapp.com/https://www.xeno-canto.org/api/2/recordings?query=alauda+arvensis');
//   const content = await rawResponse.json();

//   console.log(content.recordings);
// }

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

// import birdsData from './bird-data';
import App from './components/app';

ReactDOM.render(<App />,
  document.getElementById('root'));
