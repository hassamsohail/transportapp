import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLOR} from '../../Constant/Color';
import Icon from "react-native-vector-icons/Entypo"
import { useNavigation } from '@react-navigation/native';

const DrivingLogs = () => {
  const navigation = useNavigation()
  return (
    <ScrollView
      style={{
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
      }}>
      <Text
        style={{
          fontSize: 25,
          fontFamily: 'Poppins-SemiBold',
          color: COLOR.mainColor,
        }}>
        Driving logs
      </Text>
      <TouchableOpacity onPress={()=>navigation.navigate("DRIVING_LOG")}
        style={{
          width: '100%',
          // height: 60,
          borderRadius: 6,
          backgroundColor: 'white',
          paddingHorizontal:10,paddingVertical:10,
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",marginTop:10
        }}>
       <View>
       <Text
          style={{
            fontSize: 22,
            fontFamily: 'Poppins-SemiBold',
            color: 'black',
          }}>
          23.09.2023
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
            color: '#636363',
            marginTop:-10
          }}>
          1 day ago
        </Text>
       </View>
<Icon name="chevron-small-right" size={35}  />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("DRIVING_LOG")}
        style={{
          width: '100%',
          // height: 60,
          borderRadius: 6,
          backgroundColor: 'white',
          paddingHorizontal:10,paddingVertical:10,
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",marginTop:10
        }}>
       <View>
       <Text
          style={{
            fontSize: 22,
            fontFamily: 'Poppins-SemiBold',
            color: 'black',
          }}>
          23.09.2023
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
            color: '#636363',
            marginTop:-10
          }}>
          1 day ago
        </Text>
       </View>
<Icon name="chevron-small-right" size={35}  />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("DRIVING_LOG")}
        style={{
          width: '100%',
          // height: 60,
          borderRadius: 6,
          backgroundColor: 'white',
          paddingHorizontal:10,paddingVertical:10,
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",marginTop:10
        }}>
       <View>
       <Text
          style={{
            fontSize: 22,
            fontFamily: 'Poppins-SemiBold',
            color: 'black',
          }}>
          23.09.2023
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
            color: '#636363',
            marginTop:-10
          }}>
          1 day ago
        </Text>
       </View>
<Icon name="chevron-small-right" size={35}  />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("DRIVING_LOG")}
        style={{
          width: '100%',
          // height: 60,
          borderRadius: 6,
          backgroundColor: 'white',
          paddingHorizontal:10,paddingVertical:10,
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",marginTop:10
        }}>
       <View>
       <Text
          style={{
            fontSize: 22,
            fontFamily: 'Poppins-SemiBold',
            color: 'black',
          }}>
          23.09.2023
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
            color: '#636363',
            marginTop:-10
          }}>
          1 day ago
        </Text>
       </View>
<Icon name="chevron-small-right" size={35}  />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("DRIVING_LOG")}
        style={{
          width: '100%',
          // height: 60,
          borderRadius: 6,
          backgroundColor: 'white',
          paddingHorizontal:10,paddingVertical:10,
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",marginTop:10
        }}>
       <View>
       <Text
          style={{
            fontSize: 22,
            fontFamily: 'Poppins-SemiBold',
            color: 'black',
          }}>
          23.09.2023
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
            color: '#636363',
            marginTop:-10
          }}>
          1 day ago
        </Text>
       </View>
<Icon name="chevron-small-right" size={35}  />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DrivingLogs;

const styles = StyleSheet.create({});
