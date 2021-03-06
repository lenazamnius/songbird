import React from 'react';
import { Grid, Paper, Typography, Box, Divider, makeStyles }  from '@material-ui/core';
import Player from '../audio-player';
import './item-details.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: '100%',
    padding: theme.spacing(2),
    margin: 'auto',
  },
  wrapper: {
    height: '100%',
  },
  image: {
    width: '200px',
    height: 'auto',
  },
  img: {
    margin: 'auto',
    display: 'block',
    width: '200px',
    height: '155px',
    objectFit: 'cover',
    borderRadius: '5px',
  },
}));


const ItemDetails = ({ curItemDetailsObj }) => {
  const classes = useStyles();

  if (typeof curItemDetailsObj === 'string' ) {
    return (
    <Paper className={classes.paper}>
      <Box className={classes.wrapper}>
       {curItemDetailsObj}
      </Box>
    </Paper>
    );
  } else {
    return (
      <Paper className={classes.paper}>
        <Grid container spacing={2} className={classes.wrapper}>
          <Grid item>
            <Box className={classes.image}>
              <img className={classes.img} alt="complex" src={curItemDetailsObj.image} />
            </Box>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {curItemDetailsObj.name}
                </Typography>
                <Divider />
                <Typography gutterBottom variant="subtitle1">
                  {curItemDetailsObj.species}
                </Typography>
                <Divider />
                <Player url={curItemDetailsObj.audio} />
                {/* <figure className='player-wrapper'>
                  <audio className='player'
                    controls
                    src={ curItemDetailsObj.audio }> Your browser does not support the <code>audio</code> element.
                  </audio>
                </figure> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="subtitle1">
              {curItemDetailsObj.description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
};

export default ItemDetails;
