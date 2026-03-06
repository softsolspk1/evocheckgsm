import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, ScrollView,
    TextInput, TouchableOpacity, SafeAreaView,
    Alert, ActivityIndicator, KeyboardAvoidingView, Platform
} from 'react-native';
import { ShoppingBag, User, Phone, MapPin, Search, PlusCircle, Save, Camera } from 'lucide-react-native';
import { theme } from '../theme';
import { apiService } from '../services/api';
import Dropdown from '../components/Dropdown';
import * as ImagePicker from 'expo-image-picker';

const OrderForm = ({ navigation, user }) => {
    const [loading, setLoading] = useState(false);
    const [fetchingData, setFetchingData] = useState(true);
    const [cities, setCities] = useState([]);
    const [distributors, setDistributors] = useState([]);

    const [formData, setFormData] = useState({
        orderType: 'REGULAR',
        patientName: '',
        patientPhone: '',
        patientEmail: '',
        patientAddress: '',
        age: '',
        gender: '',
        cityId: '',
        distributorId: '',
        doctorName: '',
        doctorCity: '',
        clinicHospital: '',
        product: '',
        serialNumber: '',
        startingMonth: '',
        quantity: '',
        prescription: '',
        orderTo: 'PREMIER',
        source: 'MOBILE',
        kamId: user?.id || ''
    });

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const [citiesData, distData] = await Promise.all([
                apiService.getCities(),
                apiService.getDistributors()
            ]);
            setCities(citiesData || []);
            setDistributors(distData || []);
        } catch (error) {
            console.error('Data load error:', error);
            Alert.alert('System Error', 'Failed to load cities/distributors data.');
        } finally {
            setFetchingData(false);
        }
    };

    const pickImage = async (field) => {
        Alert.alert(
            'Prescription Source',
            'Choose where you want to pick the prescription from:',
            [
                { text: 'Camera', onPress: () => launchCamera(field) },
                { text: 'Media Library', onPress: () => launchLibrary(field) },
                { text: 'Cancel', style: 'cancel' }
            ]
        );
    };

    const launchCamera = async (field) => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission needed', 'Sorry, we need camera permissions to take photos.');
            return;
        }
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 0.5,
            base64: true
        });
        if (!result.canceled && result.assets && result.assets.length > 0) {
            setFormData({ ...formData, [field]: `data:image/jpeg;base64,${result.assets[0].base64}` });
        }
    };

    const launchLibrary = async (field) => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission needed', 'Sorry, we need camera roll permissions.');
            return;
        }
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 0.5,
            base64: true
        });
        if (!result.canceled && result.assets && result.assets.length > 0) {
            setFormData({ ...formData, [field]: `data:image/jpeg;base64,${result.assets[0].base64}` });
        }
    };

    const handleSubmit = async () => {
        // Validation
        const isFOC = formData.orderType === 'FOC';

        if (!isFOC && (!formData.patientName || !formData.patientPhone || !formData.cityId)) {
            Alert.alert('Fields Required', 'Patient Name, Phone, and City are required for Regular Orders.');
            return;
        }

        if (!formData.orderTo || !formData.serialNumber || !formData.product || !formData.distributorId) {
            Alert.alert('Fields Required', 'Order To, Distributor, Product and Serial Number are required.');
            return;
        }

        if (formData.serialNumber.length !== 10) {
            Alert.alert('Invalid Serial', 'Serial Number must be exactly 10 characters.');
            return;
        }

        try {
            setLoading(true);

            // Prepare payload
            const submitData = { ...formData };
            if (isFOC) {
                submitData.patientName = `FOC Patient - ${formData.doctorName || 'Dr'}`;
                submitData.patientPhone = '00000000000';
                submitData.cityId = formData.cityId || cities[0]?.id; // Ensure some city is passed to avoid backend crash
            }

            await apiService.createOrder(submitData);
            Alert.alert(
                'Order Placed',
                'New order has been successfully synchronized.',
                [{ text: 'OK', onPress: () => navigation.goBack() }]
            );
        } catch (error) {
            Alert.alert('Order Failed', error.message);
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

    // Dropdown replaced renderSelect

    if (fetchingData) {
        return (
            <View style={[styles.container, styles.center]}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.header}>
                        <Text style={styles.subtitle}>ORDER CONFIGURATION</Text>
                    </View>

                    <View style={styles.section}>
                        <Dropdown
                            label="ORDER TYPE *"
                            data={[
                                { id: 'REGULAR', name: 'Regular Order' },
                                { id: 'FOC', name: 'FOC' }
                            ]}
                            value={formData.orderType}
                            onSelect={(val) => setFormData({ ...formData, orderType: val })}
                            placeholder="Select Type"
                        />
                    </View>

                    {formData.orderType !== 'FOC' && (
                        <>
                            <View style={styles.header}>
                                <Text style={styles.subtitle}>PATIENT DETAILS</Text>
                            </View>

                            <View style={styles.section}>
                                {renderInput('PHONE NUMBER *', 'patientPhone', '03xx-xxxxxxx', Phone, 'phone-pad')}
                                {renderInput('PATIENT NAME *', 'patientName', 'Full Name', User)}
                                <View style={{ flexDirection: 'row', gap: 12 }}>
                                    <View style={{ flex: 1 }}>{renderInput('AGE', 'age', 'Age', User, 'numeric')}</View>
                                    <View style={{ flex: 1 }}>
                                        <Dropdown
                                            label="GENDER"
                                            data={[{ id: 'Male', name: 'Male' }, { id: 'Female', name: 'Female' }]}
                                            value={formData.gender}
                                            onSelect={(val) => setFormData({ ...formData, gender: val })}
                                            placeholder="Gender"
                                        />
                                    </View>
                                </View>
                                <Dropdown
                                    label="SELECT CITY *"
                                    data={cities}
                                    value={formData.cityId}
                                    onSelect={(val) => setFormData({ ...formData, cityId: val })}
                                    placeholder="City"
                                />
                                {renderInput('HOME ADDRESS', 'patientAddress', 'Residential Address', MapPin)}
                            </View>
                        </>
                    )}

                    <View style={styles.header}>
                        <Text style={styles.subtitle}>PROFESSIONAL INFO</Text>
                    </View>

                    <View style={styles.section}>
                        {renderInput('DOCTOR NAME', 'doctorName', 'Dr. Name', Search)}
                        {renderInput('CLINIC / HOSPITAL', 'clinicHospital', 'Clinic/Hospital Name', MapPin)}
                        {renderInput('DOCTOR CITY', 'doctorCity', 'City', MapPin)}
                        <Dropdown
                            label="PRODUCT *"
                            data={[
                                { id: 'EVOCHECK PREMIUM LINX CGM 1S - Rs.12900', name: 'EVOCHECK PREMIUM LINX CGM 1S' }
                            ]}
                            value={formData.product}
                            onSelect={(val) => setFormData({ ...formData, product: val })}
                            placeholder="Select Product"
                        />
                        <View style={styles.inputGroup}>
                            <Text style={[styles.label, { color: theme.colors.secondary }]}>SERIAL NUMBER (10 CHARS) *</Text>
                            <View style={[styles.inputWrapper, { borderColor: theme.colors.secondary, borderWidth: 2 }]}>
                                <Search size={18} color={theme.colors.secondary} style={styles.icon} />
                                <TextInput
                                    style={[styles.input, { fontWeight: '900', letterSpacing: 2 }]}
                                    placeholder="SNXXXXXXXX"
                                    maxLength={10}
                                    autoCapitalize="characters"
                                    value={formData.serialNumber}
                                    onChangeText={(text) => setFormData({ ...formData, serialNumber: text.toUpperCase() })}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 12 }}>
                            <View style={{ flex: 1 }}>
                                <Dropdown
                                    label="STARTING MONTH"
                                    data={Array.from({ length: 12 }, (_, i) => ({ id: new Date(0, i).toLocaleString('en', { month: 'long' }), name: new Date(0, i).toLocaleString('en', { month: 'long' }) }))}
                                    value={formData.startingMonth}
                                    onSelect={(val) => setFormData({ ...formData, startingMonth: val })}
                                    placeholder="Select Month"
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Dropdown
                                    label="QTY"
                                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(q => ({ id: q.toString(), name: q.toString() }))}
                                    value={formData.quantity}
                                    onSelect={(val) => setFormData({ ...formData, quantity: val })}
                                    placeholder="Qty"
                                />
                            </View>
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>PRESCRIPTION (REQUIRED) *</Text>
                            <TouchableOpacity
                                style={[styles.inputWrapper, formData.prescription && { borderColor: theme.colors.success }]}
                                onPress={() => pickImage('prescription')}
                            >
                                <Camera size={18} color={formData.prescription ? theme.colors.success : theme.colors.textLight} style={styles.icon} />
                                <Text style={[styles.input, { color: formData.prescription ? theme.colors.success : theme.colors.textLight }]}>
                                    {formData.prescription ? 'Prescription Uploaded ✓' : 'Select Photo / Camera'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.header}>
                        <Text style={styles.subtitle}>ORDER DESTINATION</Text>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>ORDER TO *</Text>
                            <View style={styles.selectionRow}>
                                <TouchableOpacity
                                    style={[
                                        styles.selectionChip,
                                        formData.orderTo === 'PREMIER' && styles.selectionChipActive
                                    ]}
                                    onPress={() => setFormData({ ...formData, orderTo: 'PREMIER', distributorId: '' })}
                                >
                                    <Text style={[
                                        styles.selectionChipText,
                                        formData.orderTo === 'PREMIER' && styles.selectionChipTextActive
                                    ]}>Premier</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.selectionChip,
                                        formData.orderTo === 'SERVICE_PROVIDER' && styles.selectionChipActive
                                    ]}
                                    onPress={() => setFormData({ ...formData, orderTo: 'SERVICE_PROVIDER', distributorId: '' })}
                                >
                                    <Text style={[
                                        styles.selectionChipText,
                                        formData.orderTo === 'SERVICE_PROVIDER' && styles.selectionChipTextActive
                                    ]}>Service Provider</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Dropdown
                            label="SELECT DISTRIBUTOR"
                            data={distributors.filter(d => d.type === (formData.orderTo === 'PREMIER' ? 'PREMIER' : 'SERVICE_PROVIDER'))}
                            value={formData.distributorId}
                            onSelect={(val) => setFormData({ ...formData, distributorId: val })}
                            placeholder="Select Distributor"
                        />
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
                                <Text style={styles.submitText}>Submit Order</Text>
                            </>
                        )}
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
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
    scrollContent: {
        padding: theme.spacing.md,
    },
    header: {
        marginTop: theme.spacing.md,
        marginBottom: theme.spacing.sm,
        paddingHorizontal: 4,
    },
    subtitle: {
        fontSize: 10,
        fontWeight: '900',
        color: theme.colors.primary,
        letterSpacing: 2,
    },
    section: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: theme.spacing.md,
        marginBottom: theme.spacing.lg,
        borderWidth: 1,
        borderColor: theme.colors.border,
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
        backgroundColor: theme.colors.background,
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
    selectScrollWrapper: {
        marginTop: 4,
    },
    selectionRow: {
        flexDirection: 'row',
        gap: 8,
    },
    selectionChip: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
        backgroundColor: theme.colors.background,
        borderWidth: 1,
        borderColor: theme.colors.border,
    },
    selectionChipActive: {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
    },
    selectionChipText: {
        fontSize: 12,
        fontWeight: '700',
        color: theme.colors.text,
    },
    selectionChipTextActive: {
        color: '#fff',
    },
    submitButton: {
        backgroundColor: theme.colors.secondary,
        height: 64,
        borderRadius: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.sm,
        marginTop: theme.spacing.md,
        marginBottom: 40,
        shadowColor: theme.colors.secondary,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 8,
    },
    submitText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '900',
    }
});

export default OrderForm;
