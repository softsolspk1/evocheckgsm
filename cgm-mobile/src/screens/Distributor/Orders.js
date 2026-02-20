import React, { useState } from 'react';
import {
    StyleSheet, View, Text, ScrollView,
    TouchableOpacity, SafeAreaView, ActivityIndicator,
    TextInput
} from 'react-native';
import { ShoppingBag, Search, MapPin, Phone, MessageCircle } from 'lucide-react-native';
import { theme } from '../../theme';

const DistributorOrders = () => {
    const [orders, setOrders] = useState([
        { id: 'ORD-7821', patient: 'Zahid Khan', kam: 'Shahid Mehmood', city: 'Karachi', status: 'Pending', date: '2026-02-19' },
        { id: 'ORD-7819', patient: 'Maryam Ali', kam: 'Shahid Mehmood', city: 'Karachi', status: 'Processing', date: '2026-02-18' },
        { id: 'ORD-7815', patient: 'Irfan Ahmed', kam: 'Faisal Kamal', city: 'Faisalabad', status: 'Dispatched', date: '2026-02-17' },
    ]);

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'pending': return '#F59E0B';
            case 'processing': return '#3B82F6';
            case 'dispatched': return '#10B981';
            default: return theme.colors.textLight;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchBar}>
                    <Search size={18} color={theme.colors.textLight} />
                    <TextInput
                        placeholder="Search by order ID or KAM..."
                        style={styles.searchInput}
                        placeholderTextColor={theme.colors.textLight}
                    />
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.sectionLabel}>INCOMING SHIPMENTS</Text>

                {orders.map((order) => (
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

                        <Text style={styles.patientName}>{order.patient}</Text>

                        <View style={styles.kamRow}>
                            <Text style={styles.kamLabel}>KAM:</Text>
                            <Text style={styles.kamName}>{order.kam}</Text>
                        </View>

                        <View style={styles.locationRow}>
                            <MapPin size={12} color={theme.colors.textLight} />
                            <Text style={styles.locationText}>{order.city}</Text>
                        </View>

                        <View style={styles.actionRow}>
                            {order.status === 'Pending' && (
                                <TouchableOpacity style={styles.primaryAction}>
                                    <Text style={styles.primaryActionText}>Accept Order</Text>
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity style={styles.secondaryAction}>
                                <MessageCircle size={18} color={theme.colors.textLight} />
                            </TouchableOpacity>
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
    kamRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginBottom: 6,
    },
    kamLabel: {
        fontSize: 11,
        color: theme.colors.textLight,
        fontWeight: '700',
    },
    kamName: {
        fontSize: 12,
        fontWeight: '700',
        color: theme.colors.text,
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
    }
});

export default DistributorOrders;
