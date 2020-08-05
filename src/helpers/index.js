function getCurScore(countAttempt) {
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

export  default getCurScore;
