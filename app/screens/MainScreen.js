import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

    const MainScreen = ({ navigation }) => {
    return (
        <ImageBackground
            style={styles.background}
            resizeMode='cover'
            source={require("../assets/korea.jpg")}>
                <Pressable 
                    style={styles.backIcon}
                    onPress={() =>
                        navigation.navigate('Welcome')}>
                        <Text style={styles.buttonText}>Home</Text>
                </Pressable>
                <View style={styles.recipeContainer}>
                    <Image 
                    style={styles.image}
                    source={require('../assets/kimchiJjigae.jpeg')}></Image>
                    {/* <View style={styles.recipe}></View> */}
                <View 
                    style={styles.desContainer}>
                    <Text style={styles.descText}>Despite what some may think, Kimchi soup is not JUST kimchi and water, Joe.</Text>
                </View>
                </View>
            </ImageBackground>
    );
}

const styles = StyleSheet.create ({
    background: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    backIcon: {
        width: 100,
        height: 50,
        backgroundColor: 'crimson',
        borderRadius: 10,
        left: '85%',
        top: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        // position: 'absolute',
        // top: '50%',
    },
    desContainer: {
        flex: 0.5,
        backgroundColor: 'white',
        opacity: 0.7,
        position: 'absolute',
        borderRadius: 5,
        top: 380,
        left: 20,
        height: 500,
        width: '95%',

        // justifyContent: 'center',
        // alignItems: 'center',
    },
    descText: {
        top: 15,
        left: 75,
        fontSize: 15,
        fontWeight: '700',
    },
    image: {
        flex: 0.5,
        position: 'absolute',
        top: 30,
        left: 20,
        width: '95%',
        height: '70%',
        borderRadius: 5,
    },
    recipeContainer: {
        flex: 0.5,
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