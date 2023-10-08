import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalTemplate from './expenseModal';

const AddButtons = () => {
const [userData, setUserData] = useState([]);
const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const test = () => {
      console.log('hello there');
  }

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
            if (isModalVisible) {
                closeModal();
            } else {
                openModal();
            }
        //   const updatedUserData = { ...userData, test: 'test2' };
        //   setUserData(updatedUserData);
        //   storeData(updatedUserData);
        }}
      >
        <Text style={styles.buttonText}>Add Expenses</Text>
        <ModalTemplate visible={() => {isModalVisible()}} onClose = {() => {closeModal()}} callit = {test} />

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
