import React from 'react';
import { Button, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

// function WelcomeScreen(props) {
    const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
        style = {styles.background}
        resizeMode='cover'
        source={require("../assets/mom.jpg")}
        >
            <Text style = {styles.intro}>Welcome to Mom's Kitchen</Text>
            <Pressable
                style={styles.enterButton}
                title="Lets cook some shit!"
                onPress={() =>
                    navigation.navigate('Main')}>
                <Text style={styles.buttonText}>Lets Cook Some Shit!</Text>
            </Pressable>
        </ImageBackground>
    );
    };
// }

    // const MainScreen = ({ navigation, route }) => {
    //     return <Text> Try not to fuck this up!</Text>;
    // };

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    enterButton: {
        position: 'absolute',
        top: '65%',
        left: '35%',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingVertical: 22,
        paddingHorizontal: 30,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: 'crimson',
    },
    intro: {
        color: 'white',
        fontSize: 30,
        fontWeight: '800',
        position: 'absolute',
        top: '25%',
        left: '25%',    
    },
})

export default WelcomeScreen;