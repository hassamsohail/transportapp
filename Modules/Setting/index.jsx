import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLOR} from '../../Constant/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialIcons';

const {height} = Dimensions.get('window');
const Setting = () => {
  return (
    <ScrollView
      style={{
        width: '100%',
        height: '100%',
        marginVertical: 20,
      }}>
      <View
        style={{
          paddingHorizontal: 20,
          width: '100%',
          height: '100%',
          minHeight: height,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'Poppins-SemiBold',
            color: COLOR.mainColor,
          }}>
          Settings
        </Text>
        <View style={{marginTop: 10}}>
          <View
            style={{
              backgroundColor: 'white',
              elevation: 4,
              borderRadius: 10,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
            }}>
            <Image
              style={{borderRadius: 100, width: 80, height: 80}}
              source={require('../../assets/images/avatar.png')}
            />
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 20,
                }}>
                Muhammad Ashir
              </Text>
              <Text
                style={{
                  color: '#818181',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 16,
                  marginTop: -8,
                }}>
                Desk Trader
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              padding: 10,
              backgroundColor: 'white',
              marginTop: 12,
              elevation: 4,
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth:2,
                paddingBottom:3,
                marginTop:10,
                borderColor:"#EFEBE9"
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                <Icon name="settings-sharp" size={25} color={COLOR.color2} />
                <Text
                  style={{
                    color: '#454545',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 18,
                  }}>
                  Setting
                </Text>
              </View>
              <IconF name="chevron-right" size={25} color="#A7A7A7" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom:3,
                marginTop:10,
                borderColor:"#EFEBE9",
                borderBottomWidth:2
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                <Icon name="notifications-outline" size={25} color={COLOR.color2} />
                <Text
                  style={{
                    color: '#454545',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 18,
                  }}>
                  Notification
                </Text>
              </View>
              <IconF name="chevron-right" size={25} color="#A7A7A7" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth:2,
                paddingBottom:3,
                marginTop:10,
                borderColor:"#EFEBE9"
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                <IconM name="support-agent" size={25} color={COLOR.color2} />
                <Text
                  style={{
                    color: '#454545',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 18,
                  }}>
                  Support
                </Text>
              </View>
              <IconF name="chevron-right" size={25} color="#A7A7A7" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderColor:"#EFEBE9",
                marginTop:10
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                <IconM name="thumb-up-off-alt" size={25} color={COLOR.color2} />
                <Text
                  style={{
                    color: '#454545',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 18,
                  }}>
                  Rate App
                </Text>
              </View>
              <IconF name="chevron-right" size={25} color="#A7A7A7" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',
              padding: 10,
              backgroundColor: 'white',
              marginTop: 12,
              elevation: 4,
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderColor:"#EFEBE9"
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                <Icon name="log-out-outline" size={25} color={COLOR.color2} />
                <Text
                  style={{
                    color: '#454545',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 18,
                  }}>
                  Sign out
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Setting;

const styles = StyleSheet.create({});
