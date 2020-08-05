import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Score from './components/score';

import './header.css';

const Header = ({ score }) => {
  return (
    <Box className="header">
      <Box>
        <Typography variant="h3" className='logo'>
          App Name
        </Typography>
      </Box>
      <Score score={score} />
    </Box>
  );
};

export default Header;
