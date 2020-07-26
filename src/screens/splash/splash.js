import React from 'react';
import {View, Image, Text} from 'react-native';

class SplashScreen extends React.Component {
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Image
          source={require('../../assets/9056_covid19updatebanner1500x1000_02_909832.png')}
          style={styles.Image}
        />
        <Text style={styles.textStyles}>Welcome To Covid-19 App</Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#005D66',
  },
  textStyles: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  Image: {
    width: 300,
    height: 200,
  },
};

export default SplashScreen;
