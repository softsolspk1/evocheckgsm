import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  LayoutDashboard, ShoppingCart,
  PlusSquare, Package, UserSquare2,
  LogOut, ClipboardList, ShoppingBag
} from 'lucide-react-native';

// Theme
import { theme } from './src/theme';

// Screens
import LoginScreen from './src/screens/LoginScreen';
import KAMDashboard from './src/screens/KAM/Dashboard';
import SubmissionForm from './src/screens/KAM/SubmissionForm';
import KAMOrders from './src/screens/KAM/Orders';
import DeviceTracking from './src/screens/KAM/DeviceTracking';
import DistributorDashboard from './src/screens/Distributor/Dashboard';
import DistributorOrders from './src/screens/Distributor/Orders';
import DistributorInventory from './src/screens/Distributor/Inventory';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const KAMTabs = ({ onSignOut }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let Icon;
        if (route.name === 'Dashboard') Icon = LayoutDashboard;
        else if (route.name === 'Orders') Icon = ShoppingCart;
        else if (route.name === 'Tracking') Icon = ClipboardList;
        else if (route.name === 'Form') Icon = PlusSquare;

        return <Icon size={size} color={color} />;
      },
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.textLight,
      tabBarStyle: { height: 75, paddingBottom: 12, paddingTop: 10 },
      headerStyle: { backgroundColor: theme.colors.surface },
      headerTitleStyle: { fontWeight: '900', color: theme.colors.secondary },
      headerRight: () => (
        <TouchableOpacity onPress={onSignOut} style={{ marginRight: 20 }}>
          <LogOut size={20} color={theme.colors.error} />
        </TouchableOpacity>
      )
    })}
  >
    <Tab.Screen name="Dashboard" component={KAMDashboard} />
    <Tab.Screen name="Orders" component={KAMOrders} />
    <Tab.Screen name="Tracking" component={DeviceTracking} />
    <Tab.Screen name="Form" component={SubmissionForm} />
  </Tab.Navigator>
);

const DistributorTabs = ({ onSignOut }) => (
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
      tabBarStyle: { height: 75, paddingBottom: 12, paddingTop: 10 },
      headerStyle: { backgroundColor: theme.colors.surface },
      headerTitleStyle: { fontWeight: '900', color: theme.colors.secondary },
      headerRight: () => (
        <TouchableOpacity onPress={onSignOut} style={{ marginRight: 20 }}>
          <LogOut size={20} color={theme.colors.error} />
        </TouchableOpacity>
      )
    })}
  >
    <Tab.Screen name="Dashboard" component={DistributorDashboard} />
    <Tab.Screen name="Orders" component={DistributorOrders} />
    <Tab.Screen name="Inventory" component={DistributorInventory} />
  </Tab.Navigator>
);

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        ) : user.role === 'DISTRIBUTOR' ? (
          <Stack.Screen name="DistributorMain">
            {(props) => <DistributorTabs {...props} onSignOut={handleSignOut} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="KAMMain">
            {(props) => <KAMTabs {...props} onSignOut={handleSignOut} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
