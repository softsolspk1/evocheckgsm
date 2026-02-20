import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, ScrollView,
    TouchableOpacity, SafeAreaView, ActivityIndicator,
    TextInput, RefreshControl
} from 'react-native';
import { ShoppingCart, Search, Plus, Package, Clock } from 'lucide-react-native';
import { theme } from '../../theme';
import { apiService } from '../../services/api';

const KAMOrders = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [orders, setOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchData = async () => {
        try {
            const data = await apiService.getOrders();
            setOrders(data);
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

    const getStatusColor = (status) => {
        switch (status?.toUpperCase()) {
            case 'PENDING': return '#F59E0B';
            case 'PROCESSING': return '#3B82F6';
            case 'DELIVERED': return '#10B981';
            case 'DISPATCHED': return '#8B5CF6';
            default: return theme.colors.textLight;
        }
    };

    const filteredOrders = orders.filter(o =>
        o.id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.patientName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.cityName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading && !refreshing) {
        return (
            <View style={[styles.container, styles.center]}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchBar}>
                    <Search size={18} color={theme.colors.textLight} />
                    <TextInput
                        placeholder="Search orders..."
                        style={styles.searchInput}
                        placeholderTextColor={theme.colors.textLight}
                        value={searchTerm}
                        onChangeText={setSearchTerm}
                    />
                </View>
                <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('Form')}>
                    <Plus size={20} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <Text style={styles.sectionLabel}>MY SHIPMENTS</Text>

                {filteredOrders.length > 0 ? filteredOrders.map((order) => (
                    <TouchableOpacity key={order.id} style={styles.orderCard}>
                        <View style={styles.cardTop}>
                            <View style={styles.orderIdBox}>
                                <Package size={14} color={theme.colors.primary} />
                                <Text style={styles.orderId}>{order.id}</Text>
                            </View>
                            <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) + '20' }]}>
                                <Text style={[styles.statusText, { color: getStatusColor(order.status) }]}>{order.status}</Text>
                            </View>
                        </View>

                        <Text style={styles.patientName}>{order.patientName || 'Anonymous'}</Text>

                        <View style={styles.cardFooter}>
                            <View style={styles.infoRow}>
                                <Clock size={12} color={theme.colors.textLight} />
                                <Text style={styles.infoText}>{new Date(order.createdAt).toLocaleDateString()}</Text>
                            </View>
                            <Text style={styles.cityText}>{order.cityName || 'N/A'}</Text>
                        </View>
                    </TouchableOpacity>
                )) : (
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyText}>No orders found.</Text>
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
    header: {
        flexDirection: 'row',
        padding: theme.spacing.md,
        gap: theme.spacing.sm,
        alignItems: 'center',
        backgroundColor: theme.colors.surface,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        paddingHorizontal: theme.spacing.md,
        borderRadius: theme.borderRadius.md,
        height: 48,
        borderWidth: 1,
        borderColor: theme.colors.border,
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
        fontSize: 14,
        fontWeight: '600',
        color: theme.colors.text,
    },
    addBtn: {
        width: 48,
        height: 48,
        backgroundColor: theme.colors.secondary,
        borderRadius: theme.borderRadius.md,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: theme.colors.secondary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
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
    orderCard: {
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.md,
        padding: theme.spacing.md,
        marginBottom: theme.spacing.md,
        borderWidth: 1,
        borderColor: theme.colors.border,
    },
    cardTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    orderIdBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    orderId: {
        fontSize: 12,
        fontWeight: '800',
        color: theme.colors.primary,
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    statusText: {
        fontSize: 10,
        fontWeight: '900',
        textTransform: 'uppercase',
    },
    patientName: {
        fontSize: 16,
        fontWeight: '900',
        color: theme.colors.secondary,
        marginBottom: 12,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: theme.colors.border,
        paddingTop: 10,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    infoText: {
        fontSize: 12,
        color: theme.colors.textLight,
        fontWeight: '600',
    },
    cityText: {
        fontSize: 12,
        fontWeight: '700',
        color: theme.colors.text,
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
    }
});

export default KAMOrders;
