import React from 'react';
import { Box, Paper, Button }  from '@material-ui/core';
import { createFinalMessage } from '../../helpers';
import './end-game.css';


const EndGameMessage = ({ score, handleClickRestartGameBtn }) => {
  // let message;
  // if (score < 10) message = 'Do not worry. You will be more fortunate next time. Train and you will become better';
  // if (score >= 10 && score < 20) message = 'Not bad! But you need to train harder to recognize all birdsongs the first time.';
  // if (score >= 20 && score <= 28)  message = `Great. You have finished the game almost perfectly. A little practice won't hurt`;
  // if (score > 28) message = 'Congratulations! You are an expert in bird singing. Click the "Restart Game" button to try one more time.'

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
