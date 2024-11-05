import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const DailyCheckbor = ({day, onToggle, isChecked}) => {
  return (
    <TouchableOpacity onPress={() => onToggle(day)}>
      <View
        style={{padding: 10, backgroundColor: isChecked ? 'green' : 'grey'}}>
        <Text>{day}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DailyCheckbor;
