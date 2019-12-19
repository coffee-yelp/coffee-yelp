import React from 'react';
import MapView from 'react-native-maps';
import { Linking, Alert, AsyncStorage } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { YELP_API_KEY } from 'react-native-dotenv';
import { Searchbar } from 'react-native-paper';


export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      markers: [],
      origin: { latitude: 35.294401000, longitude: -120.670121000 },
      category: 'coffee',
      conquered: []
    };
  }

  getLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          let newOrigin = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };

          this.setState({
            origin: {
              latitude: newOrigin.latitude,
              longitude: newOrigin.longitude
            },
          });
          resolve(true);
        },
        err => {
          console.log(err);
          reject(reject);
        },
        { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 }
      );
    });
  };

  async componentDidMount() {
    await this.getLocation();
    await this.fetchMarkerData();
    await this.getConqueredData();
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.category !== prevState.category ){
      this.fetchMarkerData();
    }
  }

  async fetchMarkerData() {

    return axios
      .get(`https://api.yelp.com/v3/businesses/search?term=${this.state.category}&latitude=${this.state.origin.latitude}&longitude=${this.state.origin.longitude}`, {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        }
      })
      .then(responseJson => {
        this.setState({
          isLoading: false,
          markers: responseJson.data.businesses,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  async getConqueredData() {
    let conqueredData = await AsyncStorage.getAllKeys();
    this.setState({ conquered: conqueredData });
  }


  render() {
    const { category, conquered } = this.state;
    return (

      <MapView
        style={{ flex: 1 }}
        provider="google"
        region={{
          latitude: this.state.origin.latitude,
          longitude: this.state.origin.longitude,
          latitudeDelta: 0.0100,
          longitudeDelta: 0.0100,
        }}
      >
        <Searchbar
          placeholder="Search"
          onChangeText={query => { this.setState({ category: query }); }}
          value={category}
        />
        {this.state.isLoading
          ? null
          : this.state.markers.map(marker => {
              const coords = {
                latitude: marker.coordinates.latitude,
                longitude: marker.coordinates.longitude,
              };
              const url = marker.url;
              const markerId = marker.id;
              const nameOfMarker = `${marker.name}(${marker.rating} rating)`;
              const addressOfMarker = `${marker.location.address1}, ${marker.location.city}`;

              return (
                <MapView.Marker
                  key={markerId}
                  coordinate={coords}
                  title={nameOfMarker}
                  description={addressOfMarker}
                  pinColor={ conquered.includes(markerId) ? '#2cd142' : '#ff0000' }
                  onPress={() =>
                    Alert.alert(
                      'Redirect to website?',
                      'Or click cancel to stay in app',
                      [
                        {
                          text: conquered.includes(markerId) ? 'Unmark as conquered' : 'Mark as conquered',
                          onPress: () => {
                            if (!(conquered.includes(markerId))){
                              const newConquered = [...conquered];
                              newConquered.push(markerId);
                              this.setState({ conquered: newConquered });
                              AsyncStorage.setItem(markerId, marker.name);
                            }
                            else if (conquered.includes(markerId)) {
                              const markerIndex = conquered.indexOf(markerId);
                              const newConquered = [...conquered];
                              newConquered.splice(markerIndex, 1);
                              this.setState({ conquered: newConquered });
                              AsyncStorage.removeItem(markerId);
                            }
                          },
                        },
                        {
                          text: 'Cancel',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
                        { text: 'Redirect to website', onPress: () => Linking.openURL(url) },
                      ],
                      { cancelable: true }
                    )}
                >

                </MapView.Marker>
              );
            })}

        <MapView.Marker coordinate={this.state.origin}>
          <Icon name="street-view" size={40} color={'#76BBB7'} />
        </MapView.Marker>
      </MapView>
    );
  }
}

