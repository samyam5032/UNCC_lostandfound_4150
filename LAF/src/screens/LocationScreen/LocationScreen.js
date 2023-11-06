import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const LocationScreen = () => {
  const initialRegion = {
    latitude: 35.30881988,
    longitude: -80.73374287,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      {/* Map Section */}
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={initialRegion}
          pinColor="red"
          title="Pop Martin Student Union"
        />
      </MapView>

      {/* Description Section */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.titleText}>
          Pop Martin Student Union
        </Text>
        <Text style={styles.descriptionText}>
          Monday - Friday: 7AM - 12AM{'\n'}
          Saturday - Sunday: 9AM - 12AM{'\n'}
          Contact Number: 
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  descriptionContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8, 
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LocationScreen;
