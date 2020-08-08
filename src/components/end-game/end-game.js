import React from 'react';
import { Box, Paper, Button }  from '@material-ui/core';
import { createFinalMessage } from '../../helpers';
import './end-game.css';


const EndGameMessage = ({ score, handleClickRestartGameBtn }) => {
  return (
    <Paper className='end-game'>
      <Box>
        Your score is {score} points out of 30. {createFinalMessage(score)}
      </Box>
      <Button variant="outlined" color="primary" className='btn' onClick={() => handleClickRestartGameBtn()}>
        Restart Game
      </Button>
    </Paper>
  );
};

export default EndGameMessage;
