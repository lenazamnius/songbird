import React from 'react';
import birdsData from '../../bird-data';
import { Grid, Paper, Typography, Box, Divider }  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './query-item.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '10px',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
  },
  image: {
    width: 200,
    height: 'auto',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '5px',
  },
}));


const QueryItem = () => {
  const classes = useStyles();
  const item = birdsData[2].data[0];

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <Box className={classes.image}>
            <img className={classes.img} alt="complex" src={item.image} />
          </Box>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {item.name}
              </Typography>
              <Divider />
              <figure className='player-wrapper'>
                <audio className='player'
                  controls
                  src={ item.audio }> Your browser does not support the <code>audio</code> element.
                </audio>
              </figure>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default QueryItem;
