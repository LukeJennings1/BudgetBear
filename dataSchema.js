import React, { useState, useEffect, createContext, useContext, Children } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


// This is the schema for the budget
export const Context = createContext(null); // Initialize with null

const default_data = {
    "username": "JohnDoe", // Replace with the actual username
    "total_income": 5000, // Replace with the actual total income
    "total_expenses": 2500, // Replace with the actual total expenses
    "total_savings": 500, // Replace with the actual total expenses
    "rollover_date" : new Date().toDateString(), // Replace with the actual total expenses
    "income": [
        {
            "income_id": 1,
            "source": "Salary",
            "amount": 3000,
            "date": "2023-10-01",
            "reoccuring": false
        },
        {
            "income_id": 2,
            "source": "Freelance Work",
            "amount": 2000,
            "date": "2023-10-15",
            "reoccuring": false
        }
    ],
    "expenses": [
        {
            "expense_id": 1,
            "category": "Rent",
            "amount": 1000,
            "date": "2023-10-05",
            "reoccuring": false
        },
        {
            "expense_id": 2,
            "category": "Groceries",
            "amount": 500,
            "date": "2023-10-10",
            "reoccuring": false
        },
        {
            "expense_id": 3,
            "category": "Utilities",
            "amount": 400,
            "date": "2023-10-15",
            "reoccuring": false
        }
    ]
};

function DataHandler({children}) {

const [expenses, setExpenses] = useState(default_data)

const storeData = (data) => {
    const jsonValue = JSON.stringify(data);
    AsyncStorage.setItem('expenseData', jsonValue)
      .then(() => {
        console.log('Data stored successfully');
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  const getData = async () => {
    try {
      const expense_data = await AsyncStorage.getItem('expenseData');
      if (expense_data) { // if expenseData exists then load it. 
        const parsedData = JSON.parse(expense_data);
        setExpenses(parsedData);

      } else { // if it does not exist - load generic data
        storeData(default_data);
        setExpenses(default_data);

      }
    } catch (error) {
      console.error('Error getting data', error);
    }
  };

  useEffect(() => {
    getData(); // Fetch data when the component mounts
  }, []);

  return (
      <Context.Provider value={[expenses, setExpenses]}>
          {children}
      </Context.Provider>
  )
}

export default DataHandler;