import React from 'react';
import { Button, ImageBackground, StyleSheet,Text, View } from 'react-native';

// function WelcomeScreen(props) {
    const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
        style = {styles.background}
        resizeMode='cover'
        source={require("../assets/mom.jpg")}
        >
            <Text style = {styles.intro}>Welcome to Mom's Kitchen</Text>
            <Button
                style={styles.enterButton}
                title="Lets cook some shit!"
                onPress={() =>
                    navigation.navigate('Main')}/>
            {/* <View style={styles.enterButton}></View> */}
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