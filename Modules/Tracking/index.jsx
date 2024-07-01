import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Header from '../../Components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../../Constant/Color';
const {height, width} = Dimensions.get('window');

const Tarcking = () => {
  const [region, setRegion] = useState();
  const [changeCon, setChangeCon] = useState(24.934);
  useEffect(() => {
    setTimeout(() => {
      setChangeCon(changeCon + 0.0001);
    }, 1000);
  }, [changeCon]);
  return (
    <View style={{height: '100%', width: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 24.931442,
          longitude: 67.0837051,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={region => setRegion(region)}>
        <Marker
          coordinate={{
            latitude: changeCon,
            longitude: 67.083705,
          }}
          title='On Going 10 min'
          // description={"This is a marker in React Natve"}
        >
          <Image
            source={require('../../assets/images/truckMarker.png')}
            resizeMode="stretch"
            style={{height: 40, width: 40}}
          />
        </Marker>
        <Marker
          coordinate={{
            latitude: 24.934+0.023,
            longitude: 67.083705,
          }}
          title='Task 1'
          // description={"This is a marker in React Natve"}
        >
          <Image
            source={require('../../assets/images/Frame.png')}
            resizeMode="stretch"
            style={{height: 40, width: 40}}
          />
        </Marker>
      </MapView>
      <View style={{height, width, position: 'absolute', top: 0}}>
        <View style={{width: '100%', backgroundColor: 'white', height: 70}}>
          <Header title="Tracking" />
        </View>
        <View
          style={{
            marginTop: height / 1.5,
            width: '100%',
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              backgroundColor: '#193A53',
              width: '100%',
              padding: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Destination
            </Text>
            <View
              style={{
                width: '100%',
                height: 50,
                flexDirection: 'row',
                gap: 10,
                backgroundColor: 'white',
                borderRadius: 10,
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <Icon name="location-outline" size={25} color={COLOR.color2} />
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Poppins-Medium',
                  color: '#141414',
                }}>
                Karachi City
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Tarcking;

const styles = StyleSheet.create({});
