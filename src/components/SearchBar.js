import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import Home from './Home';

class SearchBar extends Component {
  state = { term: '' };

  render() {
    const {
      containerStyle,
      searchTextStyle,
      buttonStyle
    } = styles;

    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <Header
          centerComponent={{ text: 'Title', style: { color: 'white' } }}
          outerContainerStyles={{ backgroundColor: '#E62117' }}
        />
        <View ><Home /></View>
        <View style={containerStyle}>
          <TextInput
            style={searchTextStyle}
            onChangeText={term => this.setState({ term })}
            value={this.state.term}
          />
          <Button
            buttonStyle={buttonStyle}
            title='Search'
            onPress={() => console.log(this.state.term)}
          />
        </View>
      </View>
    )
  }
}


const styles = {
  containerStyle: {
    flexDirection: 'row',
    marginTop: 75,
    marginLeft: 10,
    marginRight: 10
  },
  searchTextStyle: {
    flex: 1,
  },
  buttonStyle: {
    height: 30,
    marginBotton: 8
  }
}

export default SearchBar;