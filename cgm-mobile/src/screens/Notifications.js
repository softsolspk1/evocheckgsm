import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, ScrollView,
    TouchableOpacity, SafeAreaView, ActivityIndicator,
    RefreshControl, Alert, StatusBar
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
            case 'STOCK_ALERT': return <AlertTriangle size={22} color="#B45309" />;
            case 'ORDER_UPDATE': return <ShoppingBag size={22} color="#2563EB" />;
            default: return <Bell size={22} color="#64748B" />;
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
            <StatusBar barStyle="dark-content" />
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.headerSection}>
                    <Text style={styles.headerTitle}>Recent Alerts</Text>
                    <Text style={styles.headerSub}>Stay updated with your activities</Text>
                </View>

                {notifications.length === 0 ? (
                    <View style={styles.emptyState}>
                        <View style={styles.emptyIconBg}>
                            <Bell size={40} color="#CBD5E1" />
                        </View>
                        <Text style={styles.emptyTitle}>All Clear!</Text>
                        <Text style={styles.emptySub}>We'll notify you when something important happens.</Text>
                    </View>
                ) : (
                    notifications.map((notif) => (
                        <TouchableOpacity
                            key={notif.id}
                            style={[styles.notifCard, !notif.isRead && styles.unreadCard]}
                            onPress={() => handleMarkAsRead(notif.id)}
                            activeOpacity={0.7}
                        >
                            <View style={[styles.notifIconWrapper, {
                                backgroundColor: notif.type === 'STOCK_ALERT' ? '#FEF3C7' :
                                    notif.type === 'ORDER_UPDATE' ? '#EFF6FF' : '#F1F5F9'
                            }]}>
                                {getIcon(notif.type)}
                            </View>
                            <View style={styles.notifContent}>
                                <View style={styles.notifHeader}>
                                    <Text style={styles.notifTitle} numberOfLines={1}>{notif.title}</Text>
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
        padding: 20,
    },
    headerSection: {
        marginBottom: 20,
        paddingLeft: 4,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '900',
        color: '#0F172A',
        marginBottom: 4,
    },
    headerSub: {
        fontSize: 13,
        color: '#64748B',
        fontWeight: '500',
    },
    notifCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 20,
        marginBottom: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F1F5F9',
        shadowColor: '#64748B',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 2,
    },
    unreadCard: {
        backgroundColor: '#F0F9FF',
        borderColor: '#BAE6FD',
    },
    notifIconWrapper: {
        width: 52,
        height: 52,
        borderRadius: 16,
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
        fontSize: 15,
        fontWeight: '800',
        color: '#0F172A',
        flex: 1,
        marginRight: 8,
    },
    notifTime: {
        fontSize: 10,
        fontWeight: '700',
        color: '#94A3B8',
        textTransform: 'uppercase',
    },
    notifMessage: {
        fontSize: 13,
        color: '#64748B',
        lineHeight: 18,
        fontWeight: '500',
    },
    unreadDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#3B82F6',
        marginLeft: 8,
    },
    emptyState: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80,
    },
    emptyIconBg: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: '#F1F5F9',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: '900',
        color: '#0F172A',
        marginBottom: 8,
    },
    emptySub: {
        fontSize: 14,
        color: '#64748B',
        textAlign: 'center',
        paddingHorizontal: 40,
        lineHeight: 20,
        fontWeight: '500',
    }
});

export default NotificationsScreen;
