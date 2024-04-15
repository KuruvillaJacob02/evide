
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from "./screens/Profile";
import ViewRoutes from "./screens/ViewRoutes";
const Drawer = createDrawerNavigator();
export default function App() {
  return(
    <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="hey" component={Profile}/>
          <Drawer.Screen name="View Routes" component={ViewRoutes}/>
        </Drawer.Navigator>
      </NavigationContainer>
  )
}