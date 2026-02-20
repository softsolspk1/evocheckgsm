import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, ScrollView,
    TouchableOpacity, SafeAreaView, ActivityIndicator,
    TextInput, RefreshControl
} from 'react-native';
import { ShoppingBag, Search, MapPin, MessageCircle, Clock } from 'lucide-react-native';
import { theme } from '../../theme';
import { apiService } from '../../services/api';

const DistributorOrders = () => {
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
                        placeholder="Search by ID, Patient or City..."
                        style={styles.searchInput}
                        placeholderTextColor={theme.colors.textLight}
                        value={searchTerm}
                        onChangeText={setSearchTerm}
                    />
                </View>
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <Text style={styles.sectionLabel}>INCOMING SHIPMENTS</Text>

                {filteredOrders.length > 0 ? filteredOrders.map((order) => (
                    <View key={order.id} style={styles.orderCard}>
                        <View style={styles.cardHeader}>
                            <View style={styles.orderIdBox}>
                                <ShoppingBag size={14} color={theme.colors.primary} />
                                <Text style={styles.orderId}>{order.id}</Text>
                            </View>
                            <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) + '20' }]}>
                                <Text style={[styles.statusText, { color: getStatusColor(order.status) }]}>{order.status}</Text>
                            </View>
                        </View>

                        <Text style={styles.patientName}>{order.patientName || 'Anonymous'}</Text>

                        <View style={styles.detailRow}>
                            <Clock size={12} color={theme.colors.textLight} />
                            <Text style={styles.detailText}>{new Date(order.createdAt).toLocaleDateString()}</Text>
                        </View>

                        <View style={styles.locationRow}>
                            <MapPin size={12} color={theme.colors.textLight} />
                            <Text style={styles.locationText}>{order.cityName || 'N/A'}</Text>
                        </View>

                        <View style={styles.actionRow}>
                            {order.status === 'PENDING' && (
                                <TouchableOpacity style={styles.primaryAction}>
                                    <Text style={styles.primaryActionText}>Accept Order</Text>
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity style={styles.secondaryAction}>
                                <MessageCircle size={18} color={theme.colors.textLight} />
                            </TouchableOpacity>
                        </View>
                    </View>
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
        padding: theme.spacing.md,
        backgroundColor: theme.colors.surface,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    searchBar: {
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
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
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
        marginBottom: 4,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 6,
    },
    detailText: {
        fontSize: 12,
        color: theme.colors.textLight,
        fontWeight: '700',
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 16,
    },
    locationText: {
        fontSize: 12,
        color: theme.colors.textLight,
        fontWeight: '600',
    },
    actionRow: {
        flexDirection: 'row',
        gap: 10,
        borderTopWidth: 1,
        borderTopColor: theme.colors.border,
        paddingTop: 12,
    },
    primaryAction: {
        flex: 1,
        height: 40,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryActionText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '800',
    },
    secondaryAction: {
        width: 40,
        height: 40,
        backgroundColor: theme.colors.background,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.colors.border,
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

export default DistributorOrders;
