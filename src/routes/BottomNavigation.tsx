import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import {
  HomeScreen,
  DiscoverScreen,
  ActivityScreen,
  BookmarkScreen,
  ProfileScreen,
} from '../screens';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarStyle: {
          backgroundColor: '#000000',
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Ionicons name="home-outline" />,
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: () => <Ionicons name="compass" />,
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon: () => <Ionicons name="stopwatch" />,
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={BookmarkScreen}
        options={{
          tabBarIcon: () => <Ionicons name="bookmark" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Ionicons name="person-circle" />,
        }}
      />
    </Tab.Navigator>
  );
}
