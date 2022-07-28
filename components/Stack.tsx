import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


function HomeScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center',flexDirection:'row' }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Notification"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      
    </View>
  );
}



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}



export default function StackApi() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
