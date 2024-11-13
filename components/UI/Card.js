import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";


const Card = ({children}) =>{
    return(
        <View style={styles.cardContainer}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 36,
        marginHorizontal: 25,
        padding: 15,
        backgroundColor: Colors.primaryColor,
        borderRadius: 8,
        elevation: 12,
        shadowColor: "black",
        marginVertical:14,
    
        // iOS Shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
      },
})

export default Card;