import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, ScrollView,
    TouchableOpacity, SafeAreaView, ActivityIndicator,
    TextInput
} from 'react-native';
import { ShoppingCart, Search, Plus, Package, Clock } from 'lucide-react-native';
import { theme } from '../../theme';

const KAMOrders = () => {
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([
        { id: 'ORD-7821', patient: 'Zahid Khan', city: 'Karachi', status: 'Pending', date: '2026-02-19' },
        { id: 'ORD-7819', patient: 'Maryam Ali', city: 'Karachi', status: 'Delivered', date: '2026-02-18' },
        { id: 'ORD-7815', patient: 'Irfan Ahmed', city: 'Faisalabad', status: 'In Transit', date: '2026-02-17' },
    ]);

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'pending': return '#F59E0B';
            case 'delivered': return '#10B981';
            case 'in transit': return '#3B82F6';
            default: return theme.colors.textLight;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchBar}>
                    <Search size={18} color={theme.colors.textLight} />
                    <TextInput
                        placeholder="Search orders..."
                        style={styles.searchInput}
                        placeholderTextColor={theme.colors.textLight}
                    />
                </View>
                <TouchableOpacity style={styles.addBtn}>
                    <Plus size={20} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.sectionLabel}>RECENT SHIPMENTS</Text>

                {orders.map((order) => (
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

                        <Text style={styles.patientName}>{order.patient}</Text>

                        <View style={styles.cardFooter}>
                            <View style={styles.infoRow}>
                                <Clock size={12} color={theme.colors.textLight} />
                                <Text style={styles.infoText}>{order.date}</Text>
                            </View>
                            <Text style={styles.cityText}>{order.city}</Text>
                        </View>
                    </TouchableOpacity>
                ))}

                {loading && <ActivityIndicator size="large" color={theme.colors.primary} style={{ marginTop: 20 }} />}
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
    }
});

export default KAMOrders;
