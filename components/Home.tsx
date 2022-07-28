import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import All from "./All";
import Manager from "./manager";
import BSE from "./BSE";
import Leader from "./Leader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation-stack";

export default function Home({ navigation }: any) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="All"
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: { display: 'none' },
        tabBarStyle: {
          paddingBottom: 20
        },
        tabBarLabelStyle: {
          fontSize: 20
        },
        
      }}
    >
      <Tab.Screen
        name="All"
        component={All}
      />
      <Tab.Screen
        name="Manager"
        component={Manager}
      />
      <Tab.Screen
        name="BSE"
        component={BSE}
      />
      <Tab.Screen
        name="Leader"
        component={Leader}
      />
    </Tab.Navigator>
  );

}