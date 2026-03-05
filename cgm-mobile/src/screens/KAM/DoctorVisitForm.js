import React, { useState } from 'react';
import {
    StyleSheet, View, Text, ScrollView,
    TextInput, TouchableOpacity, SafeAreaView,
    Alert, ActivityIndicator, KeyboardAvoidingView, Platform
} from 'react-native';
import { Stethoscope, Calendar, Save, ArrowLeft } from 'lucide-react-native';
import { theme } from '../../theme';
import { apiService } from '../../services/api';

const DoctorVisitForm = ({ navigation, user }) => {
    const [loading, setLoading] = useState(false);
    const [visitCount, setVisitCount] = useState('');
    const [visitDate, setVisitDate] = useState(new Date().toISOString().split('T')[0]);

    const handleSubmit = async () => {
        if (!visitCount || isNaN(visitCount)) {
            Alert.alert('Invalid Input', 'Please enter a valid number of visits.');
            return;
        }

        try {
            setLoading(true);
            await apiService.recordDoctorVisit({
                kamId: user.id,
                visitCount: parseInt(visitCount),
                visitDate: visitDate
            });
            Alert.alert(
                'Success',
                'Doctor visits recorded successfully.',
                [{ text: 'OK', onPress: () => navigation.goBack() }]
            );
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setLoading(false);
        }
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
                    <Text style={styles.navTitle}>LOG DOCTOR VISITS</Text>
                    <View style={{ width: 40 }} />
                </View>

                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.illustration}>
                        <View style={styles.iconCircle}>
                            <Stethoscope size={40} color={theme.colors.primary} />
                        </View>
                        <Text style={styles.infoText}>Record your daily professional interactions with healthcare providers.</Text>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>DATE OF VISITS</Text>
                            <View style={styles.inputWrapper}>
                                <Calendar size={18} color={theme.colors.textLight} style={styles.icon} />
                                <TextInput
                                    style={styles.input}
                                    value={visitDate}
                                    editable={false}
                                />
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>TOTAL DOCTORS VISITED *</Text>
                            <View style={[styles.inputWrapper, { height: 80 }]}>
                                <TextInput
                                    style={[styles.input, { fontSize: 32, textAlign: 'center' }]}
                                    placeholder="0"
                                    placeholderTextColor={theme.colors.textLight}
                                    value={visitCount}
                                    onChangeText={setVisitCount}
                                    keyboardType="numeric"
                                    autoFocus
                                />
                            </View>
                            <Text style={styles.helperText}>Enter the total number of doctors visited today.</Text>
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
                                <Text style={styles.submitText}>Save Record</Text>
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
        fontSize: 14,
        fontWeight: '900',
        color: theme.colors.secondary,
        letterSpacing: 2,
    },
    backBtn: {
        padding: 5,
    },
    scrollContent: {
        padding: theme.spacing.md,
    },
    illustration: {
        alignItems: 'center',
        marginVertical: 30,
        paddingHorizontal: 40,
    },
    iconCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#EFF6FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    infoText: {
        textAlign: 'center',
        color: theme.colors.textLight,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '500',
    },
    section: {
        backgroundColor: '#fff',
        borderRadius: 24,
        padding: 24,
        marginBottom: theme.spacing.lg,
        borderWidth: 1,
        borderColor: theme.colors.border,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 10,
        fontWeight: '900',
        color: theme.colors.primary,
        marginBottom: 8,
        letterSpacing: 1,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: theme.colors.border,
        paddingHorizontal: 16,
        height: 56,
    },
    icon: {
        marginRight: 12,
    },
    input: {
        flex: 1,
        fontSize: 16,
        fontWeight: '700',
        color: theme.colors.text,
    },
    helperText: {
        fontSize: 11,
        color: theme.colors.textLight,
        marginTop: 8,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    submitButton: {
        backgroundColor: theme.colors.primary,
        height: 64,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        shadowColor: theme.colors.primary,
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

export default DoctorVisitForm;
