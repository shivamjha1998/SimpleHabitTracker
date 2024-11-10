import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HabitContext = createContext();

export const HabitProvider = ({children}) => {
  const [habitData, setHabitData] = useState(Array(10).fill(false));

  // Load data on initial render
  useEffect(() => {
    const loadData = async () => {
      try {
        const savedData = await AsyncStorage.getItem('habitData');
        if (savedData) {
          setHabitData(JSON.parse(savedData));
        }
      } catch (error) {
        console.error('Failed to load habit data:', error);
      }
    };
    loadData();
  }, []);

  // Toggle habit for a specific day and save to AsyncStorage
  const toggleDay = async day => {
    const updatedData = habitData.map((item, index) =>
      index === day - 1 ? !item : item,
    );

    setHabitData(updatedData);

    try {
      await AsyncStorage.setItem('habitData', JSON.stringify(updatedData));
    } catch (error) {
      console.error('Failed to save habit data:', error);
    }
  };

  return (
    <HabitContext.Provider value={{habitData, toggleDay}}>
      {children}
    </HabitContext.Provider>
  );
};
