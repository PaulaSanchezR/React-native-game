import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo' //prolong this screen is active 

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreeen';
import GameOverScreen from './screens/GameOverScreen';
// import console = require('console');

const fetchFonts =() =>{  //fetch the fonts has to have a promise
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  // number of rounds
  const [guessRounds,setGuessRounds]= useState(0);

  const [dataLoaded, setDataLoaded]=useState(false);
  

  if(!dataLoaded){ 
    // AppLoading is a component from expo where we point at the operation where 
    // we  want to start when is render
    return ( // apploading assest that should be there when is loading
          <AppLoading 
            startAsync={fetchFonts} 
            onFinish={()=>setDataLoaded(true)}
            onError={(err) => console.log(err)}
          />   
    )
  }
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
