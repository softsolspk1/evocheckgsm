import React, { useState } from 'react';
import {
    StyleSheet, View, Text, TextInput,
    TouchableOpacity, Image, KeyboardAvoidingView,
    Platform, ActivityIndicator, Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Mail, Lock, ArrowRight } from 'lucide-react-native';
import { theme } from '../theme';
import { apiService } from '../services/api';

const LoginScreen = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter both email and password');
            return;
        }

        setLoading(true);
        try {
            const userData = await apiService.login(email, password);
            await AsyncStorage.setItem('user', JSON.stringify(userData));
            onLogin(userData);
        } catch (error) {
            Alert.alert('Authentication Failed', error.message || 'Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.inner}>
                <View style={styles.logoContainer}>
                    <View style={styles.logoWrapper}>
                        <Image
                            source={require('../../assets/logo.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.versionChip}>v1.0.0</Text>
                </View>

                <View style={styles.header}>
                    <Text style={styles.title}>CGM APP</Text>
                    <Text style={styles.subtitle}>Enter your credentials to access the ecosystem.</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>EMAIL ADDRESS</Text>
                        <View style={styles.inputWrapper}>
                            <Mail size={20} color={theme.colors.textLight} style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="name@pharmevo.biz"
                                placeholderTextColor={theme.colors.textLight}
                                value={email}
                                onChangeText={setEmail}
                                autoCapitalize="none"
                                keyboardType="email-address"
                            />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>SECURITY KEY</Text>
                        <View style={styles.inputWrapper}>
                            <Lock size={20} color={theme.colors.textLight} style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="••••••••"
                                placeholderTextColor={theme.colors.textLight}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </View>
                    </View>

                    <TouchableOpacity
                        style={[styles.button, loading && styles.buttonDisabled]}
                        onPress={handleLogin}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color="#fff" />
                        ) : (
                            <>
                                <Text style={styles.buttonText}>Authorize Session</Text>
                                <ArrowRight size={20} color="#fff" />
                            </>
                        )}
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Secure Instance • © 2026 PharmEvo</Text>
                    <Text style={[styles.footerText, { marginTop: 4, color: theme.colors.primary }]}>Developed by Softsols - Digital AI Solution</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    inner: {
        flex: 1,
        padding: theme.spacing.xl,
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: theme.spacing.xl,
    },
    logoWrapper: {
        backgroundColor: '#fff',
        padding: theme.spacing.md,
        borderRadius: theme.borderRadius.lg,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 5,
    },
    logo: {
        width: 150,
        height: 50,
    },
    versionChip: {
        marginTop: theme.spacing.sm,
        fontSize: 10,
        fontWeight: '900',
        color: theme.colors.textLight,
        backgroundColor: theme.colors.surface,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
    },
    header: {
        marginBottom: theme.spacing.xl,
    },
    title: {
        fontSize: 32,
        fontWeight: '900',
        color: theme.colors.secondary,
        letterSpacing: -1,
    },
    subtitle: {
        fontSize: 16,
        color: theme.colors.textLight,
        fontWeight: '500',
        lineHeight: 24,
        marginTop: 4,
    },
    form: {
        gap: theme.spacing.lg,
    },
    inputGroup: {
        gap: theme.spacing.xs,
    },
    label: {
        fontSize: 10,
        fontWeight: '900',
        color: theme.colors.primary,
        letterSpacing: 1.5,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.md,
        borderWidth: 1.5,
        borderColor: theme.colors.border,
        paddingHorizontal: theme.spacing.md,
        height: 64,
    },
    inputIcon: {
        marginRight: theme.spacing.sm,
    },
    input: {
        flex: 1,
        fontSize: 16,
        fontWeight: '600',
        color: theme.colors.text,
    },
    button: {
        height: 64,
        backgroundColor: theme.colors.secondary,
        borderRadius: theme.borderRadius.md,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.sm,
        marginTop: theme.spacing.md,
    },
    buttonDisabled: {
        opacity: 0.7,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '900',
    },
    footer: {
        marginTop: theme.spacing.xl,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 10,
        fontWeight: '700',
        color: theme.colors.textLight,
        textTransform: 'uppercase',
        letterSpacing: 1,
    }
});

export default LoginScreen;
