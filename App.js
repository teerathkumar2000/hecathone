/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

import AppNavigation from './src/config/navigation/navigation';

class App extends React.Component {
  render() {
    return <AppNavigation />;
  }
}

export default App;
