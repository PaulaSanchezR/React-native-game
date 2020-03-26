import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StarGameScreeen from './screens/StartGameScreen';
export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      <StarGameScreeen />
    </View>
  );
}

const styles = StyleSheet.create({
  screee:{
    flex:1
  }
});
