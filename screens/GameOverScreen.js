import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView  } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainBotton from '../components/MainButton';

const GameOverScreens = props =>{
    return (
    <ScrollView>
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
            <MainBotton onPress={props.onRestart}>NEW GAME</MainBotton>
        </View>
    </ScrollView>  
    )

}

const styles= StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer:{
        borderRadius:Dimensions.get('window').width *0.7 / 2,//200,
        borderWidth:3,
        borderColor:'black',
        width: Dimensions.get('window').width *0.7,  // 70% of the available width
        height:Dimensions.get('window').width *0.7,
        overflow:'hidden', // any child of the container
        marginVertical: Dimensions.get('window').height / 30// to have more space at the top and botton Vertical asses
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
       marginVertical:Dimensions.get('window').height / 60
   },
   resultText:{
       textAlign:'center',
       fontSize: Dimensions.get('window').height < 600 ? 16 : 20,
    //    marginBottom:20
   }
})

export default GameOverScreens;