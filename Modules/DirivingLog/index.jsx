import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import { PieChart } from 'react-native-chart-kit';
import { COLOR } from '../../Constant/Color';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const DrivingLog = ({ route }) => {
    let type = route?.params?.type;

    const data = [
        {
            name: 'Driven Hours',
            population: 13.5,
            color: '#068221',
            legendFontColor: '#636363',
            legendFontSize: 16,
        },
        {
            name: 'Break Time',
            population: 7,
            color: '#F07F21',
            legendFontColor: '#636363',
            legendFontSize: 16,
        },
        {
            name: 'Service',
            population: 3.5,
            color: '#FFD703',
            legendFontColor: '#636363',
            legendFontSize: 16,
        },
    ];

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <Header title="Driving log" />
            <ScrollView style={{ width: '100%', height: '100%', paddingHorizontal: 20 }}>
                <View
                    style={{
                        backgroundColor: COLOR.color2,
                        borderRadius: 50,
                        paddingHorizontal: 30,
                        paddingVertical: 2,
                        alignSelf: 'center',
                        flexDirection: 'row',
                        gap: 5,
                        marginTop: 10,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'Poppins-Medium',
                            color: type == "progress" ? '#ffffff' : "#000000",
                        }}
                    >
                        #782129
                    </Text>
                    {type != "progress" && (
                        <Text
                            style={{
                                fontSize: 18,
                                fontFamily: 'Poppins-Medium',
                                color: '#ffffff',
                            }}
                        >
                            Day 23.09.2023
                        </Text>
                    )}
                </View>

                <View
                    style={{
                        width: '100%',
                        backgroundColor: 'white',
                        marginTop: 10,
                        borderRadius: 10,
                        paddingHorizontal: 20,
                        paddingVertical: 15,
                    }}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <PieChart
                            data={data}
                            width={screenWidth - 40} // from react-native
                            height={180}
                            chartConfig={{
                                backgroundColor: '#ffffff',
                                backgroundGradientFrom: '#ffffff',
                                backgroundGradientTo: '#ffffff',
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            }}
                            accessor={'population'}
                            backgroundColor={'transparent'}
                            paddingLeft={'15'}
                            absolute
                        />
                        <View>
                            {data.map((item, index) => (
                                <View
                                    key={index}
                                    style={{
                                        borderLeftWidth: 4,
                                        borderColor: item.color,
                                        paddingLeft: 10,
                                        marginTop: index !== 0 ? 5 : 0,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            color: '#636363',
                                            fontFamily: 'Poppins-Regular',
                                        }}
                                    >
                                        {item.name}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            color: '#141414',
                                            fontFamily: 'Poppins-Bold',
                                            marginTop: -6,
                                        }}
                                    >
                                        {item.population} h
                                    </Text>
                                </View>
                            ))}
                        </View>
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
                        marginTop: 20,
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 16,
                            fontFamily: 'Poppins-SemiBold',
                        }}
                    >
                        Task Details
                    </Text>
                </View>

                <View style={{ backgroundColor: 'white', borderRadius: 10, marginTop: 10 }}>
                    <View
                        style={{
                            height: 45,
                            width: '100%',
                            borderRadius: 8,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingHorizontal: 15,
                            borderBottomWidth: 1,
                            borderColor: '#EFEBE9',
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize: 15,
                                color: '#818181',
                            }}
                        >
                            Driven hours
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize: 15,
                                color: '#F07F21',
                            }}
                        >
                            13.5 h
                        </Text>
                    </View>
                    <View
                        style={{
                            height: 45,
                            width: '100%',
                            borderRadius: 8,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingHorizontal: 15,
                            borderBottomWidth: 1,
                            borderColor: '#EFEBE9',
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize: 15,
                                color: '#818181',
                            }}
                        >
                            Eating (break)
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize: 15,
                                color: '#F07F21',
                            }}
                        >
                            1.5 h
                        </Text>
                    </View>
                    <View
                        style={{
                            height: 45,
                            width: '100%',
                            borderRadius: 8,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingHorizontal: 15,
                            borderBottomWidth: 1,
                            borderColor: '#EFEBE9',
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize: 15,
                                color: '#818181',
                            }}
                        >
                            Sleeping (break)
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize: 15,
                                color: '#F07F21',
                            }}
                        >
                            5.5 h
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        width: '100%',
                        height: 50,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: COLOR.color2,
                        paddingHorizontal: 20,
                        borderRadius: 10,
                        marginTop: 10,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'Poppins-SemiBold',
                            color: 'white',
                        }}
                    >
                        Total Track Hours
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'Poppins-SemiBold',
                            color: 'white',
                        }}
                    >
                        13.5 h
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default DrivingLog;

const styles = StyleSheet.create({});
