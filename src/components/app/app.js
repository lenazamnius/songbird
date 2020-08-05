import React, { Component } from 'react';
import { CssBaseline, Container, Box, Grid } from '@material-ui/core';
import getCurScore from '../../helpers';

import './app.css';

import Header from '../header';
import ProgressBar from '../progress-bar';
import QueryItem from '../query-item';
import OptionsList from '../options-list';
import ItemDetails from '../item-details';
import BtnNext from '../btn-next';
import birdsData from '../../bird-data';

export default class App extends Component {

  state = {
    score: 0,
    level: 0,
    countAttempt: 0,
    guessed: false,
    data: birdsData,
    curLevelQueryItemObj: {},
    curItemDetailsObj: 'Play the bird song above and guess the name of the bird',
    curLevelData: [],
  }

  componentDidMount() {

    
    this.setState((state) => {
      // const curItemDetailsObj = curItemDetailsObj;
      const currentLevelDataArr = state.data[state.level].data;
      const randomIndex = Math.floor(Math.random() * currentLevelDataArr.length);

      return { 
        ...state,
        curLevelQueryItemObj: currentLevelDataArr[randomIndex],
        curLevelData: currentLevelDataArr,
      }
    });
  }

  render() {
    const { score, level, guessed, data, curLevelQueryItemObj, curItemDetailsObj, curLevelData } = this.state;

    const handleClickNextLevelBtn = () => {

      if (this.state.level < data.length) {
        this.setState((state) => {
          const level = state.level + 1;
          const newCurrentLevelData = state.data[level].data;
          const randomIndex = Math.floor(Math.random() * newCurrentLevelData.length);
          const newQueryItemObj = newCurrentLevelData[randomIndex];
          const curItemDetailsHidden = 'Play the bird song above and guess the name of the bird';

          return { 
            ...state,
            level,
            countAttempt: 0,
            guessed: false,
            curLevelQueryItemObj: newQueryItemObj,
            curItemDetailsObj: curItemDetailsHidden,
            curLevelData: newCurrentLevelData,
          }
        });
      }
    }

    const handleClickOptionsListItem = (id, itemIndex) => {
      const { countAttempt, curLevelQueryItemObj, curLevelData } = this.state;
      const winId = curLevelQueryItemObj.id;
      // todo: count click on options list
      
      if (winId === id) {
        const curScore = getCurScore(countAttempt);

        this.setState((state) => {
          state.curLevelData[itemIndex].clicked = 'guessed';

          return { 
            ...state,
            score: state.score + curScore,
            guessed: true,
          }
        });
      } else {
        this.setState((state) => {
          state.curLevelData[itemIndex].clicked = 'notGuessed';

          return { 
            ...state,
            countAttempt: state.countAttempt + 1,
            curItemDetailsObj: curLevelData[itemIndex],
          }
        });
      }
      console.log(curLevelData[itemIndex]);
    }

    return (
      <>
        <CssBaseline />
        <Container maxWidth='lg'>
          <Box className='container'>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Header score={score} />
              </Grid>
              <Grid item xs={12}>
                <ProgressBar level={level} data={data} />
              </Grid>
              <Grid item xs={12}>
                <QueryItem curLevelQueryItemObj={curLevelQueryItemObj} />
              </Grid>
              <Grid item xs={12} md={5}>
                <OptionsList curLevelData={curLevelData} handleClickOptionsListItem={handleClickOptionsListItem} />
              </Grid>
              <Grid item xs={12} md={7}>
                <ItemDetails curItemDetailsObj={curItemDetailsObj} />
              </Grid>
              <Grid item xs={12}>
                <BtnNext isActive={guessed} handleClickNextLevelBtn={handleClickNextLevelBtn}/>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </>
    );
  }
};
