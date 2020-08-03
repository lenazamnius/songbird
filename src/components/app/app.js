import React from 'react';
import { CssBaseline, Container, Box, Grid} from '@material-ui/core';
import './app.css';

import Header from '../header';
import ProgressBar from '../progress-bar';
import QueryItem from '../query-item';
import OptionsList from '../options-list';
import ItemDetails from '../item-details';
import BtnNext from '../btn-next';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Box className='container'>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12}>
              <ProgressBar />
            </Grid>
            <Grid item xs={12}>
              <QueryItem />
            </Grid>
            <Grid item xs={12} sm={4}>
              <OptionsList />
            </Grid>
            <Grid item xs={12} sm={8}>
              <ItemDetails />
            </Grid>
            <Grid item xs={12}>
              <BtnNext />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default App;
