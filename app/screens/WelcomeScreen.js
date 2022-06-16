import React from 'react';
import { ImageBackground, StyleSheet,Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
        style = {styles.background}
        resizeMode='cover'
        source={require("../assets/mom.jpg")}
        >
            <Text style = {styles.intro}>Welcome to Mom's Kitchen</Text>
            <View style={styles.enterButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    intro: {
        color: 'white',
        fontSize: 30,
        fontWeight: '800',
        position: 'absolute',
        top: '25%',
        
    },
    enterButton: {
        width: "100%",
        height: 70,
        backgroundColor: 'crimson',
    }
})

export default WelcomeScreen;