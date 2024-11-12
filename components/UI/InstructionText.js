import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

const InstructionText = ({ children,style  }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.instructionText, style]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  instructionText: {
    fontSize: 18,
    color: Colors.secondaryColor,
    fontFamily:'open-sans-bold',
    marginVertical: 10,
  },
});

export default InstructionText;
