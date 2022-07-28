import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import Home from './components/Home';
import Favourite from './components/Favourite';
import Detail from './components/Detail';
import RegistrationScreen from './components/Form';

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation
    screenOptions={({ navigation }: any) => ({
      headerTitle: 'Seattle Constulting Myanmar',
      headerTintColor: '#1588ea',
      headerTitleStyle: {
      fontWeight: 'bold',
      },
    })}>
      
      <Drawer.Screen name="Home" component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'violet'} size={30} />
          ),
        }}
      />
      <Drawer.Screen name="Favourite" component={Favourite}
      options={{
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="star-outline" color={'violet'} size={30} />
        ),
        }} />
      <Drawer.Screen name="Detail" component={Detail}
      options={{
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-details" color={'violet'} size={30} />
        ),
        headerShown: false,
      }}/>
      <Drawer.Screen name="Register" component={RegistrationScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <MaterialIcons name="app-registration" color={'violet'} size={30} />
        ),
        }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}