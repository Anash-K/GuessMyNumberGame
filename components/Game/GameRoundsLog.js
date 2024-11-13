import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";


const GameRoundsLog = ({round, guessedNumber}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.innerText}>#{round}</Text>
            <Text style={styles.innerText}>Opponent's Guess {guessedNumber}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
     padding:14,
     flexDirection:'row',
     justifyContent:'space-between',
     columnGap:20,
     borderWidth:2,
     borderRadius:50,
     borderColor:Colors.secodaryColor,
     marginHorizontal:15,
     marginVertical:5,
     backgroundColor:Colors.primaryColor,
     elevation:8,

     shadowOffset: { width: 0, height: 4 },
     shadowColor:Colors.secodaryColor,
     shadowOpacity: 0.3,
     shadowRadius: 6,
    },
    innerText:{
        fontSize: 18,
    }
})

export default GameRoundsLog;
