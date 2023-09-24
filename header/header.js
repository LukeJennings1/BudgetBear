import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import budgetBearLogo from "../assets/budgetBearLogo.png";
import { Entypo } from "@expo/vector-icons";

function Header() {
  return (
    <View style={styles.headerContainerStyling}>
      <View style={styles.headerBodyStyling}>
        <Image source={budgetBearLogo} style={styles.logo}></Image>
        <Text style={styles.headerText}>Budget Bear</Text>
      </View>
      <Pressable
        style={styles.pressableIconContainer}
        onPress={() => console.log("model open")}
      >
        <Entypo name="plus" size={28} color="black" />
        <Entypo
          style={styles.menuIcon}
          name="share-alternative"
          size={24}
          color="black"
        />
      </Pressable>
    </View>
  );
}
const styles = {
  headerContainerStyling: {
    height: "10%",
    width: "85%",
    backgroundColor: "#eef4ed",
    marginTop: -10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 15,
  },
  headerBodyStyling: {
    height: "100%",
    width: "100%",
    paddingLeft: 10,
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    zIndex: 2, // Adjust the zIndex to ensure the header is above other content
  },
  headerText: {
    fontSize: 30,
    fontWeight: 600,
    padding: 5,
    fontFamily: "Bebas-Neue-Regular",
  },
  logo: {
    height: 45,
    width: 45,
  },
  menuIcon: {
    marginBottom: 10,
  },
  pressableIconContainer: {
    flexDirection: "row",
    gap: 15,
  },
};

export default Header;
