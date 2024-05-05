import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home.js';
import ViewRoutes from './screens/ViewRoutes.js';
import RoutePanel from './components/RoutePanel.js';
import RouteDetails from './screens/RouteDetails.js';
import LiveTrack from './screens/LiveTrack.js';
import Test1 from './screens/TestScreen1.js';
import Test2 from './screens/TestScreen2.js';
import LanguageScreen from './components/LanguageScreen';
import { LanguageProvider } from './context/LanguageContext';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { t } = useTranslation();
  return (
    <Drawer.Navigator
      drawerStyle={{ backgroundColor: '#FFC75B' }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name={t('home')} component={Home} />
      <Drawer.Screen name={t('viewRoutes')} component={ViewRoutes} />
      <Drawer.Screen name="Route Details" component={RouteDetails} />
      <Drawer.Screen name="Live Tracking" component={LiveTrack} />
      <Drawer.Screen name="Test 2" component={Test2} />
      <Drawer.Screen name="Change Language" component={LanguageScreen} />
    </Drawer.Navigator>
  );
};

export default function App(){
  return (
    <LanguageProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
        >
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
          <Stack.Screen name="RouteDetails" component={RouteDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </LanguageProvider>
  );
};
