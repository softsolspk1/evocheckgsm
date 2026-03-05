import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  LayoutDashboard, ShoppingCart,
  PlusSquare, Package, UserSquare2,
  LogOut, ClipboardList, ShoppingBag, Bell,
  Activity, CheckSquare, Settings
} from 'lucide-react-native';

// Theme
import { theme } from './src/theme';

// Screens
import LoginScreen from './src/screens/LoginScreen';
import KAMDashboard from './src/screens/KAM/Dashboard';
import SubmissionForm from './src/screens/KAM/SubmissionForm';
import KAMOrders from './src/screens/KAM/Orders';
import DeviceTracking from './src/screens/KAM/DeviceTracking';
import DoctorVisitForm from './src/screens/KAM/DoctorVisitForm';
import ReplacementRequestForm from './src/screens/KAM/ReplacementRequestForm';
import DistributorDashboard from './src/screens/Distributor/Dashboard';
import DistributorOrders from './src/screens/Distributor/Orders';
import DistributorInventory from './src/screens/Distributor/Inventory';
import NotificationsScreen from './src/screens/Notifications';
import OrderForm from './src/screens/OrderForm';
import ServiceProviderDashboard from './src/screens/ServiceProvider/Dashboard';
import ServiceProviderOrders from './src/screens/ServiceProvider/Orders';
import InstallerDashboard from './src/screens/Installer/Dashboard';
import InstallerOrders from './src/screens/Installer/Orders';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const KAMTabs = ({ onSignOut, user, navigation }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let Icon;
        if (route.name === 'Dashboard') Icon = LayoutDashboard;
        else if (route.name === 'Orders') Icon = ShoppingCart;
        else if (route.name === 'Tracking') Icon = ClipboardList;
        else if (route.name === 'Installation') Icon = PlusSquare;

        return <Icon size={size} color={color} />;
      },
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.textLight,
      tabBarStyle: {
        height: 90,
        paddingBottom: 30,
        paddingTop: 10,
        backgroundColor: theme.colors.background,
        borderTopWidth: 1,
        borderTopColor: theme.colors.border,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      tabBarLabelStyle: {
        fontSize: 10,
        fontWeight: '700',
        marginBottom: -5,
      },
      headerStyle: {
        backgroundColor: theme.colors.surface,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
      },
      headerTitleStyle: {
        fontWeight: '900',
        color: theme.colors.secondary,
        fontSize: 18,
      },
      headerRight: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
          <TouchableOpacity
            style={{
              marginRight: 15,
              padding: 8,
              borderRadius: 12,
              backgroundColor: theme.colors.surface
            }}
            onPress={() => navigation.navigate('Notifications')}
          >
            <Bell size={22} color={theme.colors.secondary} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onSignOut}
            style={{
              padding: 8,
              borderRadius: 12,
              backgroundColor: '#FEF2F2'
            }}
          >
            <LogOut size={20} color={theme.colors.error} />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => null,
    })}
  >
    <Tab.Screen name="Dashboard">
      {(props) => <KAMDashboard {...props} user={user} />}
    </Tab.Screen>
    <Tab.Screen name="Orders">
      {(props) => <KAMOrders {...props} user={user} />}
    </Tab.Screen>
    <Tab.Screen name="Tracking">
      {(props) => <DeviceTracking {...props} user={user} />}
    </Tab.Screen>
    <Tab.Screen name="Installation" options={{ title: 'Report Installation' }}>
      {(props) => <SubmissionForm {...props} user={user} />}
    </Tab.Screen>
  </Tab.Navigator>
);

const DistributorTabs = ({ onSignOut, user, navigation }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let Icon;
        if (route.name === 'Dashboard') Icon = LayoutDashboard;
        else if (route.name === 'Orders') Icon = ShoppingBag;
        else if (route.name === 'Inventory') Icon = Package;

        return <Icon size={size} color={color} />;
      },
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.textLight,
      tabBarStyle: {
        height: 90,
        paddingBottom: 30,
        paddingTop: 10,
        backgroundColor: theme.colors.background,
        borderTopWidth: 1,
        borderTopColor: theme.colors.border,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      tabBarLabelStyle: {
        fontSize: 10,
        fontWeight: '700',
        marginBottom: -5,
      },
      headerStyle: {
        backgroundColor: theme.colors.surface,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
      },
      headerTitleStyle: {
        fontWeight: '900',
        color: theme.colors.secondary,
        fontSize: 18,
      },
      headerRight: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
          <TouchableOpacity
            style={{
              marginRight: 15,
              padding: 8,
              borderRadius: 12,
              backgroundColor: theme.colors.surface
            }}
            onPress={() => navigation.navigate('Notifications')}
          >
            <Bell size={22} color={theme.colors.secondary} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onSignOut}
            style={{
              padding: 8,
              borderRadius: 12,
              backgroundColor: '#FEF2F2'
            }}
          >
            <LogOut size={20} color={theme.colors.error} />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => null,
    })}
  >
    <Tab.Screen name="Dashboard">
      {(props) => <DistributorDashboard {...props} user={user} />}
    </Tab.Screen>
    <Tab.Screen name="Orders">
      {(props) => <DistributorOrders {...props} user={user} />}
    </Tab.Screen>
    <Tab.Screen name="Inventory">
      {(props) => <DistributorInventory {...props} user={user} />}
    </Tab.Screen>
  </Tab.Navigator>
);

const ServiceProviderTabs = ({ onSignOut, user, navigation }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let Icon;
        if (route.name === 'Dashboard') Icon = Activity;
        else if (route.name === 'Orders') Icon = ClipboardList;
        return <Icon size={size} color={color} />;
      },
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.textLight,
      tabBarStyle: {
        height: 90,
        paddingBottom: 30,
        paddingTop: 10,
        backgroundColor: theme.colors.background,
        borderTopWidth: 1,
        borderTopColor: theme.colors.border,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      tabBarLabelStyle: {
        fontSize: 10,
        fontWeight: '700',
        marginBottom: -5,
      },
      headerStyle: {
        backgroundColor: theme.colors.surface,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
      },
      headerTitleStyle: {
        fontWeight: '900',
        color: theme.colors.secondary,
        fontSize: 18,
      },
      headerRight: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
          <TouchableOpacity
            style={{
              marginRight: 15,
              padding: 8,
              borderRadius: 12,
              backgroundColor: theme.colors.surface
            }}
            onPress={() => navigation.navigate('Notifications')}
          >
            <Bell size={22} color={theme.colors.secondary} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onSignOut}
            style={{
              padding: 8,
              borderRadius: 12,
              backgroundColor: '#FEF2F2'
            }}
          >
            <LogOut size={20} color={theme.colors.error} />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => null,
    })}
  >
    <Tab.Screen name="Dashboard">
      {(props) => <ServiceProviderDashboard {...props} user={user} />}
    </Tab.Screen>
    <Tab.Screen name="Orders" options={{ title: 'Service Orders' }}>
      {(props) => <ServiceProviderOrders {...props} user={user} />}
    </Tab.Screen>
  </Tab.Navigator>
);

const InstallerTabs = ({ onSignOut, user, navigation }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let Icon;
        if (route.name === 'Dashboard') Icon = LayoutDashboard;
        else if (route.name === 'Orders') Icon = ShoppingCart;
        else if (route.name === 'Tracking') Icon = ClipboardList;
        else if (route.name === 'Installation') Icon = PlusSquare;

        return <Icon size={size} color={color} />;
      },
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.textLight,
      tabBarStyle: {
        height: 90,
        paddingBottom: 30,
        paddingTop: 10,
        backgroundColor: theme.colors.background,
        borderTopWidth: 1,
        borderTopColor: theme.colors.border,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      tabBarLabelStyle: {
        fontSize: 10,
        fontWeight: '700',
        marginBottom: -5,
      },
      headerStyle: {
        backgroundColor: theme.colors.surface,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
      },
      headerTitleStyle: {
        fontWeight: '900',
        color: theme.colors.secondary,
        fontSize: 18,
      },
      headerRight: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
          <TouchableOpacity
            style={{
              marginRight: 15,
              padding: 8,
              borderRadius: 12,
              backgroundColor: theme.colors.surface
            }}
            onPress={() => navigation.navigate('Notifications')}
          >
            <Bell size={22} color={theme.colors.secondary} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onSignOut}
            style={{
              padding: 8,
              borderRadius: 12,
              backgroundColor: '#FEF2F2'
            }}
          >
            <LogOut size={20} color={theme.colors.error} />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => null,
    })}
  >
    <Tab.Screen name="Dashboard">
      {(props) => <KAMDashboard {...props} user={user} />}
    </Tab.Screen>
    <Tab.Screen name="Orders">
      {(props) => <KAMOrders {...props} user={user} />}
    </Tab.Screen>
    <Tab.Screen name="Tracking">
      {(props) => <DeviceTracking {...props} user={user} />}
    </Tab.Screen>
    <Tab.Screen name="Installation" options={{ title: 'Report Installation' }}>
      {(props) => <SubmissionForm {...props} user={user} />}
    </Tab.Screen>
  </Tab.Navigator>
);

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem('user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (e) {
      console.error('Failed to load user', e);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleSignOut = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
    } catch (e) {
      console.error('Logout error', e);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Main">
              {(props) => {
                if (user.role === 'DISTRIBUTOR') return <DistributorTabs {...props} onSignOut={handleSignOut} user={user} />;
                if (user.role === 'SERVICE_PROVIDER') return <ServiceProviderTabs {...props} onSignOut={handleSignOut} user={user} />;
                if (user.role === 'DEVICE_INSTALLER') return <InstallerTabs {...props} onSignOut={handleSignOut} user={user} />;
                return <KAMTabs {...props} onSignOut={handleSignOut} user={user} />;
              }}
            </Stack.Screen>
            <Stack.Screen
              name="Notifications"
              options={{
                headerShown: true,
                title: 'Alerts & Notifications',
                headerStyle: { backgroundColor: theme.colors.surface },
                headerTitleStyle: { fontWeight: '900', color: theme.colors.secondary },
                headerTintColor: theme.colors.secondary
              }}
            >
              {(props) => <NotificationsScreen {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen
              name="OrderForm"
              options={{
                headerShown: true,
                title: 'Place New Order',
                headerStyle: { backgroundColor: theme.colors.surface },
                headerTitleStyle: { fontWeight: '900', color: theme.colors.secondary },
                headerTintColor: theme.colors.secondary
              }}
            >
              {(props) => <OrderForm {...props} user={user} />}
            </Stack.Screen>

            <Stack.Screen
              name="DoctorVisitForm"
              options={{
                headerShown: false,
              }}
            >
              {(props) => <DoctorVisitForm {...props} user={user} />}
            </Stack.Screen>

            <Stack.Screen
              name="ReplacementRequestForm"
              options={{
                headerShown: false,
              }}
            >
              {(props) => <ReplacementRequestForm {...props} user={user} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
