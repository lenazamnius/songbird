import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Score from './components/score';

import './header.css';

const Header = () => {
  return (
    <Box className="header">
      <Box>
        <Typography variant="h3" className='logo'>
          App Name
        </Typography>
      </Box>
      <Score score={0} />
    </Box>
  );
};

export default Header;
