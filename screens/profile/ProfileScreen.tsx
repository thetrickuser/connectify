import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FriendsScreen from './FriendsScreen';
import HomeScreen from './HomeScreen';
import IoIcon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false, 
        tabBarStyle: {
          backgroundColor: 'white',
          padding: 10,
          height: '10%',
        }
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: () => (
            <IoIcon name='home' size={20} />
          )
        }} 
      />
      <Tab.Screen 
        name="Friends" 
        component={FriendsScreen} 
        options={{
          tabBarIcon: () => (
            <IoIcon name='people' size={20} />
          )
        }} 
      />
    </Tab.Navigator>
  );
}

const ProfileScreen = () => {
  return (
    <MyTabs />
  );
}

export default ProfileScreen;
