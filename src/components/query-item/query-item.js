import React from 'react';
import { Grid, Paper, Typography, Box, Divider, makeStyles }  from '@material-ui/core';
import Player from '../audio-player';
import defaultImg from '../../assets/images/default-img.jpg';

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


const QueryItem = ({ guessed, curLevelQueryItemObj }) => {
  const classes = useStyles();
  const itemName = guessed ? curLevelQueryItemObj.name : '*************';
  const itemImage = guessed ? curLevelQueryItemObj.image : defaultImg;


  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <Box className={classes.image}>
            <img className={classes.img} alt="complex" src={itemImage} />
          </Box>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {itemName}
              </Typography>
              <Divider />
              <Player url={curLevelQueryItemObj.audio} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default QueryItem;
