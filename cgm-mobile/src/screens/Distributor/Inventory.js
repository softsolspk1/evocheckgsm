import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, ScrollView,
    TextInput, TouchableOpacity, SafeAreaView,
    Alert, Modal, ActivityIndicator, RefreshControl
} from 'react-native';
import { Package, Plus, History, ChevronRight, Save, X } from 'lucide-react-native';
import { theme } from '../../theme';
import { apiService } from '../../services/api';

const DistributorInventory = () => {
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [inventoryList, setInventoryList] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newDeviceCount, setNewDeviceCount] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const fetchData = async () => {
        try {
            const data = await apiService.getInventory();
            setInventoryList(data);
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

    const handleAddInventory = async () => {
        if (!newDeviceCount) {
            Alert.alert('Error', 'Please enter number of devices');
            return;
        }

        setSubmitting(true);
        try {
            // Mocking first distributor ID for mobile demo
            const distributorId = inventoryList[0]?.id || 'dist-001';
            await apiService.addInventory(distributorId, newDeviceCount);
            Alert.alert('Success', `${newDeviceCount} devices added to inventory.`);
            setShowAddModal(false);
            setNewDeviceCount('');
            fetchData();
        } catch (error) {
            Alert.alert('Error', 'Failed to update inventory.');
        } finally {
            setSubmitting(false);
        }
    };

    const totalStock = inventoryList.reduce((acc, curr) => acc + curr.totalStock, 0);
    const availableStock = inventoryList.reduce((acc, curr) => acc + curr.availableStock, 0);

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
                <Text style={styles.title}>Inventory Management</Text>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => setShowAddModal(true)}
                >
                    <Plus size={20} color="#fff" />
                    <Text style={styles.addButtonText}>Add Stock</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                {/* Summary Card */}
                <View style={styles.summaryCard}>
                    <View style={styles.summaryItem}>
                        <Text style={styles.summaryLabel}>Total Stock</Text>
                        <Text style={styles.summaryValue}>{totalStock}</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.summaryItem}>
                        <Text style={styles.summaryLabel}>Available</Text>
                        <Text style={[styles.summaryValue, { color: theme.colors.success }]}>{availableStock}</Text>
                    </View>
                </View>

                <Text style={styles.sectionLabel}>DISTRIBUTOR CENTERS</Text>

                {inventoryList.map((item) => (
                    <View key={item.id} style={styles.inventoryCard}>
                        <View style={styles.cardHeader}>
                            <View style={styles.locationInfo}>
                                <Text style={styles.cityName}>{item.cityName}</Text>
                                <Text style={styles.areaName}>{item.areaName}</Text>
                            </View>
                            <View style={[styles.statusBadge, { backgroundColor: item.availableStock < 20 ? '#FEE2E2' : '#D1FAE5' }]}>
                                <Text style={[styles.statusText, { color: item.availableStock < 20 ? '#B91C1C' : '#047857' }]}>
                                    {item.availableStock < 20 ? 'Low Stock' : 'Healthy'}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.stockDetails}>
                            <View style={styles.stockItem}>
                                <Text style={styles.stockLabel}>TOTAL</Text>
                                <Text style={styles.stockValue}>{item.totalStock}</Text>
                            </View>
                            <View style={styles.stockItem}>
                                <Text style={styles.stockLabel}>AVAILABLE</Text>
                                <Text style={[styles.stockValue, { color: theme.colors.secondary }]}>{item.availableStock}</Text>
                            </View>
                            <View style={styles.stockItem}>
                                <Text style={styles.stockLabel}>ALLOCATED</Text>
                                <Text style={styles.stockValue}>{item.allocatedStock}</Text>
                            </View>
                        </View>
                    </View>
                ))}

                <TouchableOpacity style={styles.historyBtn}>
                    <History size={18} color={theme.colors.textLight} />
                    <Text style={styles.historyText}>View Transaction History</Text>
                    <ChevronRight size={18} color={theme.colors.textLight} />
                </TouchableOpacity>
            </ScrollView>

            {/* Add Inventory Modal */}
            <Modal
                visible={showAddModal}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Update Inventory</Text>
                            <TouchableOpacity onPress={() => setShowAddModal(false)}>
                                <X size={24} color={theme.colors.text} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalBody}>
                            <Text style={styles.inputLabel}>NUMBER OF DEVICES TO ADD</Text>
                            <View style={styles.modalInputWrapper}>
                                <Package size={20} color={theme.colors.textLight} />
                                <TextInput
                                    style={styles.modalInput}
                                    placeholder="Enter quantity"
                                    placeholderTextColor={theme.colors.textLight}
                                    keyboardType="numeric"
                                    value={newDeviceCount}
                                    onChangeText={setNewDeviceCount}
                                />
                            </View>

                            <TouchableOpacity
                                style={[styles.saveButton, submitting && { opacity: 0.7 }]}
                                onPress={handleAddInventory}
                                disabled={submitting}
                            >
                                {submitting ? <ActivityIndicator color="#fff" /> : (
                                    <>
                                        <Save size={20} color="#fff" />
                                        <Text style={styles.saveButtonText}>Add to Stock</Text>
                                    </>
                                )}
                            </TouchableOpacity>
                        </View>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing.lg,
        backgroundColor: theme.colors.surface,
        borderBottomWidth: 1,
        borderColor: theme.colors.border,
    },
    title: {
        fontSize: 20,
        fontWeight: '900',
        color: theme.colors.secondary,
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        paddingHorizontal: theme.spacing.md,
        paddingVertical: 10,
        borderRadius: theme.borderRadius.md,
        gap: 6,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '900',
    },
    scrollContent: {
        padding: theme.spacing.md,
    },
    summaryCard: {
        flexDirection: 'row',
        backgroundColor: theme.colors.secondary,
        borderRadius: theme.borderRadius.lg,
        padding: theme.spacing.lg,
        marginBottom: theme.spacing.xl,
        alignItems: 'center',
    },
    summaryItem: {
        flex: 1,
        alignItems: 'center',
    },
    summaryLabel: {
        color: '#94A3B8',
        fontSize: 10,
        fontWeight: '700',
        textTransform: 'uppercase',
        marginBottom: 4,
    },
    summaryValue: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '900',
    },
    divider: {
        width: 1,
        height: '60%',
        backgroundColor: '#334155',
    },
    sectionLabel: {
        fontSize: 10,
        fontWeight: '900',
        color: theme.colors.textLight,
        marginBottom: theme.spacing.md,
        letterSpacing: 1.5,
    },
    inventoryCard: {
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.md,
        padding: theme.spacing.md,
        borderWidth: 1,
        borderColor: theme.colors.border,
        marginBottom: theme.spacing.md,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
        paddingBottom: theme.spacing.sm,
        marginBottom: theme.spacing.md,
    },
    cityName: {
        fontSize: 16,
        fontWeight: '900',
        color: theme.colors.secondary,
    },
    areaName: {
        fontSize: 12,
        color: theme.colors.textLight,
        fontWeight: '600',
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
    },
    statusText: {
        fontSize: 10,
        fontWeight: '900',
        textTransform: 'uppercase',
    },
    stockDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    stockItem: {
        alignItems: 'center',
    },
    stockLabel: {
        fontSize: 9,
        fontWeight: '800',
        color: theme.colors.textLight,
        marginBottom: 4,
    },
    stockValue: {
        fontSize: 16,
        fontWeight: '900',
        color: theme.colors.text,
    },
    historyBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing.md,
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.md,
        marginTop: theme.spacing.md,
        gap: 12,
    },
    historyText: {
        flex: 1,
        fontSize: 14,
        fontWeight: '700',
        color: theme.colors.text,
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
        minHeight: 350,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing.xl,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: '900',
        color: theme.colors.secondary,
    },
    modalBody: {
        gap: theme.spacing.lg,
    },
    inputLabel: {
        fontSize: 10,
        fontWeight: '900',
        color: theme.colors.primary,
        letterSpacing: 1.5,
    },
    modalInputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.md,
        borderWidth: 1.5,
        borderColor: theme.colors.border,
        paddingHorizontal: theme.spacing.md,
        height: 64,
        gap: 12,
    },
    modalInput: {
        flex: 1,
        fontSize: 18,
        fontWeight: '700',
        color: theme.colors.text,
    },
    saveButton: {
        backgroundColor: theme.colors.secondary,
        height: 64,
        borderRadius: theme.borderRadius.md,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.sm,
        marginTop: theme.spacing.md,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '900',
    }
});

export default DistributorInventory;
