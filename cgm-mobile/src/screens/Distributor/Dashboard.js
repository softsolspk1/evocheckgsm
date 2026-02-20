import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native';
import { Package, ShoppingBag, Truck, AlertTriangle, ArrowRight } from 'lucide-react-native';
import { theme } from '../../theme';
import { apiService } from '../../services/api';

const DistributorDashboard = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [stats, setStats] = useState([
        { label: 'Available Stock', value: '0', icon: Package, color: '#10B981' },
        { label: 'Pending Orders', value: '0', icon: ShoppingBag, color: '#3B82F6' },
        { label: 'Dispatched Today', value: '0', icon: Truck, color: '#8B5CF6' },
    ]);
    const [recentOrders, setRecentOrders] = useState([]);
    const [lowStockAlert, setLowStockAlert] = useState(null);

    const fetchData = async () => {
        try {
            const [orders, inventory] = await Promise.all([
                apiService.getOrders(),
                apiService.getInventory()
            ]);

            // Calculate Distributor Specific Stats (Mocking distributor filtering)
            const availableStock = inventory.reduce((acc, curr) => acc + curr.availableStock, 0);
            const pendingOrders = orders.filter(o => o.status === 'PENDING').length;
            const dispatchedToday = orders.filter(o => o.status === 'DELIVERED').length; // Mock today filter

            setStats([
                { label: 'Available Stock', value: availableStock.toString(), icon: Package, color: '#10B981' },
                { label: 'Pending Orders', value: pendingOrders.toString(), icon: ShoppingBag, color: '#3B82F6' },
                { label: 'Dispatched Today', value: dispatchedToday.toString(), icon: Truck, color: '#8B5CF6' },
            ]);

            setRecentOrders(orders.slice(0, 2));

            const lowStockItem = inventory.find(item => item.availableStock < 10);
            if (lowStockItem) {
                setLowStockAlert(`Low stock in ${lowStockItem.cityName} (${lowStockItem.availableStock} left)`);
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
    }, []);

    const onRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    if (loading && !refreshing) {
        return (
            <View style={[styles.container, styles.center]}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
                <Text style={styles.loadingText}>Loading Logistics...</Text>
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
                        <Text style={styles.welcomeText}>Distributor Portal,</Text>
                        <Text style={styles.nameText}>Muller & Phipps</Text>
                    </View>
                </View>

                {/* Status Cards */}
                {lowStockAlert && (
                    <View style={[styles.card, styles.alertCard]}>
                        <AlertTriangle size={24} color={theme.colors.warning} />
                        <View style={styles.alertContent}>
                            <Text style={styles.alertTitle}>Stock Warning</Text>
                            <Text style={styles.alertSubtitle}>{lowStockAlert}</Text>
                        </View>
                    </View>
                )}

                {/* Stats Grid */}
                <View style={styles.statsGrid}>
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <View key={index} style={styles.statCard}>
                                <View style={[styles.iconWrapper, { backgroundColor: stat.color + '10' }]}>
                                    <Icon size={20} color={stat.color} />
                                </View>
                                <Text style={styles.statValue}>{stat.value}</Text>
                                <Text style={styles.statLabel}>{stat.label}</Text>
                            </View>
                        );
                    })}
                </View>

                {/* Recent Orders Link */}
                <TouchableOpacity
                    style={styles.sectionCard}
                    onPress={() => navigation.navigate('Orders')}
                >
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Incoming Orders</Text>
                        <ArrowRight size={18} color={theme.colors.textLight} />
                    </View>
                    {recentOrders.length > 0 ? recentOrders.map((order, idx) => (
                        <View key={idx} style={styles.orderItem}>
                            <View style={styles.orderDot} />
                            <Text style={styles.orderText}>{order.id || 'ORD-NEW'} - Patient: {order.patientName || 'Anonymous'}</Text>
                        </View>
                    )) : (
                        <Text style={styles.noData}>No pending orders</Text>
                    )}
                </TouchableOpacity>

                {/* Inventory Action */}
                <TouchableOpacity
                    style={[styles.sectionCard, { borderLeftColor: theme.colors.primary, borderLeftWidth: 4 }]}
                    onPress={() => navigation.navigate('Inventory')}
                >
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Inventory Control</Text>
                        <Package size={20} color={theme.colors.primary} />
                    </View>
                    <Text style={styles.sectionDescription}>Update your device stock and manage allocations nationwide.</Text>
                </TouchableOpacity>

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
    alertCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFBEB',
        borderColor: '#FEF3C7',
        borderWidth: 1,
        padding: theme.spacing.md,
        borderRadius: theme.borderRadius.md,
        marginBottom: theme.spacing.lg,
        gap: theme.spacing.md,
    },
    alertContent: {
        flex: 1,
    },
    alertTitle: {
        fontSize: 14,
        fontWeight: '900',
        color: '#92400E',
    },
    alertSubtitle: {
        fontSize: 12,
        color: '#B45309',
        fontWeight: '500',
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
    sectionCard: {
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.lg,
        borderRadius: theme.borderRadius.md,
        borderWidth: 1,
        borderColor: theme.colors.border,
        marginBottom: theme.spacing.md,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing.md,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '900',
        color: theme.colors.secondary,
    },
    sectionDescription: {
        fontSize: 13,
        color: theme.colors.textLight,
        lineHeight: 20,
        fontWeight: '500',
    },
    orderItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 8,
    },
    orderDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: theme.colors.primary,
    },
    orderText: {
        fontSize: 13,
        fontWeight: '600',
        color: theme.colors.text,
    },
    noData: {
        fontSize: 12,
        color: theme.colors.textLight,
        fontStyle: 'italic',
    }
});

export default DistributorDashboard;
