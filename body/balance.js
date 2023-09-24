
import { View, Text, Button } from "react-native";
import { Feather } from '@expo/vector-icons';



function Balance() {
    return (
        <View style = {styles.balanceContainer}>
            <View style = {styles.halfWrapper}>
                <View style = {styles.balanceWrapper}>
                    <Text style = {styles.balanceText}>Balance</Text>
                </View>
                <View style = {styles.balanceNumWrapper}>
                    <Text style = {styles.balanceNum}>£9999.99</Text>
                </View>
            </View>

            <View style = {styles.halfWrapper}>
                <View style = {styles.balanceWrapper}>
                    <Text style = {styles.balanceText}>Total Spend</Text>
                </View>
                <View style = {styles.balanceNumWrapper}>
                    <Text style = {styles.balanceNum}>£9999.99</Text>
                </View>
            </View>
        </View>
    )
}

const styles = {
    balanceContainer: {
        height: 80,
        width: "95%",
        borderRadius: 25,
        backgroundColor: "#ff6b35",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: 'Bebas-Neue-Regular',
        flexDirection: "row",
        gap: "50%"
    },
    halfWrapper: {
        alignItems: "center",
    },
    balanceWrapper: {

    },
    balanceText: {
        fontFamily: 'Bebas-Neue-Regular',
        fontSize: 25,
        color: "#eef4ed",

    },
    balanceNumWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    balanceNum: {
        fontSize: 20,
        color: "#eef4ed",
    },
    addToBalanceIcon: {
        height: 25,
        width: 25,
        color: "#eef4ed",
    }

}

export default Balance;