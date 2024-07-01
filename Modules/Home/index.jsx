import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
// import {LinearGradient} from 'react-native-gradients';
import Icon from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../Components/Button';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation()
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: 'Driving',
      img: require('../../assets/images/diving.png'),
      color: '#91C953',
      item: [
        {id: 1, name: 'Driving for A to B'},
        {id: 2, name: 'Driving across boarder'},
        {id: 3, name: 'Alternative route'},
        {id: 4, name: 'Driving with multiple drivers'},
      ],
    },
    {
      id: 2,
      name: 'Break',
      img: require('../../assets/images/break.png'),
      color: '#F04826',
      item: [
        {id: 1, name: 'Break (paid)'},
        {id: 2, name: 'Work/rest time break'},
        {id: 3, name: 'Sleepover'},
        {id: 4, name: 'Queue'},
        {id: 5, name: 'Waiting time at place of arrival'},
      ],
    },
    {
      id: 3,
      name: 'Client Tasks',
      img: require('../../assets/images/clientTask.png'),
      color: '#FAC715',
      item: [
        {id: 1, name: 'Loading of goods'},
        {id: 2, name: 'Unloading of goods'},
        {id: 3, name: 'Damaged goods'},
        {id: 4, name: 'Take return packaging'},
      ],
    },
    {
      id: 4,
      name: 'Maintance',
      img: require('../../assets/images/maintanace.png'),
      color: '#4B96D1',
      item: [
        {id: 1, name: 'Refueling'},
        {id: 2, name: 'Workshop'},
        {id: 3, name: 'Washing/cleaning'},
        {id: 4, name: 'Towing of vehicle'},
      ],
    },
    {
      id: 5,
      name: 'Administration',
      img: require('../../assets/images/adminster.png'),
      color: '#DA1965',
      item: [
        {id: 1, name: 'Approval of salary'},
        {id: 2, name: 'Document handling'},
        {id: 3, name: 'Non-drivier duties'},
        {id: 4, name: 'Support'},
      ],
    },
    {
      id: 6,
      name: 'Preparation',
      img: require('../../assets/images/prepation.png'),
      color: '#8A3794',
      item: [
        {id: 1, name: 'Read route through'},
        {id: 2, name: 'Find mechanical equipment'},
        {id: 3, name: 'Prepare waybills & delivery notes'},
        {id: 4, name: 'Recipient material'},
        {id: 5, name: 'Courses'},
      ],
    },
  ]);
  const [activiyTab, setActiviyTab] = useState();
  const [activiyTab2, setActiviyTab2] = useState(1);
  const [selected, setSelected] = useState([0,0]);
  return (
    <View>
      <ScrollView style={{height: '100%', width: '100%', marginBottom: 200}}>
        <View
          style={{
            height: '100%',
            width: '100%',
            marginTop: 20,
            paddingHorizontal: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Poppins-SemiBold',
                  color: '#141414',
                }}>
                Welcome,{' '}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Poppins-SemiBold',
                  color: '#F07F21',
                }}>
                M.Ashir
              </Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("TARCKING")}>
              <Image source={require('../../assets/images/location.png')} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("WORK_DAY")}>
            <LinearGradient
              colors={['#193A53', '#356A81']}
              style={{
                width: '100%',
                height: 80,
                marginTop: 20,
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    color: 'white',
                    fontFamily: 'Poppins-SemiBold',
                    textTransform: 'capitalize',
                  }}>
                  current status
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#F07F21',
                    fontFamily: 'Poppins-Bold',
                    textTransform: 'capitalize',
                    marginTop: -10,
                  }}>
                  {selected[0]==0?"Online":activiyTab?.name}
                </Text>
              </View>
              <Image source={require('../../assets/images/plus.png')} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate("TASK")}
            style={{
              marginVertical: 10,
              marginTop: 20,
              height: 80,
              width: '100%',
              paddingHorizontal: 15,
              backgroundColor: '#FFDCC8',
              borderRadius: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../assets/images/task.png')} />
              <View style={{marginLeft: 5}}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#193A53',
                    fontFamily: 'Poppins-Black',
                    textTransform: 'capitalize',
                  }}>
                  Tasks
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#636363',
                    fontFamily: 'Poppins-SemiBold',
                    textTransform: 'capitalize',
                    marginTop: -10,
                  }}>
                  currently available
                </Text>
              </View>
            </View>
            <Icon name="chevron-small-right" size={30} color="#193A53" />
          </TouchableOpacity>
          <View
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginBottom:80
            }}>
            {tabs.map(item => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setOpen(true);
                    setActiviyTab(item)
                  }}
                  style={{
                    width: '48%',
                    backgroundColor: selected[0]==item.id?"#F07F21":'white',
                    height: 120,
                    borderRadius: 10,
                    marginBottom: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image style={{tintColor:selected[0]!=item.id?"#636363":'white'}} source={item.img} />
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'Poppins-SemiBold',
                      color: selected[0]!=item.id?"#636363":'white',
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <Modal visible={open} transparent>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.4)',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 10,
              width: '90%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins-Bold',
                  color: '#193A53',
                }}>
                Choose type of {activiyTab?.name}
              </Text>
              <TouchableOpacity onPress={()=>{
                setOpen(false)
                setActiviyTab2(1)
              }}>
                <IconM name="progress-close" color="#FF0000" size={25} />
              </TouchableOpacity>
            </View>
            <View style={{marginVertical: 10}}>
              {activiyTab?.item?.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setActiviyTab2(item.id);
                    }}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginVertical: 5,
                      height: 50,
                      backgroundColor: 'rgba(0,0,0,0.08)',
                      paddingHorizontal: 10,
                      borderWidth: 1,
                      borderColor: 'rgba(0,0,0,0.4)',
                      borderRadius: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: 'Poppins-Medium',
                        color: '#818181',
                      }}>
                      {item.name}
                    </Text>
                    {item.id == selected[1]&&selected[0]==activiyTab.id ? (
                      <View
                        style={{
                          borderColor: activiyTab.color,
                          borderWidth: 1,
                          padding: 2,
                          borderRadius: 10,
                        }}>
                        <View
                          style={{
                            width: 15,
                            height: 15,
                            borderRadius: 15,
                            backgroundColor: activiyTab.color,
                          }}></View>
                      </View>
                    ) : (
                      item.id == activiyTab2&&selected[0]!=activiyTab.id ? (
                        <View
                          style={{
                            borderColor: activiyTab.color,
                            borderWidth: 1,
                            padding: 2,
                            borderRadius: 10,
                          }}>
                          <View
                            style={{
                              width: 15,
                              height: 15,
                              borderRadius: 15,
                              backgroundColor: activiyTab.color,
                            }}></View>
                        </View>
                      ) : (
                        <></>
                      )
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
            <Button text="Continue" onPress={()=>{
              setSelected([activiyTab.id,activiyTab2])
              console.log([activiyTab.id,activiyTab2])
              setOpen(false)
              setActiviyTab2(1)
            }} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
