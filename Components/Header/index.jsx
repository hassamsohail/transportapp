import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLOR} from '../../Constant/Color';

const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 15,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/images/rigthIcon.png')} />
      </TouchableOpacity>
      <Text
        style={{
          color: COLOR.mainColor,
          fontSize: 22,
          fontFamily: 'Poppins-Bold',
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
