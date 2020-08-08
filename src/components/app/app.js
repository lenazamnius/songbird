import React, { PureComponent } from 'react';
import { CssBaseline, Container, Box, Grid } from '@material-ui/core';

import Header from '../header';
import ProgressBar from '../progress-bar';
import QueryItem from '../query-item';
import OptionsList from '../options-list';
import ItemDetails from '../item-details';
import BtnNext from '../btn-next';
import EndGameMessage from '../end-game';

import successSound from '../../assets/audio/Success-sound-effect.mp3'
import errorSound from '../../assets/audio/error-sound.mp3'
import { getCurScore, createLevelData } from '../../helpers';
import birdsData from '../../assets/bird-data';
import './app.css';

export default class App extends PureComponent {

  state = {
    curLevelData: [],
    optionsListArr: [],
    curLevelQueryItemObj: {},
    curItemDetailsObj: '',
    data: [...birdsData],
  }

  initGame(data) {
    this.setState((state) => {
      const level = 0;
      const levelData = createLevelData(level, data);
  
      return { 
        ...state,
        game: '', 
        score: 0,
        level: level,
        countAttempt: 0,
        guessed: false,
        curLevelData: levelData.currentLevelDataArr,
        optionsListArr: levelData.optionsListArr,
        curLevelQueryItemObj: levelData.currentLevelDataArr[levelData.randomIndex],
        curItemDetailsObj: 'Play the bird song above and guess the name of the bird in the options list',
      }
    });
  }

  setStateForNextLevel() {
    this.setState((state) => {
      const level = state.level + 1;
      const levelData = createLevelData(level, state.data);
      const newQueryItemObj = levelData.currentLevelDataArr[levelData.randomIndex];
      const curItemDetailsHidden = 'Play the bird song above and guess the name of the bird in the options list';

      return {
        ...state,
        level,
        countAttempt: 0,
        guessed: false,
        curLevelData: levelData.currentLevelDataArr,
        optionsListArr: levelData.optionsListArr,
        curLevelQueryItemObj: newQueryItemObj,
        curItemDetailsObj: curItemDetailsHidden,
      }
    });
  }

  setStateIfGuessed(guessed, countAttempt, winSound, itemIndex) {
    const curScore = getCurScore(countAttempt);
    
    if (!guessed) winSound.play();

    this.setState((state) => {
      const newOptionsListArr = state.optionsListArr;

      newOptionsListArr[itemIndex].clicked = 'guessed';

      return {
        ...state,
        guessed: true,
        score: state.score + curScore,
        optionsListArr: newOptionsListArr,
        curItemDetailsObj: state.curLevelData[itemIndex],
      }
    });
  }

  setStateIfFailure(guessed, failureSound, itemIndex) {
    if (!guessed) failureSound.play();

    this.setState((state) => {
      const newOptionsListArr = state.optionsListArr;

      if (!guessed) newOptionsListArr[itemIndex].clicked = 'notGuessed';

      return { 
        ...state,
        countAttempt: state.countAttempt + 1,
        optionsListArr: newOptionsListArr,
        curItemDetailsObj: state.curLevelData[itemIndex],
      }
    });
  }

  componentDidMount() {
    this.initGame(this.state.data);
  }

  render() {
    const { game, score, level, guessed, optionsListArr, curLevelQueryItemObj, curItemDetailsObj, data } = this.state;
    console.log(curLevelQueryItemObj.name);
    
    const handleClickRestartGameBtn = () => {
      this.initGame(data);
    }

    const handleClickNextLevelBtn = () => {
      if (level < data.length - 1) {
        this.setStateForNextLevel();
      } else if (level === data.length - 1) {
        this.setState((state) => { return {...state, game: 'finished'}});
      }
    }

    const handleClickOptionsListItem = (id, itemIndex) => {
      const { guessed, countAttempt, curLevelQueryItemObj } = this.state;
      const winId = curLevelQueryItemObj.id;
      const winSound = new Audio(successSound);
      const failureSound = new Audio(errorSound);
      
      if (winId === id) {
        this.setStateIfGuessed(guessed, countAttempt, winSound, itemIndex);
      } else {
        this.setStateIfFailure(guessed, failureSound, itemIndex);
      }
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
              {game === 'finished' && <Grid item xs={12}>
                <EndGameMessage score={score} handleClickRestartGameBtn={handleClickRestartGameBtn} />
              </Grid>}
              {game !== 'finished' && <Grid item xs={12}>
                <QueryItem guessed={guessed} curLevelQueryItemObj={curLevelQueryItemObj} />
              </Grid>}
              {game !== 'finished' &&  <Grid item xs={12} md={5}>
                <OptionsList optionsListArr={optionsListArr} handleClickOptionsListItem={handleClickOptionsListItem} />
              </Grid>}
              {game !== 'finished' && <Grid item xs={12} md={7}>
                <ItemDetails curItemDetailsObj={curItemDetailsObj} />
              </Grid>}
              {game !== 'finished' && <Grid item xs={12}>
                <BtnNext isActive={guessed} handleClickNextLevelBtn={handleClickNextLevelBtn}/>
              </Grid>}
            </Grid>
          </Box>
        </Container>
      </>
    );
  }
};
