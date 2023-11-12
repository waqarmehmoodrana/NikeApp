import React from 'react';
import { View, Text } from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.containerSplash}>
            <Image
                source={require('./assets/splash.png')}
                style={styles.splashImage}
                resizeMode="cover"
            />
        </View>
    );
}

export default SplashScreen;
