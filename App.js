import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Map from './src/components/Map';
import { Header } from 'react-native-elements';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";


import Home from './src/components/Home';
import MapPage from './src/components/MapPage';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name='home' size={25} color={tintColor} />
      )
    }
    },
    Map: {
      screen: MapPage,
    navigationOptions: {
      tabBarIcon: ({ tintColor}) => (
        <Icon name='map' size={25} color={tintColor} />
      )
    }
    }

  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#1e90ff'
    }
  }
)

const RootStack = createStackNavigator({
  Home: bottomTabNavigator
})

const AppContainer = createAppContainer(RootStack);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;


// class App extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <View style={{ flex: 1, ImageBackgroundColor: '#ddd' }}>
//           <Header
//             leftComponent={{ icon: 'menu', style: { color: 'black'} }}
//             centerComponent={{ text: 'Coffee Finder', style: { color: 'black' } }}
//             rightComponent={{ icon: 'home', style: { color: 'black' } }}
//           />
//           <Map />
//         </View>
//       </Provider>
//     );
//   }
// }
// export default App;
