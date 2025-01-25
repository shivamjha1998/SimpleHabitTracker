import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Calendar} from 'react-native-calendars';

const SummaryScreen = ({navigation}) => {
  const [selected, setSelected] = useState('');
  const todaysDate = new Date().toISOString().split('T')[0];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.habitTitle}>Task 1</Text>
      </View>
      <Calendar
        //Current date

        current={todaysDate}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: 'orange',
          },
        }}
        onDayPresss={day => {
          setSelected(day.dateString);
        }} // Customize the calendar theme
        theme={{
          backgroundColor: '#FEFAE0',
          calendarBackground: '#FEFAE0',
          textSectionTitleColor: '#C9A66B',
          dayTextColor: '#333',
          todayTextColor: '#BC6C25',
          selectedDayBackgroundColor: '#606C38',
          selectedDayTextColor: '#FEFAE0',
          arrowColor: '#BC6C25',
          monthTextColor: '#BC6C25',
          textMonthFontWeight: 'bold',
          textDayFontWeight: '500',
          textDayHeaderFontWeight: '500',
          // Adjust as needed:
          textDayFontSize: 14,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 12,
        }}
        style={{
          borderRadius: 16,
          elevation: 2, // Android shadow
          shadowColor: '#000', // iOS shadow
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 4,
          margin: 10,
        }}></Calendar>
    </SafeAreaView>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FEFAE0',
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginBottom: 20,
  },
  habitTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#BC6C25',
    textAlign: 'center',
    fontSize: 30,
  },
});
