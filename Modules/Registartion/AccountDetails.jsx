import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import Button from '../../Components/Button';
import { useNavigation } from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
const AccountDetails = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={{width: '100%', height: '100%'}}>
      <View
        style={{
          paddingHorizontal: 15,
          marginTop: 20,
          // height: '100%',
          minHeight: height,
        }}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 24,
                  color: '#193A53',
                }}>
                Account
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#818181',
                  marginTop: -10,
                }}>
                Platform participation
              </Text>
            </View>
            <Icon name="user" size={40} color="#F07F21" />
          </View>
          <View style={{marginTop: 20}}>
            <View
              style={{
                width: '100%',
                height: 40,
                backgroundColor: '#193A53',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Personal data
              </Text>
            </View>
            <View style={{marginTop: 10}}>
              <View
                style={{
                  marginVertical: 5,
                  height: 45,
                  width: '100%',
                  borderRadius: 8,
                  backgroundColor: 'white',
                  elevation: 2,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 15,
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 15,
                    color: '#818181',
                  }}>
                  Name
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 15,
                    color: '#F07F21',
                  }}>
                  M Ashir
                </Text>
              </View>
              <View
                style={{
                  marginVertical: 5,
                  height: 45,
                  width: '100%',
                  borderRadius: 8,
                  backgroundColor: 'white',
                  elevation: 2,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 15,
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 15,
                    color: '#818181',
                  }}>
                  Age
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 15,
                    color: '#F07F21',
                  }}>
                  31th
                </Text>
              </View>
              <View
                style={{
                  marginVertical: 5,
                  height: 45,
                  width: '100%',
                  borderRadius: 8,
                  backgroundColor: 'white',
                  elevation: 2,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 15,
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 15,
                    color: '#818181',
                  }}>
                  Job title
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 15,
                    color: '#F07F21',
                  }}>
                  truck driver
                </Text>
              </View>
              <View
                style={{
                  marginVertical: 5,
                  height: 45,
                  width: '100%',
                  borderRadius: 8,
                  backgroundColor: 'white',
                  elevation: 2,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 15,
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 15,
                    color: '#818181',
                  }}>
                  Field of work
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 15,
                    color: '#F07F21',
                  }}>
                  31th
                </Text>
              </View>
              <View
                style={{
                  marginVertical: 5,
                  height: 45,
                  width: '100%',
                  borderRadius: 8,
                  backgroundColor: 'white',
                  elevation: 2,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 15,
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 15,
                    color: '#818181',
                  }}>
                  Work experience
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 15,
                    color: '#F07F21',
                  }}>
                  10 Year
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: 40,
                backgroundColor: '#193A53',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Company information
              </Text>
            </View>
            <View
                style={{
                  marginVertical: 5,
                  height: 45,
                  width: '100%',
                  borderRadius: 8,
                  backgroundColor: 'white',
                  elevation: 2,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 15,
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 15,
                    color: '#818181',
                  }}>
                  Company name
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 15,
                    color: '#F07F21',
                  }}>
                  DESK TRADER
                </Text>
              </View>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 60,
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}>
          <Button text="Continue" onPress={()=>navigation.navigate("WELCOME_PAGE")} />
        </View>
      </View>
    </ScrollView>
  );
};

export default AccountDetails;

const styles = StyleSheet.create({});
