import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {HabitContext} from '../context/HabitContext';

const SummaryScreen = () => {
  const {habitData} = useContext(HabitContext);
  const completedDays = habitData.filter(day => day).length;

  return (
    <View>
      <Text>Monthly Summary</Text>
      <Text>Days completed: {completedDays}</Text>
    </View>
  );
};

export default SummaryScreen;
