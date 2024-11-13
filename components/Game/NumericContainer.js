import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";


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
        marginVertical:10,
        marginHorizontal:'auto',
        maxWidth:100,
        width:'100%'
    },
    innerText:{
        textAlign:'center',
        fontSize:30,
        fontFamily:'open-sans-bold',
        color:Colors.primaryColor
    }
})

export default NumericContainer;