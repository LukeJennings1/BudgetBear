import { View, Text, Button } from "react-native";
import { increment, decrement, incrementByAmount } from "../store/counterSlice";
import { useState } from "react";
import { useContext } from "react";
import Balance from "./balance";
import AddButtons from "./addButtons";
import { Context } from '../dataSchema'; // Import the context object from DataHandler

export default function Body() {

  const user_data = useContext(Context);
  

console.log(user_data);
  // const [expenses, setExpenses] = useContext(Context); // Use the context object

  return (
    <View style={styles.bodyContainer}>
      <Balance />
      <AddButtons />
    </View>
  );
}

const styles = {
  bodyContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
};
