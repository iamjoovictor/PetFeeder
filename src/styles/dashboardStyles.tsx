import { StyleSheet } from "react-native";
import { colors } from './theme';

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        gap: 16,
    },
    card: {
        width: '100%',
        backgroundColor: colors.surface,
        borderRadius: 20,
        padding: 32,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    levelLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: colors.textSecondary,
        textTransform: 'uppercase',
        letterSpacing: 1.2,
        marginBottom: 20,
    },
    levelCircle: {
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 14,
        elevation: 8,
    },
    levelValue: {
        fontSize: 52,
        fontWeight: '800',
        color: 'white',
    },
    levelUnit: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.75)',
        marginTop: 2,
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 20,
        backgroundColor: colors.successLight,
    },
    statusBadgeOff: {
        backgroundColor: colors.border,
    },
    statusText: {
        fontSize: 13,
        color: colors.success,
        fontWeight: '600',
    },
    statusTextOff: {
        color: colors.textMuted,
    },
    buttonDumpFeed: {
        width: '100%',
        paddingVertical: 16,
        borderRadius: 14,
        backgroundColor: colors.success,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.success,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    textButtonDumpFeed: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.3,
    },
});

export default styles;