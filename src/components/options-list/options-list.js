import React from 'react';
import { Box, Paper, makeStyles }  from '@material-ui/core';
import clsx from 'clsx';

import './options-list.css';

const useStyles = makeStyles((theme) => ({
  optionDot: {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    marginRight: '15px',
    marginLeft: '10px',
    borderRadius: '5px',
  },
  default: {
    backgroundColor: '#3f51b5',
  },
  guessed: {
    backgroundColor: '#4caf50',
  },
  notGuessed: {
    backgroundColor: '#dc004e',
  }
}));

const OptionsList = ({ optionsListArr, handleClickOptionsListItem }) => {
  const classes = useStyles();

  const barItems = optionsListArr.map((item, itemIndex) => {
    const { id, name, clicked } = item;

    return (
      <Box key={id} className='option' onClick={() => handleClickOptionsListItem(id, itemIndex)}>
        <Box component='span' className={
          clsx(
            classes.optionDot, classes.default,
            {
              [classes.guessed]: clicked === 'guessed',
              [classes.notGuessed]: clicked === 'notGuessed',
            }
          )}/>
        { name } 
      </Box>
    );
  });

  return (
    <Paper>
      { barItems }
    </Paper>
  );
};

export default OptionsList;
