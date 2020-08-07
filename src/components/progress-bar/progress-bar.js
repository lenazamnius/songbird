import React from 'react';
import { Box, Paper, makeStyles }  from '@material-ui/core';
import clsx from 'clsx';
// import './progress-bar.css';

const useStyles = makeStyles((theme) => ({
  progressBar: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    padding: '.5rem .75rem',
    textAlign: 'center',
  },
  itemActive: {
    color: '#3f51b5',
    fontWeight: 'bold',
  }
}));

const ProgressBar = ({ level, data }) => {
  const classes = useStyles();

  const barItems = data.map((item, idx) => {
    const { id, category } = item;

    return (
      <Box 
        key={id} 
        className={
          clsx(
            classes.item, 
            { [classes.itemActive]: idx === level }
          )}> 
        {category} 
      </Box>  
    );
  });

  return (
    <Paper className={classes.progressBar}>
      { barItems }
    </Paper>
  );
};

export default ProgressBar;
