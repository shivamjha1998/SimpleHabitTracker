import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.appName}>Simple Habit Tracker</Text>
      </View>

      <View style={styles.centerContainer}>
        <View style={styles.equationContainer}>
          <Text style={styles.equationMain}>(1.01)</Text>
          <Text style={styles.exponent}>365</Text>
        </View>

        <Text style={styles.subtitleBold}>Small Steps, Big Changes!</Text>
        <Text style={styles.subtitle}>
          A tiny improvement each day. Start small, stay consistent, and watch
          yourself grow beyond what you imagined.
        </Text>
      </View>

      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start a habit</Text>
        <Text style={styles.plusIcon}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginButtonText}>Login</Text>
        <Text style={styles.arrowIcon}>→</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don’t have an account? <Text style={styles.signUpText}>Sign up</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEFAE0',
    flex: 1,
  },
  header: {
    paddingTop: 90,
    paddingLeft: 20,
  },
  welcomeText: {
    fontSize: 30,
    color: '#BC6C25',
    fontFamily: 'Inter',
  },
  appName: {
    fontsize: 30,
    color: '#BC6C25',
    fontWeight: 'bold',
    fontFamily: 'Inter',
    paddingTop: 5,
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
  subtitleBold: {
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    color: '#BC6C25',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Inter',
    color: '#BC6C25',
    marginHorizontal: 50,
    marginTop: 10,
  },
  startButton: {
    flexDirection: 'row',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BC6C25',
    borderRadius: 30,
    marginTop: 70,
    marginHorizontal: 70,
  },
  startButtonText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FEFAE0',
    fontFamily: 'Inter',
    marginRight: 10,
  },
  plusIcon: {
    paddingLeft: 10,
    fontSize: 40,
    color: '#FEFAE0',
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
  },
  loginButtonText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FEFAE0',
    fontFamily: 'Inter',
    marginRight: 10,
  },
  arrowIcon: {
    paddingLeft: 70,
    fontSize: 35,
    color: '#FEFAE0',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#283618',
    fontFamily: 'Inter',
    alignItems: 'center',
  },
  signUpText: {
    color: '#283618',
    fontWeight: 'bold',
    fontFamily: 'Inter',
  },
});

export default WelcomeScreen;
