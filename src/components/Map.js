import React from 'react';
import MapView from 'react-native-maps';
import { Linking, Alert } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { YELP_API_KEY } from 'react-native-dotenv';


export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      markers: [],
      origin: { latitude: 35.294401000, longitude: -120.670121000 },
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
          console.log('error');
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
  }

  fetchMarkerData() {

    return axios
      .get(`https://api.yelp.com/v3/businesses/search?term=coffee&latitude=${this.state.origin.latitude}&longitude=${this.state.origin.longitude}`, {
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


  render() {
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
        {this.state.isLoading
          ? null
          : this.state.markers.map(marker => {
              const coords = {
                latitude: marker.coordinates.latitude,
                longitude: marker.coordinates.longitude,
              };
              const url = marker.url;

              const nameOfMarker = `${marker.name}(${marker.rating} rating)`;
              const addressOfMarker = `${marker.location.address1}, ${marker.location.city}`;
              let hasVisited = false;

              return (
                <MapView.Marker
                  key={marker.id}
                  coordinate={coords}
                  title={nameOfMarker}
                  description={addressOfMarker}
                  color={ '#2cd142'}
                  onPress={() =>
                    Alert.alert(
                      'Redirect to website?',
                      'Or click cancel to stay in app',
                      [
                        {
                          text: hasVisited ? 'Unmark as visited' : 'Mark as visited',
                          onPress: () => {
                            hasVisited = !hasVisited;
                            console.log('hasVisited: ', hasVisited);
                          },
                        },
                        {
                          text: 'Cancel',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
                        { text: 'OK', onPress: () => Linking.openURL(url) },
                      ],
                      { cancelable: true }
                    )}
                >

                  <Icon name="map-marker" size={30} color={ hasVisited === true ? '#2cd142' : '#ff0000' } />

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

