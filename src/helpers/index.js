export function getCurScore(countAttempt) {
  let curScore = 0;
    
  switch (countAttempt) {
    case 0:
      curScore = 5;
      break;
    case 1:
      curScore = 4;
      break;
    case 2:
      curScore = 3;
      break;
    case 3:
      curScore = 2;
      break;
    case 4:
      curScore = 1;
      break;
    default:
      curScore = 0;
  }

  return curScore;
}

export function makeCurOptionsListArr(arr) {
  const newOptionsListArr = arr.map((item) => {
    const { id, name } = item;
    return {
      id,
      name,
      clicked: '',
    }
  })
  return newOptionsListArr;
}

export function createLevelData(level, data) {
  const currentLevelDataArr = data.slice(level, level + 1)[0].data;
  const randomIndex = Math.floor(Math.random() * currentLevelDataArr.length);
  const optionsListArr = makeCurOptionsListArr(currentLevelDataArr);
  
  return {
    currentLevelDataArr,
    randomIndex,
    optionsListArr,
  }
}

export function createFinalMessage(score) {
  let message;

  if (score < 10) message = 'Do not worry. You will be more fortunate next time. Train and you will become better';
  if (score >= 10 && score < 20) message = 'Not bad! But you need to train harder to recognize all birdsongs the first time.';
  if (score >= 20 && score <= 28)  message = `Great. You have finished the game almost perfectly. A little practice won't hurt`;
  if (score > 28) message = 'Congratulations! You are an expert in bird singing. Click the "Restart Game" button to try one more time.'

  return message;
}
