import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";


const Title =({title}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        padding: 14,
    },
    title:{
        color: Colors.primaryColor,
        fontSize: 25,
        textAlign:'center',
        fontFamily:'open-sans-bold'
    }
});


export default Title;