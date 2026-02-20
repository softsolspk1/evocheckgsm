import React, { useState } from 'react';
import {
    StyleSheet, View, Text, ScrollView,
    TouchableOpacity, SafeAreaView, ActivityIndicator
} from 'react-native';
import { User, MapPin, Calendar, CheckCircle2, AlertCircle } from 'lucide-react-native';
import { theme } from '../../theme';

const DeviceTracking = () => {
    const [installations, setInstallations] = useState([
        { id: '1', patient: 'Zahid Khan', area: 'South', city: 'Karachi', date: '2026-02-19', status: 'Completed' },
        { id: '2', patient: 'Maryam Ali', area: 'East', city: 'Karachi', date: '2026-02-18', status: 'Completed' },
        { id: '3', patient: 'Irfan Ahmed', area: 'Madina Town', city: 'Faisalabad', date: '2026-02-15', status: 'Follow-up Needed' },
    ]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.summaryBar}>
                <View style={styles.summaryBox}>
                    <Text style={styles.summaryVal}>89</Text>
                    <Text style={styles.summaryLab}>TOTAL INSTALLED</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.summaryBox}>
                    <Text style={[styles.summaryVal, { color: theme.colors.primary }]}>12</Text>
                    <Text style={styles.summaryLab}>THIS MONTH</Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.sectionLabel}>INSTALLATION HISTORY</Text>

                {installations.map((item) => (
                    <View key={item.id} style={styles.installCard}>
                        <View style={styles.cardHeader}>
                            <View style={styles.patientInfo}>
                                <User size={16} color={theme.colors.secondary} />
                                <Text style={styles.patientName}>{item.patient}</Text>
                            </View>
                            {item.status === 'Completed' ? (
                                <CheckCircle2 size={18} color={theme.colors.success} />
                            ) : (
                                <AlertCircle size={18} color={theme.colors.warning} />
                            )}
                        </View>

                        <View style={styles.locationRow}>
                            <MapPin size={12} color={theme.colors.textLight} />
                            <Text style={styles.locationText}>{item.area}, {item.city}</Text>
                        </View>

                        <View style={styles.cardFooter}>
                            <View style={styles.dateBox}>
                                <Calendar size={12} color={theme.colors.textLight} />
                                <Text style={styles.dateText}>{item.date}</Text>
                            </View>
                            <Text style={[styles.statusTag, { color: item.status === 'Completed' ? theme.colors.success : theme.colors.warning }]}>
                                {item.status}
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    summaryBar: {
        flexDirection: 'row',
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
        alignItems: 'center',
    },
    summaryBox: {
        flex: 1,
        alignItems: 'center',
    },
    summaryVal: {
        fontSize: 24,
        fontWeight: '900',
        color: theme.colors.secondary,
    },
    summaryLab: {
        fontSize: 9,
        fontWeight: '800',
        color: theme.colors.textLight,
        marginTop: 4,
    },
    divider: {
        width: 1,
        height: 40,
        backgroundColor: theme.colors.border,
    },
    scrollContent: {
        padding: theme.spacing.md,
    },
    sectionLabel: {
        fontSize: 10,
        fontWeight: '900',
        color: theme.colors.textLight,
        marginBottom: theme.spacing.md,
        letterSpacing: 1.5,
    },
    installCard: {
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.md,
        padding: theme.spacing.md,
        marginBottom: theme.spacing.md,
        borderWidth: 1,
        borderColor: theme.colors.border,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    patientInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    patientName: {
        fontSize: 15,
        fontWeight: '900',
        color: theme.colors.secondary,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 12,
    },
    locationText: {
        fontSize: 12,
        color: theme.colors.textLight,
        fontWeight: '600',
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: theme.colors.border,
        paddingTop: 10,
    },
    dateBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    dateText: {
        fontSize: 11,
        color: theme.colors.textLight,
        fontWeight: '700',
    },
    statusTag: {
        fontSize: 10,
        fontWeight: '900',
        textTransform: 'uppercase',
    }
});

export default DeviceTracking;
