import { StyleSheet } from "react-native";
import { Dimensions, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    contentContainer: {
        elevation: 1,
        zIndex: 1,
        height: Dimensions.get('window').height - 250,
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
    },
    buttonDumpFeed: {
        marginTop: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: 'grey',
        width: '80%',
        paddingVertical: 10,
        backgroundColor: 'green',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtonDumpFeed: {
        color: 'white'
    }
});

export default styles;