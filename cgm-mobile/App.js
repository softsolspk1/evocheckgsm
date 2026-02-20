import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  LayoutDashboard, ShoppingCart,
  PlusSquare, Package, UserSquare2,
  Settings, LogOut
} from 'lucide-react-native';

// Theme
import { theme } from './src/theme';

// Screens
import LoginScreen from './src/screens/LoginScreen';
import KAMDashboard from './src/screens/KAM/Dashboard';
import SubmissionForm from './src/screens/KAM/SubmissionForm';
import DistributorDashboard from './src/screens/Distributor/Dashboard';
import DistributorInventory from './src/screens/Distributor/Inventory';

// Placeholder Screens
const Placeholder = ({ name }) => (
  <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
    <Text style={{ fontSize: 18, fontWeight: '900', color: theme.colors.secondary }}>{name} Coming Soon</Text>
  </div>
);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const KAMTabs = ({ onSignOut }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Dashboard') iconName = LayoutDashboard;
        else if (route.name === 'Orders') iconName = ShoppingCart;
        else if (route.name === 'Device') iconName = UserSquare2;
        else if (route.name === 'Form') iconName = PlusSquare;

        const Icon = iconName;
        return <Icon size={size} color={color} />;
      },
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.textLight,
      tabBarStyle: { height: 70, paddingBottom: 10, paddingTop: 10 },
      headerStyle: { backgroundColor: theme.colors.surface },
      headerRight: () => (
        <TouchableOpacity onPress={onSignOut} style={{ marginRight: 20 }}>
          <LogOut size={20} color={theme.colors.error} />
        </TouchableOpacity>
      )
    })}
  >
    <Tab.Screen name="Dashboard" component={KAMDashboard} />
    <Tab.Screen name="Orders" component={() => <Placeholder name="Orders Management" />} />
    <Tab.Screen name="Device" component={() => <Placeholder name="Device Installation" />} />
    <Tab.Screen name="Form" component={SubmissionForm} />
  </Tab.Navigator>
);

const DistributorTabs = ({ onSignOut }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Dashboard') iconName = LayoutDashboard;
        else if (route.name === 'Orders') iconName = ShoppingCart;
        else if (route.name === 'Inventory') iconName = Package;

        const Icon = iconName;
        return <Icon size={size} color={color} />;
      },
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.textLight,
      tabBarStyle: { height: 70, paddingBottom: 10, paddingTop: 10 },
      headerStyle: { backgroundColor: theme.colors.surface },
      headerRight: () => (
        <TouchableOpacity onPress={onSignOut} style={{ marginRight: 20 }}>
          <LogOut size={20} color={theme.colors.error} />
        </TouchableOpacity>
      )
    })}
  >
    <Tab.Screen name="Dashboard" component={DistributorDashboard} />
    <Tab.Screen name="Orders" component={() => <Placeholder name="Incoming Orders" />} />
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

import { TouchableOpacity, Text } from 'react-native';
