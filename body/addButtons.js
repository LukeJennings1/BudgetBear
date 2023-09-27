import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddButtons = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getData(); // Fetch data when the component mounts
  }, []);

  const storeData = (value) => {
    const jsonValue = JSON.stringify(value);
    AsyncStorage.setItem('my-key', jsonValue)
      .then(() => {
        console.log('Data stored successfully');
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  const getData = () => {
    AsyncStorage.getItem('my-key')
      .then((nameData) => {
        if (nameData) {
          const parsedData = JSON.parse(nameData);
          setUserData(parsedData);
          console.log(parsedData)

        }
      })
      .catch((error) => {
        console.error('Error getting data', error);
      });
  };

  return (
    <View style={styles.buttonWrapper}>
      <Text>{userData.income}</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          getData(); // Refresh data
        }}
      >
        <Text style={styles.buttonText}>Refresh Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          const updatedUserData = { ...userData, test: 'test2' };
          setUserData(updatedUserData);
          storeData(updatedUserData);
        }}
      >
        <Text style={styles.buttonText}>Add Expenses</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 20,
  },
});

export default AddButtons;
