import React from 'react';
import { View, Text, ImageBackground, Container } from 'react-native';

class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    return (
         <ImageBackground source={require('../Img/logo2.jpg')} style={{width: '100%', height: '100%'}}></ImageBackground>
    );
  }
}

export default SplashScreen;