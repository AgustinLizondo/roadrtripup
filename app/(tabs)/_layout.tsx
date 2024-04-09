import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) => <FontAwesome size={28} style={{ marginTop: 24 }} {...props} />;

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {
          position: 'absolute',
          borderRadius: 100,
          bottom: 32,
          left: 32,
          right: 32,
          height: 96,
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}
      initialRouteName='index'
    >
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
    </Tabs>
  );
}
