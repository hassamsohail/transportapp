import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import Header from '../../Components/Header';

const WorkDay = () => {
  const [isStart,setIsStart] = useState(0)
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Header title="Workday" />
      <ScrollView style={{paddingHorizontal: 20, marginTop: 10}}>
        <TouchableOpacity
        onPress={()=>setIsStart(1)}
          style={{
            width: '100%',
            backgroundColor: isStart==1?"white":'#FFDCC8',
            borderRadius: 10,
            paddingHorizontal: 20,
            justifyContent: 'center',
            paddingVertical:10
          }}>
          <Text
            style={{
              color: '#636363',
              fontSize: 16,
              fontFamily: 'Poppins-SmeiBold',
            }}>
            Begin workday
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Poppins-Bold',
              color:isStart==1?"#068221":'#141414'
            }}>
            Start
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>setIsStart(2)}
          style={{
            width: '100%',
            backgroundColor: isStart==2?"white":'#FFDCC8',
            borderRadius: 10,
            paddingHorizontal: 20,
            justifyContent: 'center',
            marginTop:15,
            paddingVertical:10
          }}>
          <Text
            style={{
              color: '#636363',
              fontSize: 16,
              fontFamily: 'Poppins-SmeiBold',
            }}>
            End workday
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Poppins-Bold',
              color:isStart==2?"#FF0202":'#141414'
            }}>
            Stop
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default WorkDay;

const styles = StyleSheet.create({});
