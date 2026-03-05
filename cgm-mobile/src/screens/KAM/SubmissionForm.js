import React, { useState } from 'react';
import { Calendar, Clock, User, Hash, MapPin, ChevronDown, Save, X } from 'lucide-react-native';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Alert, Platform, Modal, ActivityIndicator } from 'react-native';
import { theme } from '../../theme';
import { apiService } from '../../services/api';

const SubmissionForm = ({ route, navigation, user }) => {
    const orderData = route.params?.order || {};

    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([]);
    const [searching, setSearching] = useState(false);
    const [formData, setFormData] = useState({
        orderId: orderData.id || '',
        kamName: user?.name || '',
        kamEmployeeCode: user?.employeeCode || '',
        region: orderData.city?.region || '',
        city: orderData.city?.name || '',
        area: orderData.area?.name || '',
        referredBy: '',
        referralCode: '',
        referralTeam: '',
        doctorName: orderData.doctorName || '',
        doctorCode: '000000',
        serviceProvider: orderData.distributor?.name || '',
        patientName: orderData.patient?.name || '',
        patientArea: orderData.area?.name || '',
        sensorInstalledBy: user?.name || '',
        visitDate: new Date().toISOString().split('T')[0],
        visitTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        numberOfDevices: '1',
        patientEmail: orderData.patient?.email || '',
        patientWhatsApp: orderData.patient?.phone || '',
        patientAddress: orderData.patient?.address || '',
        firstActivationDate: new Date().toISOString().split('T')[0],
        comments: '',
        serialNumber: '',
        reminder: false
    });

    React.useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const data = await apiService.getOrders({ kamId: user.id });
            setOrders(data.filter(o => o.status !== 'DELIVERED'));
        } catch (error) {
            console.error('Failed to fetch orders:', error);
        }
    };

    const handleOrderSelect = (order) => {
        setFormData({
            ...formData,
            orderId: order.id,
            region: order.city?.region || '',
            city: order.city?.name || '',
            area: order.area?.name || '',
            doctorName: order.doctorName || '',
            serviceProvider: order.distributor?.name || '',
            patientName: order.patient?.name || '',
            patientArea: order.area?.name || '',
            patientEmail: order.patient?.email || '',
            patientWhatsApp: order.patient?.phone || '',
            patientAddress: order.patient?.address || '',
        });
        setSearching(false);
    };

    const handleSubmit = async () => {
        if (!formData.orderId) {
            Alert.alert('Selection Required', 'Please select an order to submit installation data.');
            return;
        }

        if (!formData.serialNumber || formData.serialNumber.length !== 10) {
            Alert.alert('Invalid Serial', 'Serial Number must be exactly 10 characters.');
            return;
        }

        try {
            setLoading(true);
            await apiService.submitInstallation(formData);
            Alert.alert(
                'Submission Successful',
                'Installation data has been synchronized with the ecosystem.',
                [{ text: 'OK', onPress: () => navigation.goBack() }]
            );
        } catch (error) {
            Alert.alert('Submission Failed', error.message);
        } finally {
            setLoading(false);
        }
    };

    const renderInput = (label, key, placeholder, icon, keyboardType = 'default') => {
        const Icon = icon;
        return (
            <View style={styles.inputGroup}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.inputWrapper}>
                    {Icon && <Icon size={18} color={theme.colors.textLight} style={styles.icon} />}
                    <TextInput
                        style={styles.input}
                        placeholder={placeholder}
                        placeholderTextColor={theme.colors.textLight}
                        value={formData[key]}
                        onChangeText={(text) => setFormData({ ...formData, [key]: text })}
                        keyboardType={keyboardType}
                    />
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Device Installation Form</Text>
                <Text style={styles.timestamp}>Session: {formData.visitDate} {formData.visitTime}</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {!formData.orderId ? (
                    <View style={styles.warningBox}>
                        <Text style={styles.warningText}>⚠️ No Order Selected</Text>
                        <TouchableOpacity style={styles.searchBtn} onPress={() => setSearching(true)}>
                            <Text style={styles.searchBtnText}>Search Pending Orders</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.successBox}>
                        <Text style={styles.successText}>✅ Linked to Order: {formData.orderId.split('-')[0].toUpperCase()}</Text>
                        <TouchableOpacity onPress={() => setSearching(true)}>
                            <Text style={styles.changeLinkText}>Change Order</Text>
                        </TouchableOpacity>
                    </View>
                )}

                <Modal visible={searching} animationType="slide" transparent={true}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <View style={styles.modalHeader}>
                                <Text style={styles.modalTitle}>Select Pending Order</Text>
                                <TouchableOpacity onPress={() => setSearching(false)}>
                                    <X size={24} color={theme.colors.text} />
                                </TouchableOpacity>
                            </View>
                            <ScrollView>
                                {orders.length > 0 ? orders.map(order => (
                                    <TouchableOpacity
                                        key={order.id}
                                        style={styles.orderListItem}
                                        onPress={() => handleOrderSelect(order)}
                                    >
                                        <View>
                                            <Text style={styles.orderListId}>ID: {order.id.split('-')[0].toUpperCase()}</Text>
                                            <Text style={styles.orderListName}>{order.patient?.name}</Text>
                                        </View>
                                        <ChevronDown size={16} color={theme.colors.border} />
                                    </TouchableOpacity>
                                )) : (
                                    <Text style={styles.emptyText}>No pending orders found.</Text>
                                )}
                            </ScrollView>
                        </View>
                    </View>
                </Modal>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>1. Identity & Location</Text>
                    {renderInput('KAM/DE NAME', 'kamName', 'Name', User)}
                    {renderInput('EMPLOYEE CODE', 'kamEmployeeCode', 'Code', Hash)}
                    <View style={{ opacity: 0.6 }}>
                        {renderInput('REGION', 'region', 'Region', MapPin)}
                        <View style={styles.row}>
                            <View style={{ flex: 1 }}>{renderInput('CITY', 'city', 'City', MapPin)}</View>
                            <View style={{ flex: 1 }}>{renderInput('AREA', 'area', 'Area', MapPin)}</View>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>2. Referral Information</Text>
                    {renderInput('REFERRED BY (SM/RTL)', 'referredBy', 'Standard Name', User)}
                    {renderInput('REFERRAL CODE', 'referralCode', 'Code')}
                    {renderInput('REFERRAL TEAM', 'referralTeam', 'Team Name')}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>3. Clinical Information</Text>
                    {renderInput('DOCTOR NAME', 'doctorName', 'Dr. Name', User)}
                    {renderInput('DOCTOR CODE', 'doctorCode', '000000', Hash)}
                    {renderInput('SERVICE PROVIDER (DISTRIBUTOR)', 'serviceProvider', 'Select Distributor', MapPin)}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>4. Patient Information</Text>
                    {renderInput('PATIENT NAME', 'patientName', 'Full Name', User)}
                    {renderInput('PATIENT AREA', 'patientArea', 'Area Name', MapPin)}
                    {renderInput('PATIENT EMAIL', 'patientEmail', 'email@example.com', null, 'email-address')}
                    {renderInput('WHATSAPP NUMBER', 'patientWhatsApp', '+92', null, 'phone-pad')}
                    {renderInput('HOME ADDRESS', 'patientAddress', 'Residential Address', MapPin)}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>5. Installation Details</Text>
                    {renderInput('SENSOR INSTALLED BY', 'sensorInstalledBy', 'Name')}

                    <View style={styles.row}>
                        <View style={{ flex: 1 }}>{renderInput('VISIT DATE', 'visitDate', 'YYYY-MM-DD', Calendar)}</View>
                        <View style={{ flex: 1 }}>{renderInput('VISIT TIME', 'visitTime', 'HH:MM', Clock)}</View>
                    </View>

                    {renderInput('NUMBER OF DEVICES', 'numberOfDevices', '1', Hash, 'numeric')}

                    <View style={styles.inputGroup}>
                        <Text style={[styles.label, { color: theme.colors.secondary }]}>CGM SERIAL NUMBER (10 CHARS) *</Text>
                        <View style={[styles.inputWrapper, { borderColor: theme.colors.secondary, borderWidth: 2 }]}>
                            <Hash size={18} color={theme.colors.secondary} style={styles.icon} />
                            <TextInput
                                style={[styles.input, { fontWeight: '900', letterSpacing: 2 }]}
                                placeholder="SNXXXXXXXX"
                                placeholderTextColor={theme.colors.textLight}
                                value={formData.serialNumber}
                                maxLength={10}
                                autoCapitalize="characters"
                                onChangeText={(text) => setFormData({ ...formData, serialNumber: text.toUpperCase() })}
                            />
                        </View>
                    </View>

                    {renderInput('FIRST ACTIVATION DATE', 'firstActivationDate', 'YYYY-MM-DD', Calendar)}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>6. Feedback & Reminders</Text>
                    <View style={[styles.inputGroup, { height: 100 }]}>
                        <Text style={styles.label}>COMMENTS / FEEDBACK</Text>
                        <View style={[styles.inputWrapper, { height: 80, alignItems: 'flex-start', paddingTop: 12 }]}>
                            <TextInput
                                style={[styles.input, { textAlignVertical: 'top' }]}
                                multiline
                                placeholder="Write any feedback here..."
                                placeholderTextColor={theme.colors.textLight}
                                value={formData.comments}
                                onChangeText={(text) => setFormData({ ...formData, comments: text })}
                            />
                        </View>
                    </View>
                    {renderInput('KAM REMINDER', 'reminder', 'Notes...')}
                </View>

                <TouchableOpacity
                    style={[styles.submitButton, loading && { opacity: 0.7 }]}
                    onPress={handleSubmit}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <>
                            <Save size={20} color="#fff" />
                            <Text style={styles.submitText}>Submit Installation Data</Text>
                        </>
                    )}
                </TouchableOpacity>

                <View style={{ height: 40 }} />
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
    timestamp: {
        fontSize: 10,
        fontWeight: '700',
        color: theme.colors.textLight,
        marginTop: 4,
        textTransform: 'uppercase',
    },
    scrollContent: {
        padding: theme.spacing.md,
    },
    section: {
        marginBottom: theme.spacing.xl,
        backgroundColor: '#fff',
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '900',
        color: theme.colors.primary,
        marginBottom: theme.spacing.md,
        letterSpacing: 0.5,
    },
    warningBox: {
        backgroundColor: '#FFFBEB',
        padding: 16,
        borderRadius: 12,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#FEF3C7',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    warningText: {
        fontSize: 12,
        color: '#B45309',
        fontWeight: '700',
    },
    successBox: {
        backgroundColor: '#F0FDF4',
        padding: 16,
        borderRadius: 12,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#DCFCE7',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    successText: {
        fontSize: 12,
        color: '#166534',
        fontWeight: '700',
    },
    changeLinkText: {
        fontSize: 11,
        color: theme.colors.primary,
        fontWeight: '800',
        textDecorationLine: 'underline',
    },
    searchBtn: {
        backgroundColor: '#B45309',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
    },
    searchBtnText: {
        color: '#fff',
        fontSize: 11,
        fontWeight: '800',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 20,
        maxHeight: '70%',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '900',
        color: theme.colors.secondary,
    },
    orderListItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    orderListId: {
        fontSize: 14,
        fontWeight: '900',
        color: theme.colors.primary,
    },
    orderListName: {
        fontSize: 12,
        fontWeight: '600',
        color: theme.colors.text,
    },
    emptyText: {
        textAlign: 'center',
        padding: 20,
        color: theme.colors.textLight,
        fontWeight: '600',
    },
    row: {
        flexDirection: 'row',
        gap: theme.spacing.md,
    },
    inputGroup: {
        marginBottom: theme.spacing.md,
    },
    label: {
        fontSize: 9,
        fontWeight: '900',
        color: theme.colors.textLight,
        marginBottom: 6,
        letterSpacing: 1,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.md,
        borderWidth: 1,
        borderColor: theme.colors.border,
        paddingHorizontal: theme.spacing.md,
        height: 56,
    },
    icon: {
        marginRight: theme.spacing.sm,
    },
    input: {
        flex: 1,
        fontSize: 14,
        fontWeight: '600',
        color: theme.colors.text,
    },
    submitButton: {
        backgroundColor: theme.colors.secondary,
        height: 64,
        borderRadius: theme.borderRadius.md,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.sm,
        marginTop: theme.spacing.md,
        shadowColor: theme.colors.secondary,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 10,
    },
    submitText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '900',
    }
});

export default SubmissionForm;
