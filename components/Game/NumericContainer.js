import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Colors from "../../constants/Colors";

const NumericContainer = ({ children }) => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.container, { height: height < 400 ? 110 : "auto" }]}>
      <Text style={[styles.innerText, { fontSize: height < 400 ? 60 : 30 }]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    borderWidth: 2,
    borderColor: Colors.primaryColor,
    marginVertical: 10,
    marginHorizontal: "auto",
    maxWidth: 100,
    width: "100%",
  },
  innerText: {
    textAlign: "center",
    fontFamily: "open-sans-bold",
    color: Colors.primaryColor,
  },
});
export default NumericContainer;
