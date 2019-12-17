import React from 'react';
import Map from './Map';
import { View } from 'react-native';

class MapPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, ImageBackgroundColor: '#ddd' }}>
        <Map />
      </View>
    );
  }
}
export default MapPage;
