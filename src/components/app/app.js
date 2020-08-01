import React from 'react';

import Header from '../header';
import ProgressBar from '../progress-bar';
import QueryItem from '../query-item';
import OptionsList from '../options-list';
import ItemDetails from '../item-details';
import BtnNext from '../btn-next';

import './app.css';

const App = () => {
  return (
    <div className="my-app">
      <Header />
      <ProgressBar />
      <QueryItem />
      <OptionsList />
      <ItemDetails />
      <BtnNext />
    </div>
  );
};

export default App;
