import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, ScrollView,
    TouchableOpacity, SafeAreaView, ActivityIndicator,
    RefreshControl
} from 'react-native';
import { User, MapPin, Calendar, CheckCircle2, AlertCircle } from 'lucide-react-native';
import { theme } from '../../theme';
import { apiService } from '../../services/api';

const DeviceTracking = ({ user }) => {
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [installations, setInstallations] = useState([]);

    const fetchData = async () => {
        try {
            const params = user.role === 'KAM' ? { kamId: user.id } : {};
            const orders = await apiService.getOrders(params);

            // Map delivered orders to installation history
            const deliveredOrders = orders
                .filter(o => o.status === 'DELIVERED')
                .map(o => ({
                    id: o.id,
                    patient: o.patient?.name || 'Anonymous',
                    area: o.area?.name || 'Main Center',
                    city: o.city?.name || 'N/A',
                    date: new Date(o.updatedAt).toLocaleDateString(),
                    status: 'Completed'
                }));
            setInstallations(deliveredOrders);
        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [user]);

    const onRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    const totalInstalled = installations.length;
    const thisMonth = installations.filter(i => {
        const d = new Date();
        const itemDate = new Date(i.date);
        return itemDate.getMonth() === d.getMonth() && itemDate.getFullYear() === d.getFullYear();
    }).length;

    if (loading && !refreshing) {
        return (
            <View style={[styles.container, styles.center]}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.summaryBar}>
                <View style={styles.summaryBox}>
                    <Text style={styles.summaryVal}>{totalInstalled}</Text>
                    <Text style={styles.summaryLab}>TOTAL INSTALLED</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.summaryBox}>
                    <Text style={[styles.summaryVal, { color: theme.colors.primary }]}>{thisMonth}</Text>
                    <Text style={styles.summaryLab}>THIS MONTH</Text>
                </View>
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <Text style={styles.sectionLabel}>INSTALLATION HISTORY</Text>

                {installations.length > 0 ? installations.map((item) => (
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
                )) : (
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyText}>No device installations tracked yet.</Text>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    emptyState: {
        padding: 40,
        alignItems: 'center',
    },
    emptyText: {
        color: theme.colors.textLight,
        fontSize: 13,
        fontWeight: '600',
        fontStyle: 'italic',
        textAlign: 'center',
    }
});

export default DeviceTracking;
