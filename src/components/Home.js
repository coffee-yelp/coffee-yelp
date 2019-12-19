import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

class Home extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title} >Welcome to Coffee Conqueror</Text>
          <MaterialCommunityIcons style={styles.coffee} name="coffee-to-go" size={50} color="#696969" 
          onPress={
            ()=> this.props.navigation.navigate('MapPage')
          }
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    backgroundColor: 'lightGrey'
  },
  title: {
    fontSize: 55,
    fontFamily: 'Bodoni 72',
    paddingBottom: 40,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
  },
  coffee: {
    fontSize: 100,
    paddingTop: 10,
    justifyContent: 'center',
    textAlign: 'center',
  }
})

export default Home