import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Map from './src/components/Map';
import { Header } from 'react-native-elements';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

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
      <Provider store={store}>
        <RootStack />
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
