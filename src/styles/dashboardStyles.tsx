import { StyleSheet } from "react-native";
import { Dimensions, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    contentContainer: {
        elevation: 1,
        zIndex: 1,
        height: '89%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').width * 0.8,
        backgroundColor:'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default styles;