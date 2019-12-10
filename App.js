import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Map from './src/components/Map';
import { Header } from 'react-native-elements';
import { View, ImageBackground } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, ImageBackgroundColor: '#ddd' }}>
          <Header
            leftComponent={{ icon: 'menu', style: { color: 'black'} }}
            centerComponent={{ text: 'Coffee Finder', style: { color: 'black' } }}
            rightComponent={{ icon: 'home', style: { color: 'black' } }}
          />
          <Map />
        </View>
      </Provider>
    );
  }
}
export default App;
