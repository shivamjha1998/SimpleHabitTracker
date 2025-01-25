// src/screens/HomeScreen.js
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {HabitContext} from '../context/HabitContext';
import DailyCheckbox from '../components/DailyCheckbox';

const HomeScreen = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.greetingsText}>
            Hello <Text style={{fontWeight: 'bold'}}> Shivam!</Text>
          </Text>
          <Text style={styles.welcomeText}>Welcome to your habit tracker</Text>
        </View>
        <View style={styles.customShape}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('Summary')}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.dateSelector}
        contentContainerStyle={styles.dateSelectorContent}>
        {[...Array(7)].map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dateContainer,
              selectedDate === index && styles.selectedDateContainer,
            ]}
            onPress={() => setSelectedDate(index)}>
            <Text style={styles.dayText}>S</Text>
            <Text style={styles.dateText}>{9 + index}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.rectangle}>
        {[...Array(7)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.circle,
              selectedDate === index && styles.selectedCircle,
            ]}
          />
        ))}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTextContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  greetingsText: {
    fontSize: 30,
    color: '#BC6C25',
    fontFamily: 'Inter',
  },
  welcomeText: {
    fontsize: 30,
    color: '#BC6C25',
    fontFamily: 'Inter',
    paddingTop: 5,
  },
  customShape: {
    backgroundColor: '#DDA15E',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    height: 60,
    width: 80,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  addButton: {
    backgroundColor: '#BC6C25',
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    alignItems: 'center',
    marginRight: 30,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 5,
  },
  addButtonText: {
    fontSize: 35,
    color: '#FEFAE0',
  },
  dateSelector: {
    flexGrow: 0,
    marginTop: 20,
    paddingBottom: 20,
  },
  dateSelectorContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateContainer: {
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#DDA15E',
    borderRadius: 20,
    width: 50,
  },
  dayText: {
    fontSize: 14,
    color: '#FEFAE0',
  },
  dateText: {
    fontSize: 16,
    color: '#FEFAE0',
    fontWeight: 'bold',
  },
  rectangle: {
    width: '100%',
    height: 60,
    borderRadius: 20,
    backgroundColor: '#DDA15E',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FEFAE0',
  },
  selectedCircle: {
    backgroundColor: '#606C38',
  },
});

// const HomeScreen = ({navigation}) => {
//   const {habitData, toggleDay} = useContext(HabitContext);

//   return (
//     <View style={styles.container}>
//       <Text>Daily Habit Tracker</Text>
//       {habitData.map((isChecked, index) => (
//         <DailyCheckbox
//           key={index}
//           day={index + 1}
//           onToggle={toggleDay}
//           isChecked={isChecked}
//         />
//       ))}
//       <Button
//         title="View Monthly Summary"
//         onPress={() => navigation.navigate('Summary')}
//       />
//     </View>
//   );
// };

export default HomeScreen;
