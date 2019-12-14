import React from 'react';
import Map from './Map';
import { Header } from 'react-native-elements';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

class MapPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, ImageBackgroundColor: '#ddd' }}>
        {/* <Header
          leftComponent={{ icon: 'menu', style: { color: 'black'} }}
          centerComponent={{ text: 'Coffee-Coffee!!!', style: { color: 'black' } }}
          rightComponent={{ icon: 'home', style: { color: 'black' } }}
        /> */}
        <Map />
        {/* <Button title='Go To Welcome Page'
          onPress={
            ()=> this.props.navigation.navigate('Home')
          }
          /> */}
      </View>
    );
  }
}
export default MapPage;
