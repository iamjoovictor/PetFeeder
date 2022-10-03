import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
    },
    buttons:{
        marginTop: 40,
        marginBottom: 40,
        display: "flex",
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 100,
    },
    button: {
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: 'grey',
        paddingVertical: 5,
        paddingHorizontal: 10
    }
});

export default styles;