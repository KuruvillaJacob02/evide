
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

<View style={{height:130, width:130,marginLeft:20, borderWidth:0.5,borderColor:'#dddddd',borderRadius:10}}>
                    <View style ={{flex:2}}>
                        <Image source ={require('../img/home.jpg')} style={{flex:1,resizeMode:'cover',height:null,width:null}}/>
                    </View>
                    <View style ={{flex:1,paddingLeft:'5%',paddingTop:'5%'}}>
                        <Text>Some Mall</Text>
                    </View>
                </View>

<Category imageUri={require('../img/jome.jpg')} name="Some Mall"/>