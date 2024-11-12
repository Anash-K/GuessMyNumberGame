import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

const InstructionText = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.instructionText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
   
    },
  instructionText: {
    fontSize: 18,
    color: Colors.secodaryColor,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default InstructionText;
