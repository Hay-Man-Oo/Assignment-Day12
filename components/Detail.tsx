import { Text, View,Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Favourite from "./Favourite";
import Profile from "./profile";

const Stack = createStackNavigator();

function DetailScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is detail Screen.</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default function Detail() {
  return (
    <Stack.Navigator
          initialRouteName="Detail"
          screenOptions={{
              //headerShown: false,
              //headerLeft: () =>
              //    <NavigationDrawerStructure
              //        navigationProps={navigation}
              //    />,
              //headerStyle: {
              //    backgroundColor: '#f4511e',
              //},
              //headerTintColor: '#fff',
              //headerTitleStyle: {
              //    fontWeight: 'bold',
              //}
          }}>

          <Stack.Screen
              name="Detail"
              component={DetailScreen}
              options={{
                  headerShown: false,
                  title: 'Detail',
        }} />
      <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerTitle: 'Seattle Constulting Myanmar',
                headerTintColor: '#1588ea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                }
              }} />
      </Stack.Navigator>
  );

    
}