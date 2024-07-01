import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        width: '100%',
        backgroundColor: '#F07F21',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <Text style={{fontSize: 16, color: 'white', fontWeight: '600',fontFamily:"Poppins-SemiBold"}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
