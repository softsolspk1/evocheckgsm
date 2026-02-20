import React, { useState } from 'react';
import {
    StyleSheet, View, Text, ScrollView,
    TextInput, TouchableOpacity, SafeAreaView,
    Alert, Platform
} from 'react-native';
import { Calendar, Clock, User, Hash, MapPin, ChevronDown, Save } from 'lucide-react-native';
import { theme } from '../../theme';

const SubmissionForm = () => {
    const [formData, setFormData] = useState({
        kamName: 'Shahid Mehmood',
        kamCode: 'S01090176',
        region: '',
        city: '',
        area: '',
        referredBy: '',
        referralCode: '',
        referralTeam: '',
        doctorName: '',
        doctorCode: '000000',
        distributor: '',
        patientName: '',
        patientArea: '',
        installedBy: '',
        visitDate: new Date().toLocaleDateString(),
        visitTime: new Date().toLocaleTimeString(),
        deviceCount: '1',
        patientEmail: '',
        patientWhatsApp: '',
        activationDate: '',
        comments: '',
        serialNumber: '',
        reminder: ''
    });

    const handleSubmit = () => {
        Alert.alert('Form Submitted', 'Data has been successfully synched with the ecosystem.');
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
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>1. Identity & Location</Text>
                    {renderInput('KAM/DE NAME', 'kamName', 'Name', User)}
                    {renderInput('EMPLOYEE CODE', 'kamCode', 'Code', Hash)}
                    {renderInput('REGION', 'region', 'Select Region', MapPin)}

                    <View style={styles.row}>
                        <View style={{ flex: 1 }}>{renderInput('CITY', 'city', 'Select City', ChevronDown)}</View>
                        <View style={{ flex: 1 }}>{renderInput('AREA', 'area', 'Select Area', ChevronDown)}</View>
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
                    {renderInput('SERVICE PROVIDER (DISTRIBUTOR)', 'distributor', 'Select Distributor', MapPin)}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>4. Patient Information</Text>
                    {renderInput('PATIENT NAME', 'patientName', 'Full Name', User)}
                    {renderInput('PATIENT AREA', 'patientArea', 'Area Name', MapPin)}
                    {renderInput('PATIENT EMAIL', 'patientEmail', 'email@example.com', null, 'email-address')}
                    {renderInput('WHATSAPP NUMBER', 'patientWhatsApp', '+92', null, 'phone-pad')}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>5. Installation Details</Text>
                    {renderInput('SENSOR INSTALLED BY', 'installedBy', 'Name')}

                    <View style={styles.row}>
                        <View style={{ flex: 1 }}>{renderInput('VISIT DATE', 'visitDate', 'Date', Calendar)}</View>
                        <View style={{ flex: 1 }}>{renderInput('VISIT TIME', 'visitTime', 'Time', Clock)}</View>
                    </View>

                    {renderInput('NUMBER OF DEVICES', 'deviceCount', '1', Hash, 'numeric')}
                    {renderInput('CGM SERIAL NUMBER', 'serialNumber', 'SN-XXXXX')}
                    {renderInput('FIRST ACTIVATION DATE', 'activationDate', 'Date', Calendar)}
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

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Save size={20} color="#fff" />
                    <Text style={styles.submitText}>Submit Installation Data</Text>
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
