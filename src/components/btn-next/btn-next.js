import React from 'react';
import { Button } from '@material-ui/core';
import './btn-next.css';

const BtnNext = ({ isActive, handleClickNextLevelBtn }) => {
  return (
    <Button variant="contained" color="primary" className='btn' onClick={() => handleClickNextLevelBtn()} disabled={!isActive}>
      Next Level
    </Button>
  );
};

export default BtnNext;
