import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../store/counterSlice";
import { useState } from "react";
import Balance from "./balance";
import AddButtons from "./addButtons";

export default function Body() {
  const currentCount = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

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
