import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText'


const GameOverScreens = props =>{
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over</TitleText>
            <BodyText>Number of Rounds:{props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title="New Game" onPress={props.onRestart} />
        </View>
    )

}

const styles= StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default GameOverScreens;