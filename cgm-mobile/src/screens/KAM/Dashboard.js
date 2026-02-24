import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView, ActivityIndicator, RefreshControl, Dimensions } from 'react-native';
import { ShoppingCart, Package, Users, TrendingUp, Plus, ChevronRight, Activity } from 'lucide-react-native';
import { theme } from '../../theme';
import { apiService } from '../../services/api';

const { width } = Dimensions.get('window');

const KAMDashboard = ({ navigation, user }) => {
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [stats, setStats] = useState([
        { label: 'Orders', value: '0', icon: ShoppingCart, color: '#3B82F6', bgColor: '#EFF6FF' },
        { label: 'Installed', value: '0', icon: Package, color: '#10B981', bgColor: '#F0FDF4' },
        { label: 'Patients', value: '0', icon: Users, color: '#8B5CF6', bgColor: '#F5F3FF' },
    ]);

    const fetchData = async () => {
        try {
            const params = user.role === 'KAM' ? { kamId: user.id } : {};
            const orders = await apiService.getOrders(params);

            const totalSales = orders.length;
            const delivered = orders.filter(o => o.status === 'DELIVERED').length;
            const patientsCount = new Set(orders.map(o => o.patientId)).size;

            setStats([
                { label: 'Orders', value: totalSales.toString(), icon: ShoppingCart, color: '#3B82F6', bgColor: '#EFF6FF' },
                { label: 'Installed', value: delivered.toString(), icon: Package, color: '#10B981', bgColor: '#F0FDF4' },
                { label: 'Patients', value: patientsCount.toString(), icon: Users, color: '#8B5CF6', bgColor: '#F5F3FF' },
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
                showsVerticalScrollIndicator={false}
            >
                {/* Modern Hero Section */}
                <View style={styles.heroSection}>
                    <View>
                        <Text style={styles.welcomeText}>Assalam-o-Alaikum,</Text>
                        <Text style={styles.nameText}>{user?.name || 'KAM'}</Text>
                        <View style={styles.roleBadge}>
                            <Activity size={12} color="#FFFFFF" />
                            <Text style={styles.roleText}>Field Representative</Text>
                        </View>
                    </View>
                </View>

                {/* Stats Grid */}
                <View style={styles.statsGrid}>
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <View key={index} style={[styles.statCard]}>
                                <View style={[styles.iconWrapper, { backgroundColor: stat.bgColor }]}>
                                    <Icon size={20} color={stat.color} />
                                </View>
                                <Text style={styles.statValue}>{stat.value}</Text>
                                <Text style={styles.statLabel}>{stat.label}</Text>
                                <View style={[styles.statTrend, { backgroundColor: stat.color + '10' }]}>
                                    <TrendingUp size={10} color={stat.color} />
                                    <Text style={[styles.trendText, { color: stat.color }]}>+12%</Text>
                                </View>
                            </View>
                        );
                    })}
                </View>

                {/* Quick Actions */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Quick Actions</Text>
                    <View style={styles.actionGrid}>
                        <TouchableOpacity
                            style={styles.actionCard}
                            onPress={() => navigation.navigate('OrderForm')}
                            activeOpacity={0.7}
                        >
                            <View style={[styles.actionIconBg, { backgroundColor: '#E0F2FE' }]}>
                                <ShoppingCart size={24} color="#0284C7" />
                            </View>
                            <View>
                                <Text style={styles.actionTitle}>Place Order</Text>
                                <Text style={styles.actionSub}>Create new device request</Text>
                            </View>
                            <ChevronRight size={18} color={theme.colors.textLight} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.actionCard}
                            onPress={() => navigation.navigate('Installation')}
                            activeOpacity={0.7}
                        >
                            <View style={[styles.actionIconBg, { backgroundColor: '#F0FDF4' }]}>
                                <Plus size={24} color="#16A34A" />
                            </View>
                            <View>
                                <Text style={styles.actionTitle}>Report Installation</Text>
                                <Text style={styles.actionSub}>Log finished installation</Text>
                            </View>
                            <ChevronRight size={18} color={theme.colors.textLight} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Sales Velocity Chart Card */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Sales Velocity</Text>
                    <View style={styles.velocityCard}>
                        <View style={styles.velocityHeader}>
                            <View>
                                <Text style={styles.velocityValue}>+12.5%</Text>
                                <Text style={styles.velocitySub}>Performance this week</Text>
                            </View>
                            <View style={styles.vTrendBadge}>
                                <TrendingUp size={16} color="#FFFFFF" />
                            </View>
                        </View>

                        <View style={styles.chartContainer}>
                            <View style={styles.barChart}>
                                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                                    <View key={i} style={styles.barWrapper}>
                                        <View style={[styles.bar, { height: h }]} />
                                        <Text style={styles.chartLabel}>{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</Text>
                                    </View>
                                ))}
                            </View>
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
        backgroundColor: '#F8FAFC',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 12,
        fontSize: 12,
        fontWeight: '900',
        color: theme.colors.textLight,
        letterSpacing: 2,
        textTransform: 'uppercase',
    },
    scrollContent: {
        padding: 20,
    },
    heroSection: {
        marginBottom: 25,
        backgroundColor: theme.colors.secondary,
        padding: 24,
        borderRadius: 24,
        shadowColor: theme.colors.secondary,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 10,
    },
    welcomeText: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.7)',
        fontWeight: '600',
        marginBottom: 4,
    },
    nameText: {
        fontSize: 28,
        fontWeight: '900',
        color: '#FFFFFF',
        marginBottom: 12,
    },
    roleBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.15)',
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 100,
        gap: 6,
    },
    roleText: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    statsGrid: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 30,
    },
    statCard: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        shadowColor: '#64748B',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    iconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    statValue: {
        fontSize: 22,
        fontWeight: '900',
        color: theme.colors.secondary,
        marginBottom: 2,
    },
    statLabel: {
        fontSize: 10,
        fontWeight: '700',
        color: theme.colors.textLight,
        textTransform: 'uppercase',
        marginBottom: 8,
    },
    statTrend: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
        gap: 2,
    },
    trendText: {
        fontSize: 9,
        fontWeight: '800',
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '900',
        color: theme.colors.secondary,
        marginBottom: 16,
        paddingLeft: 4,
    },
    actionGrid: {
        gap: 12,
    },
    actionCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 20,
        gap: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 8,
        elevation: 2,
    },
    actionIconBg: {
        width: 52,
        height: 52,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: theme.colors.secondary,
        marginBottom: 2,
    },
    actionSub: {
        fontSize: 12,
        color: theme.colors.textLight,
        fontWeight: '500',
    },
    velocityCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 24,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        shadowColor: '#64748B',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 4,
    },
    velocityHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 30,
    },
    velocityValue: {
        fontSize: 28,
        fontWeight: '900',
        color: theme.colors.success,
        marginBottom: 2,
    },
    velocitySub: {
        fontSize: 12,
        color: theme.colors.textLight,
        fontWeight: '600',
    },
    vTrendBadge: {
        backgroundColor: theme.colors.success,
        padding: 8,
        borderRadius: 12,
    },
    chartContainer: {
        height: 140,
        justifyContent: 'flex-end',
    },
    barChart: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 100,
    },
    barWrapper: {
        alignItems: 'center',
        gap: 10,
    },
    bar: {
        width: 14,
        backgroundColor: '#E0F2FE',
        borderRadius: 7,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
    },
    chartLabel: {
        fontSize: 10,
        color: '#94A3B8',
        fontWeight: '800',
    }
});

export default KAMDashboard;
