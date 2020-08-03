import React from 'react';
import birdsData from '../../bird-data';

import { Box,Paper }  from '@material-ui/core';

import './options-list.css';

const OptionsList = () => {
  const data = birdsData[0].data;

  const barItems = data.map((item) => {
    const { id, name } = item;

    return (
      <Box key={id} className='option'>
        <Box component='span' className='option-dot'/>
        { name } 
        </Box>
    );
  });

  return (
    <Paper>
      { barItems }
    </Paper>
  );
};

export default OptionsList;


// const OptionsList = () => {
//   return (
//     <div className="options-list">
//       <ul>
//         <li>first option</li>
//         <li>second option</li>
//         <li>third option</li>
//         <li>fours option</li>
//         <li>fifth option</li>
//         <li>sixth option</li>
//       </ul>
//     </div>
//   );
// };

// export default OptionsList;