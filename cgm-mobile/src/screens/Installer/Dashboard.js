import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Activity, ChevronRight, FileText } from 'lucide-react-native';
import { theme } from '../../theme';

const InstallerDashboard = ({ navigation, user }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.heroSection}>
                    <View>
                        <Text style={styles.welcomeText}>Assalam-o-Alaikum,</Text>
                        <Text style={styles.nameText}>{user?.name || 'Device Installer'}</Text>
                        <View style={styles.roleBadge}>
                            <Activity size={12} color="#FFFFFF" />
                            <Text style={styles.roleText}>Device Installer</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Installation Tasks</Text>

                <TouchableOpacity
                    style={styles.actionItem}
                    onPress={() => navigation.navigate('SubmissionForm')}
                    activeOpacity={0.7}
                >
                    <View style={[styles.actionIconBg, { backgroundColor: '#F0FDF4' }]}>
                        <FileText size={24} color="#16A34A" />
                    </View>
                    <View style={styles.actionInfo}>
                        <Text style={styles.actionTitle}>Post Installation Form</Text>
                        <Text style={styles.actionSub}>Complete report after device setup</Text>
                    </View>
                    <ChevronRight size={18} color={theme.colors.textLight} />
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAFC',
    },
    scrollContent: {
        padding: 20,
    },
    heroSection: {
        marginBottom: 25,
        backgroundColor: '#0F172A',
        padding: 24,
        borderRadius: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 10,
    },
    welcomeText: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.7)',
        fontWeight: '600',
        marginBottom: 4,
    },
    nameText: {
        fontSize: 28,
        fontWeight: '900',
        color: '#FFFFFF',
        marginBottom: 12,
    },
    roleBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.15)',
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 100,
        gap: 6,
    },
    roleText: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '900',
        color: '#0F172A',
        marginBottom: 16,
        paddingLeft: 4,
    },
    actionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 24,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 8,
        elevation: 2,
        gap: 16,
    },
    actionIconBg: {
        width: 56,
        height: 56,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionInfo: {
        flex: 1,
    },
    actionTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#0F172A',
        marginBottom: 2,
    },
    actionSub: {
        fontSize: 13,
        color: '#64748B',
        fontWeight: '500',
    }
});

export default InstallerDashboard;
