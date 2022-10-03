import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    contentContainer: {
        elevation: 1,
        zIndex: 1,
        height: Dimensions.get('window').height - 250,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    inputText: {
        fontSize: 20
    },
    alarmeData: {
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: 'grey',
        width: '80%',
        paddingVertical: 10,
        backgroundColor: 'white',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    buttonAdd: {
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
    buttonCancel: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: 'grey',
        width: '80%',
        paddingVertical: 10,
        backgroundColor: 'red',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center'
    },
    textAddButton: {
        color: 'white'
    }
});

export default styles;