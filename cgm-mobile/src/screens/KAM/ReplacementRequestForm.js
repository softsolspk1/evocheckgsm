import React, { useState } from 'react';
import {
    StyleSheet, View, Text, ScrollView,
    TextInput, TouchableOpacity, SafeAreaView,
    Alert, ActivityIndicator, KeyboardAvoidingView, Platform
} from 'react-native';
import { RotateCcw, Search, Save, ArrowLeft, Calendar, FileText, Camera } from 'lucide-react-native';
import { theme } from '../../theme';
import { apiService } from '../../services/api';
import * as ImagePicker from 'expo-image-picker';

const ReplacementRequestForm = ({ navigation, user }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        kamId: user.id,
        patientName: '',
        month: '',
        cgmSerialNumber: '',
        daysRemaining: '',
        reason: 'DEFECTIVE',
        appPicture: null,
        boxPicture: null,
        armPicture: null
    });

    const pickImage = async (field) => {
        Alert.alert(
            'Select Image Source',
            'Choose where you want to pick the image from:',
            [
                {
                    text: 'Camera',
                    onPress: () => launchCamera(field)
                },
                {
                    text: 'Media Library',
                    onPress: () => launchLibrary(field)
                },
                {
                    text: 'Cancel',
                    style: 'cancel'
                }
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
            aspect: [1, 1],
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
            Alert.alert('Permission needed', 'Sorry, we need camera roll permissions to upload images.');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
            base64: true
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            setFormData({ ...formData, [field]: `data:image/jpeg;base64,${result.assets[0].base64}` });
        }
    };

    const handleSubmit = async () => {
        if (!formData.cgmSerialNumber || !formData.month || !formData.daysRemaining) {
            Alert.alert('Required Fields', 'Please fill Serial Number, Month and Days Remaining.');
            return;
        }

        try {
            setLoading(true);
            await apiService.createReplacementRequest(formData);
            Alert.alert(
                'Request Submitted',
                'Your replacement request has been sent for approval.',
                [{ text: 'OK', onPress: () => navigation.goBack() }]
            );
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setLoading(false);
        }
    };

    const renderInput = (label, key, placeholder, icon, keyboardType = 'default', maxLength = null) => {
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
                        maxLength={maxLength}
                    />
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <View style={styles.navHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <ArrowLeft size={24} color={theme.colors.secondary} />
                    </TouchableOpacity>
                    <Text style={styles.navTitle}>REPLACEMENT REQUEST</Text>
                    <View style={{ width: 40 }} />
                </View>

                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.section}>
                        {renderInput('PATIENT NAME', 'patientName', 'Full Name', Search)}
                        {renderInput('REPLACEMENT MONTH *', 'month', 'e.g. March 2026', Calendar)}
                        <View style={styles.inputGroup}>
                            <Text style={[styles.label, { color: theme.colors.secondary }]}>CGM SERIAL NUMBER (10 CHARS) *</Text>
                            <View style={[styles.inputWrapper, { borderColor: theme.colors.secondary, borderWidth: 2 }]}>
                                <Search size={18} color={theme.colors.secondary} style={styles.icon} />
                                <TextInput
                                    style={[styles.input, { fontWeight: '900', letterSpacing: 2 }]}
                                    placeholder="SNXXXXXXXX"
                                    placeholderTextColor={theme.colors.textLight}
                                    value={formData.cgmSerialNumber}
                                    maxLength={10}
                                    autoCapitalize="characters"
                                    onChangeText={(text) => setFormData({ ...formData, cgmSerialNumber: text.toUpperCase() })}
                                />
                            </View>
                        </View>
                        {renderInput('DAYS REMAINING *', 'daysRemaining', 'Days left on current sensor', FileText, 'numeric')}

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>REASON FOR REPLACEMENT</Text>
                            <View style={styles.selectionRow}>
                                {['DEFECTIVE', 'INACCURATE', 'OTHER'].map((reason) => (
                                    <TouchableOpacity
                                        key={reason}
                                        style={[
                                            styles.selectionChip,
                                            formData.reason === reason && styles.selectionChipActive
                                        ]}
                                        onPress={() => setFormData({ ...formData, reason })}
                                    >
                                        <Text style={[
                                            styles.selectionChipText,
                                            formData.reason === reason && styles.selectionChipTextActive
                                        ]}>{reason}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>IMAGE EVIDENCE (REQUIRED)</Text>

                        <View style={styles.imageUploadRow}>
                            <TouchableOpacity style={styles.imageUploadBtn} onPress={() => pickImage('appPicture')}>
                                <Camera size={24} color={formData.appPicture ? theme.colors.success : theme.colors.primary} />
                                <Text style={styles.imageUploadText}>App Dashboard</Text>
                                {formData.appPicture && <Text style={styles.uploadedText}>Uploaded ✓</Text>}
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.imageUploadBtn} onPress={() => pickImage('boxPicture')}>
                                <Camera size={24} color={formData.boxPicture ? theme.colors.success : theme.colors.primary} />
                                <Text style={styles.imageUploadText}>Box Serial Number</Text>
                                {formData.boxPicture && <Text style={styles.uploadedText}>Uploaded ✓</Text>}
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.imageUploadBtn} onPress={() => pickImage('armPicture')}>
                                <Camera size={24} color={formData.armPicture ? theme.colors.success : theme.colors.primary} />
                                <Text style={styles.imageUploadText}>Device on Arm</Text>
                                {formData.armPicture && <Text style={styles.uploadedText}>Uploaded ✓</Text>}
                            </TouchableOpacity>
                        </View>
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
                                <Text style={styles.submitText}>Submit Request</Text>
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
    navHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    navTitle: {
        fontSize: 12,
        fontWeight: '900',
        color: theme.colors.secondary,
        letterSpacing: 1,
    },
    backBtn: {
        padding: 5,
    },
    scrollContent: {
        padding: theme.spacing.md,
    },
    section: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: theme.spacing.md,
        marginBottom: theme.spacing.lg,
        borderWidth: 1,
        borderColor: theme.colors.border,
    },
    sectionTitle: {
        fontSize: 11,
        fontWeight: '900',
        color: theme.colors.primary,
        marginBottom: 16,
        letterSpacing: 1,
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
    selectionRow: {
        flexDirection: 'row',
        gap: 8,
        marginTop: 4,
    },
    selectionChip: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: theme.colors.background,
        borderWidth: 1,
        borderColor: theme.colors.border,
    },
    selectionChipActive: {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
    },
    selectionChipText: {
        fontSize: 10,
        fontWeight: '800',
        color: theme.colors.text,
    },
    selectionChipTextActive: {
        color: '#fff',
    },
    submitButton: {
        backgroundColor: theme.colors.secondary,
        height: 60,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.sm,
        shadowColor: theme.colors.secondary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    submitText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '900',
    },
    imageUploadRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
    },
    imageUploadBtn: {
        flex: 1,
        borderWidth: 1,
        borderColor: theme.colors.border,
        borderStyle: 'dashed',
        borderRadius: 12,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.surface,
        minHeight: 110,
    },
    imageUploadText: {
        fontSize: 10,
        fontWeight: '800',
        color: theme.colors.textLight,
        marginTop: 8,
        textAlign: 'center',
    },
    uploadedText: {
        fontSize: 9,
        fontWeight: '900',
        color: theme.colors.success,
        marginTop: 4,
    }
});

export default ReplacementRequestForm;
