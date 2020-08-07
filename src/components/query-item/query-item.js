import React from 'react';
import { Grid, Paper, Typography, Box, Divider }  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import defaultImg from '../../assets/images/default-img.jpg';
// import wronSound from '../../assets/images/default-img.png';

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
    marginRight: '20px',
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
              <figure className='player-wrapper'>
                <audio className='player'
                  controls
                  src={ curLevelQueryItemObj.audio }> Your browser does not support the <code>audio</code> element.
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
