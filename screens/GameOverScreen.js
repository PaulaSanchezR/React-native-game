import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';


const GameOverScreens = props =>{
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over</TitleText>
           <View style={styles.imageContainer}>
            <Image 
                style={styles.image} 
                source={require('../assets/gameover.jpg')}
                // source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAgo-if8vrj6MeN_6t-WZ2tSImyzxqOaoK1Y9LHRbgQmAN3g2g&usqp=CAU'}}
                resizeMode="cover"
            />
           </View>
           <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed ..<Text style={styles.highlight}>{props.roundsNumber}</Text>.. rounds to guess the number..<Text style={styles.highlight}>{props.userNumber}</Text>..</BodyText>
           </View>
            {/* <BodyText>Number was: </BodyText> */}
            <Button title="New Game" onPress={props.onRestart} />
        </View>
    )

}

const styles= StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer:{
        borderRadius:200,
        borderWidth:3,
        borderColor:'black',
        width:300,  // has to be a square to get a perfect circle
        height:300,
        overflow:'hidden', // any child of the container
        marginVertical:30 // to have more space at the top and botton Vertical asses
    },
    image:{
        width:'100%',
        height:'100%',
        // borderRadius:200,
   },
   highlight:{
        color: Colors.primary,
        fontFamily:'open-sans-bold',
        
        // fontSize:30
   },
   resultContainer:{
    //    width:'80%',
       marginHorizontal:30,
       marginVertical:20
   },
   resultText:{
       textAlign:'center',
       fontSize: 20,
    //    marginBottom:20
   }
})

export default GameOverScreens;