import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

const NumericContainer =({children}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.innerText}>{children}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {    
        padding:14,
        borderWidth:2,
        borderColor:Colors.primaryColor,
        marginVertical:10
    },
    innerText:{
        textAlign:'center',
        fontSize:30,
        color:Colors.primaryColor
    }
})

export default NumericContainer;