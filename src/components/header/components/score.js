import React from 'react';
import { Box, Typography } from '@material-ui/core';

import './score.css';

const Score = ( { score } ) => {
  return (
    <Box className="score">
      <Typography variant="h5">
        Score: {score}
      </Typography>
    </Box>
  );
};

export default Score;