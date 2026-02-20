import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { ShoppingCart, Package, Users, TrendingUp, Plus } from 'lucide-react-native';
import { theme } from '../../theme';

const KAMDashboard = ({ navigation }) => {
    const stats = [
        { label: 'Total Sales', value: '142', icon: TrendingUp, color: '#3B82F6' },
        { label: 'Devices Installed', value: '89', icon: Package, color: '#10B981' },
        { label: 'Active Patients', value: '124', icon: Users, color: '#8B5CF6' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.welcomeText}>Assalam-o-Alaikum,</Text>
                        <Text style={styles.nameText}>Shahid Mehmood</Text>
                    </View>
                    <TouchableOpacity style={styles.notificationBtn}>
                        <Plus size={24} color={theme.colors.primary} />
                    </TouchableOpacity>
                </View>

                {/* Stats Grid */}
                <View style={styles.statsGrid}>
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <View key={index} style={styles.statCard}>
                                <View style={[styles.iconWrapper, { backgroundColor: stat.color + '10' }]}>
                                    <Icon size={20} color={stat.color} />
                                </View>
                                <Text style={styles.statValue}>{stat.value}</Text>
                                <Text style={styles.statLabel}>{stat.label}</Text>
                            </View>
                        );
                    })}
                </View>

                {/* Quick Actions */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Quick Actions</Text>
                    <View style={styles.actionRow}>
                        <TouchableOpacity
                            style={styles.actionCard}
                            onPress={() => navigation.navigate('Orders')}
                        >
                            <ShoppingCart size={24} color={theme.colors.primary} />
                            <Text style={styles.actionText}>Place Order</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.actionCard}
                            onPress={() => navigation.navigate('Form')}
                        >
                            <Plus size={24} color={theme.colors.primary} />
                            <Text style={styles.actionText}>Submit Form</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Performance Chart Placeholder */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Sales Velocity</Text>
                    <View style={styles.chartPlaceholder}>
                        <Text style={styles.placeholderText}>[ Analytics Visualization ]</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    scrollContent: {
        padding: theme.spacing.md,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'between',
        alignItems: 'center',
        marginBottom: theme.spacing.lg,
    },
    welcomeText: {
        fontSize: 14,
        color: theme.colors.textLight,
        fontWeight: '600',
    },
    nameText: {
        fontSize: 24,
        fontWeight: '900',
        color: theme.colors.secondary,
    },
    notificationBtn: {
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.sm,
        borderRadius: theme.borderRadius.md,
    },
    statsGrid: {
        flexDirection: 'row',
        gap: theme.spacing.sm,
        marginBottom: theme.spacing.lg,
    },
    statCard: {
        flex: 1,
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.md,
        borderRadius: theme.borderRadius.md,
        borderWidth: 1,
        borderColor: theme.colors.border,
    },
    iconWrapper: {
        width: 36,
        height: 36,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacing.sm,
    },
    statValue: {
        fontSize: 20,
        fontWeight: '900',
        color: theme.colors.secondary,
    },
    statLabel: {
        fontSize: 10,
        fontWeight: '700',
        color: theme.colors.textLight,
        textTransform: 'uppercase',
    },
    section: {
        marginBottom: theme.spacing.lg,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '900',
        color: theme.colors.secondary,
        marginBottom: theme.spacing.sm,
    },
    actionRow: {
        flexDirection: 'row',
        gap: theme.spacing.md,
    },
    actionCard: {
        flex: 1,
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.lg,
        borderRadius: theme.borderRadius.md,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.border,
    },
    actionText: {
        marginTop: theme.spacing.sm,
        fontSize: 12,
        fontWeight: '800',
        color: theme.colors.text,
    },
    chartPlaceholder: {
        height: 200,
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.lg,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.colors.border,
        borderStyle: 'dashed',
    },
    placeholderText: {
        color: theme.colors.textLight,
        fontWeight: '700',
        fontSize: 12,
    }
});

export default KAMDashboard;
