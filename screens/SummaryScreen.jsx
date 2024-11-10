import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {HabitContext} from '../context/HabitContext';

const SummaryScreen = ({navigation}) => {
  const {habitData} = useContext(HabitContext);
  const completedDays = habitData.filter(day => day).length;

  return (
    <View>
      <Text>Monthly Summary</Text>
      <Text>
        Days completed: {completedDays} / {habitData.length}
      </Text>
      <Button
        title="Go to HomePage"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default SummaryScreen;
