import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native';
import { Package, ShoppingBag, Truck, AlertTriangle, ArrowRight, Activity, ChevronRight } from 'lucide-react-native';
import { theme } from '../../theme';
import { apiService } from '../../services/api';

const DistributorDashboard = ({ navigation, user }) => {
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [stats, setStats] = useState([
        { label: 'Available Stock', value: '0', icon: Package, color: '#10B981', bgColor: '#F0FDF4' },
        { label: 'Pending Orders', value: '0', icon: ShoppingBag, color: '#3B82F6', bgColor: '#EFF6FF' },
        { label: 'Dispatched', value: '0', icon: Truck, color: '#8B5CF6', bgColor: '#F5F3FF' },
    ]);
    const [recentOrders, setRecentOrders] = useState([]);
    const [lowStockAlert, setLowStockAlert] = useState(null);

    const fetchData = async () => {
        try {
            const distParam = { distributorId: user.distributorId || user.id };
            const [orders, inventory] = await Promise.all([
                apiService.getOrders(distParam),
                apiService.getInventory(distParam)
            ]);

            let availableStock = 0;
            if (inventory.length > 0) {
                availableStock = inventory.reduce((acc, curr) => acc + curr.availableStock, 0);
            }

            const pendingOrders = orders.filter(o => o.status === 'PENDING').length;
            const dispatchedOrders = orders.filter(o => o.status === 'DELIVERED').length;

            setStats([
                { label: 'Available Stock', value: availableStock.toString(), icon: Package, color: '#10B981', bgColor: '#F0FDF4' },
                { label: 'Pending Orders', value: pendingOrders.toString(), icon: ShoppingBag, color: '#3B82F6', bgColor: '#EFF6FF' },
                { label: 'Dispatched', value: dispatchedOrders.toString(), icon: Truck, color: '#8B5CF6', bgColor: '#F5F3FF' },
            ]);

            setRecentOrders(orders.slice(0, 3));

            if (availableStock < 10 && inventory.length > 0) {
                setLowStockAlert(`Low stock warning: Only ${availableStock} units remaining.`);
            } else {
                setLowStockAlert(null);
            }

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
                <Text style={styles.loadingText}>Syncing Logistics...</Text>
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
                        <Text style={styles.nameText}>{user?.name || 'Distributor'}</Text>
                        <View style={styles.roleBadge}>
                            <Activity size={12} color="#FFFFFF" />
                            <Text style={styles.roleText}>Warehouse Admin</Text>
                        </View>
                    </View>
                </View>

                {/* Low Stock Alert - Professional Style */}
                {lowStockAlert && (
                    <View style={styles.alertCard}>
                        <View style={styles.alertIconBg}>
                            <AlertTriangle size={24} color="#B45309" />
                        </View>
                        <View style={styles.alertContent}>
                            <Text style={styles.alertTitle}>Stock Critical</Text>
                            <Text style={styles.alertSubtitle}>{lowStockAlert}</Text>
                        </View>
                        <ArrowRight size={18} color="#B45309" />
                    </View>
                )}

                {/* Stats Grid */}
                <View style={styles.statsGrid}>
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <View key={index} style={styles.statCard}>
                                <View style={[styles.iconWrapper, { backgroundColor: stat.bgColor }]}>
                                    <Icon size={20} color={stat.color} />
                                </View>
                                <Text style={styles.statValue}>{stat.value}</Text>
                                <Text style={styles.statLabel}>{stat.label}</Text>
                            </View>
                        );
                    })}
                </View>

                {/* Actionable Sections */}
                <Text style={styles.sectionTitle}>Warehouse Actions</Text>

                <TouchableOpacity
                    style={styles.actionItem}
                    onPress={() => navigation.navigate('Orders')}
                    activeOpacity={0.7}
                >
                    <View style={[styles.actionIconBg, { backgroundColor: '#EFF6FF' }]}>
                        <ShoppingBag size={24} color="#2563EB" />
                    </View>
                    <View style={styles.actionInfo}>
                        <Text style={styles.actionTitle}>Incoming Orders</Text>
                        <Text style={styles.actionSub}>Confirm and dispatch requests</Text>

                        <View style={styles.orderPreview}>
                            {recentOrders.length > 0 ? recentOrders.map((order, idx) => (
                                <View key={idx} style={styles.previewDot} />
                            )) : (
                                <Text style={styles.noData}>No pending tasks</Text>
                            )}
                        </View>
                    </View>
                    <ChevronRight size={18} color={theme.colors.textLight} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.actionItem}
                    onPress={() => navigation.navigate('Inventory')}
                    activeOpacity={0.7}
                >
                    <View style={[styles.actionIconBg, { backgroundColor: '#F0FDF4' }]}>
                        <Package size={24} color="#16A34A" />
                    </View>
                    <View style={styles.actionInfo}>
                        <Text style={styles.actionTitle}>Inventory Control</Text>
                        <Text style={styles.actionSub}>Manage stock and device levels</Text>
                        <Text style={styles.inventoryStatus}>Real-time updates enabled</Text>
                    </View>
                    <ChevronRight size={18} color={theme.colors.textLight} />
                </TouchableOpacity>

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
        backgroundColor: '#0F172A',
        padding: 24,
        borderRadius: 24,
        shadowColor: '#000',
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
    alertCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#FEF3C7',
        borderWidth: 1,
        padding: 16,
        borderRadius: 20,
        marginBottom: 25,
        gap: 16,
        shadowColor: '#F59E0B',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },
    alertIconBg: {
        width: 48,
        height: 48,
        backgroundColor: '#FFFBEB',
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    alertContent: {
        flex: 1,
    },
    alertTitle: {
        fontSize: 16,
        fontWeight: '900',
        color: '#92400E',
        marginBottom: 2,
    },
    alertSubtitle: {
        fontSize: 12,
        color: '#B45309',
        fontWeight: '600',
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
        color: '#0F172A',
        marginBottom: 2,
    },
    statLabel: {
        fontSize: 10,
        fontWeight: '700',
        color: '#64748B',
        textTransform: 'uppercase',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '900',
        color: '#0F172A',
        marginBottom: 16,
        paddingLeft: 4,
    },
    actionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 24,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 8,
        elevation: 2,
        gap: 16,
    },
    actionIconBg: {
        width: 56,
        height: 56,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionInfo: {
        flex: 1,
    },
    actionTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#0F172A',
        marginBottom: 2,
    },
    actionSub: {
        fontSize: 13,
        color: '#64748B',
        fontWeight: '500',
    },
    orderPreview: {
        flexDirection: 'row',
        marginTop: 8,
        gap: 4,
    },
    previewDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#3B82F6',
    },
    inventoryStatus: {
        fontSize: 10,
        color: '#10B981',
        fontWeight: '800',
        textTransform: 'uppercase',
        marginTop: 8,
    },
    noData: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '600',
    }
});

export default DistributorDashboard;
