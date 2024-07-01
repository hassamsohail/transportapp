import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Components/Header';
import {COLOR} from '../../Constant/Color';
import Icon from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/FontAwesome6';
import Pie from 'react-native-pie';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Task = () => {
  const [selectedTab, setSelectedTab] = useState([1]);
  const navigation = useNavigation();
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Task 1',
    },
    {
      id: 2,
      name: 'Task 2',
    },
    {
      id: 3,
      name: 'Task 3',
    },
    {
      id: 4,
      name: 'Task 4',
    },
  ]);
  const onRemove = id => {
    let arr = selectedTab.filter(item => item != id);
    setSelectedTab(arr);
  };
  console.log(selectedTab);
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Header title="Tasks" />
      <ScrollView
        style={{
          width: '100%',
          height: '100%',
          paddingHorizontal: 20,
          marginTop: 10,
        }}>
        <Text
          style={{
            color: '#141414',
            fontSize: 18,
            fontFamily: 'Poppins-SemiBold',
          }}>
          Recent Complete
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('DRIVING_LOG')}
          style={{
            width: '100%',
            backgroundColor: COLOR.color2,
            padding: 10,
            borderRadius: 10,
            marginTop: 5,
            paddingVertical: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Image source={require('../../assets/images/checkIcon.png')} />
            <View style={{}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 18,
                }}>
                #782128
              </Text>
              <Text
                style={{
                  color: '#DCDCDC',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 15,
                  marginTop: -8,
                }}>
                Completed
              </Text>
            </View>
          </View>
          <Icon name="chevron-small-right" size={30} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            color: '#141414',
            fontSize: 18,
            fontFamily: 'Poppins-SemiBold',
            marginTop: 15,
          }}>
          In Progress
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("DRIVING_LOG",{type:"progress"})}>
        <LinearGradient
          colors={['#193A53', '#356A81']}
          style={{
            width: '100%',
            // height: 80,
            marginTop: 5,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}>
          <View style={{}}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'Poppins-SemiBold',
                fontSize: 18,
              }}>
              #782128
            </Text>
            <Text
              style={{
                color: '#DCDCDC',
                fontFamily: 'Poppins-Medium',
                fontSize: 15,
                marginTop: -8,
              }}>
              Completed
            </Text>
          </View>
        </LinearGradient>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 10,
            borderRadius: 10,
            backgroundColor: 'white',
            paddingVertical: 10,
          }}>
          {tasks.map(item => {
            return (
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#818181',
                      fontFamily: 'Poppins-Medium',
                    }}>
                    {item.name}
                  </Text>
                  {
                    <TouchableOpacity
                      onPress={() => {
                        console.log(
                          selectedTab.some(itemc => itemc != item.id),
                        );
                        selectedTab.some(itemc => itemc != item.id)
                          ? setSelectedTab([...selectedTab, item.id])
                          : onRemove(item.id);
                      }}
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 5,

                        borderWidth: selectedTab.some(itemc => itemc == item.id)
                          ? 0
                          : 1,
                        borderColor: 'black',
                      }}>
                      {selectedTab.some(ii => ii == item.id) && (
                        <View
                          style={{
                            backgroundColor: COLOR.color2,
                            width: '100%',
                            height: '100%',
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <IconF name="check" size={20} color="white" />
                        </View>
                      )}
                    </TouchableOpacity>
                  }
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#EFEBE9',
                    marginVertical: 5,
                  }}
                />
              </>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: 24,
  },
});
