import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../Components/Button';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

const Registration = () => {
  const [employeeID, setEmployeeID] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!employeeID.trim()) {
      Alert.alert("Validation Error", "Employee ID is required.");
      return;
    }

    if (!password.trim()) {
      Alert.alert("Validation Error", "Password is required.");
      return;
    }

    if (!fullName.trim()) {
      Alert.alert("Validation Error", "Full Name is required.");
      return;
    }

    if (!designation.trim()) {
      Alert.alert("Validation Error", "Designation is required.");
      return;
    }

    if (!email.trim()) {
      Alert.alert("Validation Error", "Email is required.");
      return;
    }

    setLoading(true);

    let data = JSON.stringify({
      "fullName": fullName,
      "employeeID": employeeID,
      "designation": designation,
      "password": password,
      "email": email
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://road-king.azurewebsites.net/api/auth/register',
      headers: { 
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        Alert.alert("Registration Successful", "You have registered successfully!");
        navigation.navigate('LOGIN'); // Navigate to login screen after successful registration
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Registration Failed", "Failed to register. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.userIconContainer}>
            <Image source={require('../../assets/images/user1.png')} />
          </View>
          <View style={styles.form}>
            <Text style={styles.headerText}>
              Registration here!
            </Text>
            <Text style={styles.subHeaderText}>
              Please provide the given code in the box below to setup and load your account
            </Text>
          
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>
                Full Name
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                value={fullName}
                onChangeText={setFullName}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>
                Insert user ID{' '}
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your ID"
                value={employeeID}
                onChangeText={setEmployeeID}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>
                Designation
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your designation"
                value={designation}
                onChangeText={setDesignation}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>
                Email
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>
                Insert code{' '}
              </Text>
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder="Insert code"
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('LOGIN')}>
                <Text style={styles.footerLink}>
                  Login here
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              {loading ? (
                <ActivityIndicator size="large" color="#F07F21" />
              ) : (
                <Button
                  text="Continue"
                  onPress={handleLogin}
                />
              )}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#193A53',
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#193A53',
  },
  formContainer: {
    width: '100%',
    borderTopLeftRadius: 20,
    paddingTop:60,
    borderTopRightRadius: 20,
    backgroundColor: '#193A53',
    paddingBottom: 20,
    alignItems: 'center',
  },
  userIconContainer: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 100,
    marginTop: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    marginTop: 10,
    paddingHorizontal: 15,
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: '800',
    color: '#F07F21',
    alignSelf: 'flex-start',
    fontFamily: 'Poppins-Black',
  },
  subHeaderText: {
    fontSize: 12,
    textTransform: 'capitalize',
    fontWeight: '400',
    color: '#356A81',
    alignSelf: 'flex-start',
    fontFamily: 'Poppins-Regular',
  },
  inputContainer: {
    width: '100%',
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 20,
    textTransform: 'capitalize',
    fontWeight: '400',
    color: 'white',
    marginBottom: 5,
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 18,
  },
  footer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    color: '#356A81',
    fontSize: 16,
  },
  footerLink: {
    color: '#F07F21',
    fontSize: 16,
    marginLeft: 5,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
