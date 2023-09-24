import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../store/counterSlice";
import Balance from "./balance";

export default function Body() {

    const currentCount = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();



    return (
        <View style = {styles.bodyContainer}>
            <Balance />
        </View>
    )
}

const styles = {
    bodyContainer: {
        height: "100%",
        width: "100%",
        alignItems: "center",
    }
}