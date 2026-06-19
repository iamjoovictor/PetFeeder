import { StyleSheet } from "react-native";
import { colors } from './theme';

const styles = StyleSheet.create({
    viewAppBar: {
        backgroundColor: colors.primary,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
    },
    appbar: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
});

export default styles;