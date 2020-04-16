import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions, // to see the available space, it is an object no compnent
  ScrollView,
  KeyboardAvoidingView // when the key board is covering the screen
} from 'react-native';

import TitleText from '../components/TitleText'
import BodyText from '../components/BodyText';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constants/colors';
import MainBotton from '../components/MainButton';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
//   we need to manage the botton side with state
// if the direcction is landscape or portrait the size needs to change
  const [buttonWidth, setButtonWidth]= useState(Dimensions.get('window').width / 4)

 

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };
// function that I want to run on every redender
  useEffect(()=>{
    const updateLayout = () =>{
      setButtonWidth(Dimensions.get('window').width / 4)
     }
     Dimensions.addEventListener('change', updateLayout)
    //  clean up function 
     return ()=>{
      Dimensions.removeEventListener('change', updateLayout)
     }
    })

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>You selected</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainBotton onPress={() => props.onStartGame(selectedNumber)}>START GAME</MainBotton>
      </Card>
    );
  }

  return (
  <ScrollView>
   <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start a New Game!</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText>Select a Number</BodyText>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={{width: buttonWidth}}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={{width: buttonWidth}}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
   </KeyboardAvoidingView>   
  </ScrollView>    
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily:'open-sans-bold',
  },
  inputContainer: {
    width: '80%',
    // maxWidth: '80%',
    maxWidth:'95%',
    minWidth: 300,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  // button: {
  //   // width: 100
  //   width: Dimensions.get('window').width / 4 // use for android, calculate with the app starts and never reajust
  // },
  input: {
    width: 50,
    textAlign: 'center'
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  text:{
      fontFamily:'open-sans'
  }
});

export default StartGameScreen;
