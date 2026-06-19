import { StyleSheet } from "react-native";
import { colors, WEB_MAX_WIDTH } from './src/styles/theme';

const styles = StyleSheet.create({
    outer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    container: {
        flex: 1,
        width: '100%',
        maxWidth: WEB_MAX_WIDTH,
        alignSelf: 'center',
        backgroundColor: colors.background,
    },
    tabBar: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 12,
        marginBottom: 8,
        backgroundColor: colors.border,
        borderRadius: 12,
        padding: 4,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabButtonActive: {
        backgroundColor: colors.surface,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    tabText: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.textMuted,
    },
    tabTextActive: {
        color: colors.primary,
        fontWeight: '700',
    },
    content: {
        flex: 1,
    },
});

export default styles;