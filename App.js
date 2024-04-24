import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home.js';
import ViewRoutes from './screens/ViewRoutes.js';
import RoutePanel from './components/RoutePanel.js';
import RouteDetailsScreen from './screens/RouteDetails.js';
import Test1 from './screens/TestScreen1.js';
import Test2 from './screens/TestScreen2.js';
import LanguageScreen from './components/LanguageScreen';
import { LanguageProvider } from './context/LanguageContext';
import { useTranslation } from 'react-i18next';
const Drawer = createDrawerNavigator();

export default function App(){
  const { t } = useTranslation();
  return (
    <LanguageProvider>
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{ backgroundColor: '#FFC75B' }} // Set background color for the drawer
        screenOptions={{
          headerShown: false, // Hide the drawer header text
        }}
      >
        
        <Drawer.Screen name={t('home')} component={Home} />
        <Drawer.Screen name={t('viewRoutes')} component={ViewRoutes} />
        <Drawer.Screen name="Route Details" component={RouteDetailsScreen} />
        <Drawer.Screen name="Test 1" component={Test1} />
        <Drawer.Screen name="Test 2" component={Test2} />
        <Drawer.Screen name="Change Language" component={LanguageScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </LanguageProvider>
  );
};
