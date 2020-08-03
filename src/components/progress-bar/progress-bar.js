import React from 'react';
import birdsData from '../../bird-data';

import { Box,Paper }  from '@material-ui/core';


import './progress-bar.css';

const ProgressBar = () => {
  const data = birdsData;

  const barItems = data.map((item) => {
    const { id, category } = item;

    return (
      <Box key={id} className='item'> { category } </Box>
    );
  });

  return (
    <Paper className='progress-bar'>
      { barItems }
    </Paper>
  );
};

export default ProgressBar;
