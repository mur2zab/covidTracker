import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from "./style";
import Home from '../Home';
import Dashboard from '../Dashboard'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Home />
    </View>
  );
}

function DashboardScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Dashboard />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Settings />
    </View>
  );
}

// const SettingStackScreen = createStackNavigator();

// function SettingsStackScreen() {
//   return (
//     <SettingStackScreen.Navigator screenOptions={{ headerShown: false }}>
//       <SettingStackScreen.Screen name="EditProfile" component={SettingsScreen} />
//       <SettingStackScreen.Screen name="ChangePassword" component={LocalGroceryScreen} />
//       <SettingStackScreen.Screen name="Helpline" component={HelpLineScreen} /> />
//       </SettingStackScreen.Navigator>
//   );
// }

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#000000',
          activeBackgroundColor: "#FFFFFF",
          showIcon: true,
          inactiveTintColor: '#FFFFFF',
          style: styles.tabBar,
          labelStyle:styles.tabLabel
        }}
        screenOptions={{headerShown: false}}
      >
        <Tab.Screen style={{fontSize: 20}} name="Home" component={HomeScreen} />
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Settngs" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
