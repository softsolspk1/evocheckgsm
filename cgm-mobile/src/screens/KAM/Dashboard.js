import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native';
import { ShoppingCart, Package, Users, TrendingUp, Plus } from 'lucide-react-native';
import { theme } from '../../theme';
import { apiService } from '../../services/api';

const KAMDashboard = ({ navigation, user }) => {
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [stats, setStats] = useState([
        { label: 'Orders', value: '0', icon: TrendingUp, color: '#3B82F6', bgColor: '#E0F2FE' },
        { label: 'Installed', value: '0', icon: Package, color: '#0EA5E9', bgColor: '#F0F9FF' },
        { label: 'Patients', value: '0', icon: Users, color: '#0284C7', bgColor: '#E0F2FE' },
    ]);

    const fetchData = async () => {
        try {
            const params = user.role === 'KAM' ? { kamId: user.id } : {};
            const orders = await apiService.getOrders(params);

            const totalSales = orders.length;
            const delivered = orders.filter(o => o.status === 'DELIVERED').length;
            const patientsCount = new Set(orders.map(o => o.patientId)).size;

            setStats([
                { label: 'Orders', value: totalSales.toString(), icon: TrendingUp, color: '#3B82F6', bgColor: '#FFFFFF' },
                { label: 'Installed', value: delivered.toString(), icon: Package, color: '#0EA5E9', bgColor: '#F0F9FF' },
                { label: 'Patients', value: patientsCount.toString(), icon: Users, color: '#0284C7', bgColor: '#FFFFFF' },
            ]);
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

    if (loading && !refreshing) {
        return (
            <View style={[styles.container, styles.center]}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
                <Text style={styles.loadingText}>Syncing EvoPulse...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <View style={styles.header}>
                    <View>
                        <Text style={styles.welcomeText}>Assalam-o-Alaikum,</Text>
                        <Text style={styles.nameText}>{user?.name || 'KAM'}</Text>
                    </View>
                </View>

                {/* Stats Grid */}
                <View style={styles.statsGrid}>
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <View key={index} style={[styles.statCard, { backgroundColor: stat.bgColor }]}>
                                <View style={[styles.iconWrapper, { backgroundColor: stat.color + '20' }]}>
                                    <Icon size={18} color={stat.color} />
                                </View>
                                <Text style={styles.statValue}>{stat.value}</Text>
                                <Text style={styles.statLabel}>{stat.label}</Text>
                            </View>
                        );
                    })}
                </View>

                {/* Quick Actions */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Quick Actions</Text>
                    <View style={styles.actionRow}>
                        <TouchableOpacity
                            style={styles.actionCard}
                            onPress={() => navigation.navigate('OrderForm')}
                        >
                            <View style={styles.actionIconBg}>
                                <ShoppingCart size={22} color={theme.colors.primary} />
                            </View>
                            <Text style={styles.actionText}>Place Order</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.actionCard}
                            onPress={() => navigation.navigate('Installation')}
                        >
                            <View style={styles.actionIconBg}>
                                <Plus size={22} color={theme.colors.primary} />
                            </View>
                            <Text style={styles.actionText}>Submit Form</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Sales Velocity */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Sales Velocity</Text>
                    <View style={styles.velocityCard}>
                        <View style={styles.velocityHeader}>
                            <View>
                                <Text style={styles.velocityValue}>+12.5%</Text>
                                <Text style={styles.velocitySub}>Performance this week</Text>
                            </View>
                            <TrendingUp size={24} color={theme.colors.success} />
                        </View>
                        <View style={styles.barChart}>
                            {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                                <View key={i} style={[styles.bar, { height: h }]} />
                            ))}
                        </View>
                        <View style={styles.chartLabels}>
                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((l, i) => (
                                <Text key={i} style={styles.chartLabel}>{l}</Text>
                            ))}
                        </View>
                    </View>
                </View>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 12,
        fontWeight: '900',
        color: theme.colors.textLight,
        letterSpacing: 1,
    },
    scrollContent: {
        padding: theme.spacing.md,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing.lg,
    },
    welcomeText: {
        fontSize: 14,
        color: theme.colors.textLight,
        fontWeight: '600',
    },
    nameText: {
        fontSize: 24,
        fontWeight: '900',
        color: theme.colors.secondary,
    },
    notificationBtn: {
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.sm,
        borderRadius: theme.borderRadius.md,
    },
    statsGrid: {
        flexDirection: 'row',
        gap: theme.spacing.sm,
        marginBottom: theme.spacing.lg,
    },
    statCard: {
        flex: 1,
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.md,
        borderRadius: theme.borderRadius.md,
        borderWidth: 1,
        borderColor: theme.colors.border,
    },
    iconWrapper: {
        width: 36,
        height: 36,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacing.sm,
    },
    statValue: {
        fontSize: 20,
        fontWeight: '900',
        color: theme.colors.secondary,
    },
    statLabel: {
        fontSize: 10,
        fontWeight: '700',
        color: theme.colors.textLight,
        textTransform: 'uppercase',
    },
    velocityCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: theme.spacing.lg,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        shadowColor: '#64748B',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 12,
        elevation: 1,
    },
    velocityHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    velocityValue: {
        fontSize: 22,
        fontWeight: '900',
        color: theme.colors.success,
    },
    velocitySub: {
        fontSize: 12,
        color: theme.colors.textLight,
        fontWeight: '600',
    },
    barChart: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 100,
        paddingHorizontal: 10,
    },
    bar: {
        width: 12,
        backgroundColor: '#BAE6FD',
        borderRadius: 6,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    chartLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        marginTop: 10,
    },
    chartLabel: {
        fontSize: 10,
        color: '#94A3B8',
        fontWeight: '800',
    },
    actionIconBg: {
        width: 48,
        height: 48,
        backgroundColor: '#F0F9FF',
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    }
});

export default KAMDashboard;
