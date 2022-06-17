import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function MainScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            resizeMode='cover'
            source={require("../assets/korea.jpg")}>
                <View style={styles.iconContainer}>
                    <View style={styles.backIcon}>
                        <Text style={styles.buttonText}>Home</Text>
                    </View>
                </View>
                <View style={styles.recipeContainer}>
                    <Image 
                    style={styles.image}
                    source={require('../assets/kimchiJjigae.jpeg')}></Image>
                    {/* <View style={styles.recipe}></View> */}
                </View>
            </ImageBackground>
    );
}

const styles = StyleSheet.create ({
    background: {
        flex: 1,
        // alignItems: 'center',
    },
    backIcon: {
        width: 100,
        height: 50,
        backgroundColor: 'crimson',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        // position: 'absolute',
        // top: '50%',
    },
    iconContainer: {
        position: 'absolute',
        top: 20,
        right: 30,
    },
    image: {
        position: 'absolute',
        top: 80,
        left: 30,
        width: '30%',
        height: '30%',
        borderRadius: 5,
    },
    recipeContainer: {
        flex: 1,
        width: '100%',
        color: 'white',
    },
    // recipe: {
    //     position: 'absolute',
    //     left: 100,
    //     backgroundColor: 'red', 
    // }
})

export default MainScreen;