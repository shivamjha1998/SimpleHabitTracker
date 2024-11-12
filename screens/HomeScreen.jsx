// src/screens/HomeScreen.js
import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {HabitContext} from '../context/HabitContext';
import DailyCheckbox from '../components/DailyCheckbox';
import styles from '../styles/styles';

const HomeScreen = ({navigation}) => {
  const {habitData, toggleDay} = useContext(HabitContext);

  return (
    <View style={styles.container}>
      <Text>Daily Habit Tracker</Text>
      {habitData.map((isChecked, index) => (
        <DailyCheckbox
          key={index}
          day={index + 1}
          onToggle={toggleDay}
          isChecked={isChecked}
        />
      ))}
      <Button
        title="View Monthly Summary"
        onPress={() => navigation.navigate('Summary')}
      />
    </View>
  );
};

export default HomeScreen;
