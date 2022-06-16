import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

function MainScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            resizeMode='cover'
            source={require("../assets/korea.jpg")}></ImageBackground>
    );
}

const styles = StyleSheet.create ({
    background: {
        flex: 1,
    }
})

export default MainScreen;