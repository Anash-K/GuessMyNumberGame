import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Colors from "../../constants/Colors";


const PrimaryButton = ({ children , onPress }) => {

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.buttonPressed]
            : styles.innerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#982fc4" }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secodaryColor,
    borderRadius: 10,
    width: "fit",
    textAlign: "center",
    margin: 4,
    overflow: "hidden",
    justifyContent:'center',
    alignItems:'center',
  },
  innerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    justifyContent:'center'
  },
  buttonPressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
