import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreeen';
import GameOverScreen from './screens/GameOverScreen';
// import console = require('console');

export default function App() {
  const [userNumber, setUserNumber] = useState();
  // number of rounds
  const [guessRounds,setGuessRounds]= useState(0);

  const configureNewGameHandler= () =>{
    setGuessRounds(0);
    setUserNumber(null);
  }
  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler =numOfRounds=>{
    setGuessRounds(numOfRounds);

  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;
   console.log("/*// =", guessRounds)
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  }else if (guessRounds > 0){
    content = (
     <GameOverScreen  
      roundsNumber={guessRounds} 
      userNumber={userNumber} 
      onRestart={configureNewGameHandler}
     />
    )
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
