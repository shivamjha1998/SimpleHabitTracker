import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import UserIcon from '../assets/img/userIcon.svg';
import PasswordIcon from '../assets/img/passwordIcon.svg';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStyle}>
        <View style={styles.centerContainer}>
          <View style={styles.equationContainer}>
            <Text style={styles.equationMain}>(1.01)</Text>
            <Text style={styles.exponent}>365</Text>
          </View>
        </View>
      </View>
      <View style={styles.loginBox}>
        <View style={styles.inputContainer}>
          <UserIcon width={40} height={30} />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#DDA15E"
          />
        </View>
        <View style={styles.inputContainer}>
          <PasswordIcon width={40} height={25} fill="#283618" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#DDA15E"
            secureTextEntry={true}
          />
        </View>
        <Text style={styles.forgotPasswordText}>Forgot password</Text>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDA15E',
    flex: 1,
  },
  backgroundStyle: {
    backgroundColor: '#FEFAE0',
    height: '65%',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    overflow: 'hidden',
  },
  centerContainer: {
    justifyContent: 'top',
    alignItems: 'center',
    flex: 1,
    paddingTop: 40,
  },
  equationContainer: {
    marginTop: 50,
    width: 250,
    height: 200,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 100,
    backgroundColor: '#EDCD9F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  equationMain: {
    color: '#283618',
    fontFamily: 'Aclonica Regular',
    padding: 30,
    fontSize: 60,
  },
  exponent: {
    fontSize: 20,
    color: '#BC6C25',
    fontFamily: 'Aclonica Regular',
    position: 'absolute',
    top: 45,
    right: 20,
  },
  loginBox: {
    backgroundColor: '#DDA15E',
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 50,
    marginTop: -160,
    borderRadius: 50,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 5,
  },
  inputContainer: {
    backgroundColor: '#FEFAE0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 30,
    marginTop: 45,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 5,
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: '#A98467',
    fontFamily: 'Inter',
    textAlign: 'left',
    fontWeight: 'bold',
    letterSpacing: 2,
    marginLeft: 40,
  },
  forgotPasswordText: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 20,
    color: '#FEFAE0',
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  loginButton: {
    flexDirection: 'row',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#283618',
    borderRadius: 30,
    marginTop: 40,
    marginHorizontal: 70,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 5,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FEFAE0',
    fontFamily: 'Inter',
    marginRight: 10,
    letterSpacing: 2,
  },
});

export default LoginScreen;
