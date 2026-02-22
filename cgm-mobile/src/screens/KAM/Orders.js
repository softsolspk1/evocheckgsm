import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, ScrollView,
    TouchableOpacity, SafeAreaView, ActivityIndicator,
    TextInput, RefreshControl, Modal
} from 'react-native';
import { ShoppingCart, Search, Plus, Package, Clock, X, MapPin, User, ChevronRight } from 'lucide-react-native';
import { theme } from '../../theme';
import { apiService } from '../../services/api';

const KAMOrders = ({ navigation, user }) => {
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [orders, setOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOrder, setSelectedOrder] = useState(null);

    const fetchData = async () => {
        try {
            const params = user.role === 'KAM' ? { kamId: user.id } : {};
            const data = await apiService.getOrders(params);
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
    }, [user]);

    const onRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    const getStatusColor = (status) => {
        switch (status?.toUpperCase()) {
            case 'PENDING': return '#F59E0B';
            case 'CONFIRMED': return '#0EA5E9';
            case 'DELIVERED': return '#10B981';
            case 'CANCELLED': return '#EF4444';
            case 'PROCESSING': return '#3B82F6';
            default: return theme.colors.textLight;
        }
    };

    const filteredOrders = orders.filter(o =>
        o.id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.patient?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.city?.name?.toLowerCase().includes(searchTerm.toLowerCase())
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
                <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('OrderForm')}>
                    <Plus size={20} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <Text style={styles.sectionLabel}>MY SHIPMENTS</Text>

                {filteredOrders.length > 0 ? filteredOrders.map((order) => (
                    <TouchableOpacity
                        key={order.id}
                        style={styles.orderCard}
                        onPress={() => setSelectedOrder(order)}
                    >
                        <View style={styles.cardTop}>
                            <View style={styles.orderIdBox}>
                                <Package size={14} color={theme.colors.primary} />
                                <Text style={styles.orderId}>ID: {order.id.split('-')[0].toUpperCase()}</Text>
                            </View>
                            <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) + '15' }]}>
                                <Text style={[styles.statusText, { color: getStatusColor(order.status) }]}>{order.status}</Text>
                            </View>
                        </View>

                        <Text style={styles.patientName}>{order.patient?.name || 'Anonymous'}</Text>

                        <View style={styles.cardFooter}>
                            <View style={styles.infoRow}>
                                <MapPin size={12} color={theme.colors.textLight} />
                                <Text style={styles.infoText}>{order.city?.name || 'N/A'}</Text>
                            </View>
                            <View style={styles.infoRow}>
                                <Clock size={12} color={theme.colors.textLight} />
                                <Text style={styles.infoText}>{new Date(order.createdAt).toLocaleDateString()}</Text>
                            </View>
                            <ChevronRight size={16} color={theme.colors.border} />
                        </View>
                    </TouchableOpacity>
                )) : (
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyText}>No orders found.</Text>
                    </View>
                )}
            </ScrollView>

            {/* Order Detail Modal */}
            <Modal
                visible={!!selectedOrder}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Order Details</Text>
                            <TouchableOpacity onPress={() => setSelectedOrder(null)}>
                                <X size={24} color={theme.colors.text} />
                            </TouchableOpacity>
                        </View>

                        {selectedOrder && (
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.detailSection}>
                                    <Text style={styles.detailLabel}>STATUS</Text>
                                    <View style={[styles.statusBadge, { backgroundColor: getStatusColor(selectedOrder.status) + '15', alignSelf: 'flex-start' }]}>
                                        <Text style={[styles.statusText, { color: getStatusColor(selectedOrder.status) }]}>{selectedOrder.status}</Text>
                                    </View>
                                </View>

                                <View style={styles.detailSection}>
                                    <Text style={styles.detailLabel}>PATIENT INFORMATION</Text>
                                    <View style={styles.detailRow}>
                                        <User size={18} color={theme.colors.primary} />
                                        <View>
                                            <Text style={styles.detailValue}>{selectedOrder.patient?.name}</Text>
                                            <Text style={styles.detailSub}>{selectedOrder.patient?.phone}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.detailSection}>
                                    <Text style={styles.detailLabel}>LOCATION</Text>
                                    <View style={styles.detailRow}>
                                        <MapPin size={18} color={theme.colors.primary} />
                                        <View>
                                            <Text style={styles.detailValue}>{selectedOrder.city?.name}</Text>
                                            <Text style={styles.detailSub}>{selectedOrder.area?.name || 'Main Center'}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.detailSection}>
                                    <Text style={styles.detailLabel}>ORDER INFO</Text>
                                    <Text style={styles.detailValue}>ID: {selectedOrder.id}</Text>
                                    <Text style={styles.detailSub}>Placed on {new Date(selectedOrder.createdAt).toLocaleString()}</Text>
                                </View>

                                {selectedOrder.distributor && (
                                    <View style={styles.detailSection}>
                                        <Text style={styles.detailLabel}>ASSIGNED DISTRIBUTOR</Text>
                                        <Text style={styles.detailValue}>{selectedOrder.distributor.name}</Text>
                                    </View>
                                )}

                                {selectedOrder.status !== 'DELIVERED' && (
                                    <TouchableOpacity
                                        style={styles.submitTrigger}
                                        onPress={() => {
                                            const order = selectedOrder;
                                            setSelectedOrder(null);
                                            navigation.navigate('Installation', { order });
                                        }}
                                    >
                                        <Plus size={20} color="#fff" />
                                        <Text style={styles.submitTriggerText}>Submit Installation Form</Text>
                                    </TouchableOpacity>
                                )}
                            </ScrollView>
                        )}
                    </View>
                </View>
            </Modal>
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
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: theme.spacing.xl,
        maxHeight: '80%',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing.xl,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
        paddingBottom: 15,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '900',
        color: theme.colors.secondary,
    },
    detailSection: {
        marginBottom: 20,
    },
    detailLabel: {
        fontSize: 10,
        fontWeight: '900',
        color: theme.colors.textLight,
        marginBottom: 8,
        letterSpacing: 1,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    detailValue: {
        fontSize: 16,
        fontWeight: '900',
        color: theme.colors.secondary,
    },
    detailSub: {
        fontSize: 12,
        color: theme.colors.textLight,
        fontWeight: '600',
    },
    submitTrigger: {
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 12,
        marginTop: 20,
        gap: 10,
    },
    submitTriggerText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '900',
    }
});

export default KAMOrders;
