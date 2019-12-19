import React from 'react';
import Home from './src/components/Home';
import MapPage from './src/components/MapPage';

import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Home: Home,
  MapPage: MapPage,
})

class App extends React.Component {
  render() {
    return (
        <RootStack />
    );
  }
}

export default App;


