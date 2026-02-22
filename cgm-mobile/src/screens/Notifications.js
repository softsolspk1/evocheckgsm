import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, ScrollView,
    TouchableOpacity, SafeAreaView, ActivityIndicator,
    RefreshControl, Alert
} from 'react-native';
import { Bell, Package, ShoppingBag, Clock, CheckCircle2, AlertTriangle, ChevronRight } from 'lucide-react-native';
import { theme } from '../theme';
import { apiService } from '../services/api';

const NotificationsScreen = ({ user, navigation }) => {
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [notifications, setNotifications] = useState([]);

    const fetchData = async () => {
        try {
            const params = {
                userId: user.id,
                role: user.role,
                distributorId: user.distributorId || user.id,
                kamId: user.id
            };
            const data = await apiService.getNotifications(params);
            setNotifications(data);
        } catch (error) {
            console.error('Fetch notifications error:', error);
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

    const handleMarkAsRead = async (id) => {
        try {
            // Optimistic update
            setNotifications(notifications.map(n => n.id === id ? { ...n, isRead: true } : n));
            await apiService.markNotificationRead(id);
        } catch (error) {
            console.error('Update notification error:', error);
        }
    };

    const getIcon = (type) => {
        switch (type) {
            case 'STOCK_ALERT': return <AlertTriangle size={20} color={theme.colors.error} />;
            case 'ORDER_UPDATE': return <ShoppingBag size={20} color={theme.colors.primary} />;
            default: return <Bell size={20} color={theme.colors.secondary} />;
        }
    };

    if (loading && !refreshing) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                {notifications.length === 0 ? (
                    <View style={styles.emptyState}>
                        <View style={styles.emptyIconBg}>
                            <Bell size={40} color={theme.colors.textLight} />
                        </View>
                        <Text style={styles.emptyTitle}>All caught up!</Text>
                        <Text style={styles.emptySub}>No new notifications at the moment.</Text>
                    </View>
                ) : (
                    notifications.map((notif) => (
                        <TouchableOpacity
                            key={notif.id}
                            style={[styles.notifCard, !notif.isRead && styles.unreadCard]}
                            onPress={() => handleMarkAsRead(notif.id)}
                        >
                            <View style={styles.notifIconWrapper}>
                                {getIcon(notif.type)}
                            </View>
                            <View style={styles.notifContent}>
                                <View style={styles.notifHeader}>
                                    <Text style={styles.notifTitle}>{notif.title}</Text>
                                    <Text style={styles.notifTime}>
                                        {new Date(notif.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </Text>
                                </View>
                                <Text style={styles.notifMessage} numberOfLines={2}>
                                    {notif.message}
                                </Text>
                            </View>
                            {!notif.isRead && <View style={styles.unreadDot} />}
                        </TouchableOpacity>
                    ))
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAFC',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8FAFC',
    },
    scrollContent: {
        padding: 16,
    },
    notifCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        shadowColor: '#64748B',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    unreadCard: {
        backgroundColor: '#F0F9FF',
        borderColor: '#BAE6FD',
    },
    notifIconWrapper: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: '#F1F5F9',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    notifContent: {
        flex: 1,
    },
    notifHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    notifTitle: {
        fontSize: 14,
        fontWeight: '800',
        color: theme.colors.secondary,
    },
    notifTime: {
        fontSize: 10,
        fontWeight: '600',
        color: theme.colors.textLight,
    },
    notifMessage: {
        fontSize: 13,
        color: '#64748B',
        lineHeight: 18,
    },
    unreadDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: theme.colors.primary,
        marginLeft: 8,
    },
    emptyState: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },
    emptyIconBg: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#F1F5F9',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    emptyTitle: {
        fontSize: 18,
        fontWeight: '900',
        color: theme.colors.secondary,
        marginBottom: 8,
    },
    emptySub: {
        fontSize: 14,
        color: theme.colors.textLight,
        textAlign: 'center',
    }
});

export default NotificationsScreen;
