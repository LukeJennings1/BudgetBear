import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddButtons = () => {
    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('my-key', jsonValue);
    
      } catch (e) {
        // Handle the saving error
        console.error('Error saving data:', e);
      }
    };
    
    storeData('hello');
    
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity style={styles.addButton} onPress = {() =>     {}}>
        <Text style={styles.buttonText}>Add Income</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>Add Expenses</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  buttonWrapper: {
    flexDirection: 'row',
  },
  addButton: {
    borderRadius: 25,
    height: 50,
    width: 160, 
    backgroundColor: '#4169e1',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Bebas-Neue-Regular',
    fontSize: 20,
  },
};

export default AddButtons;
