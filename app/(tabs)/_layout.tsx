import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '@/constants/Colors'
import TabBarIcon from '@/components/navigation/TabBarIcon'

const Layout = () => {
  return (
    <Tabs screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: stytes.tabBarStyle,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.black,
        tabBarIcon: ({focused, color})=>{
            let iconName = "";
            if(route.name === 'Home'){
                iconName = focused ? 'home-selected' : 'home';
            }else if (route.name === 'TodaysTask'){
                iconName = focused ? 'calender-selected' : 'calender';
            }else if (route.name === 'AddProject'){
                iconName = focused ? 'add-selected' : 'add';
            }else if (route.name === 'TaskList'){
                iconName = focused ? 'folder-selected' : 'folder';
            }else if (route.name === 'Profile'){
                iconName = focused ? 'user-selected' : 'user';
            }
            return (
                <TabBarIcon icon={iconName} focused={focused}/>
            );
        }
    })} sceneContainerStyle={{paddingTop: 35}}>
        <Tabs.Screen name='Home'/>
        <Tabs.Screen name='TodaysTask'/>
        <Tabs.Screen name='AddProject'/>
        <Tabs.Screen name='TaskList'/>
        <Tabs.Screen name='Profile'/>
    </Tabs>
  )
}

export default Layout

const stytes = StyleSheet.create({
    tabBarStyle:{
        position: 'absolute',
        bottom: 10,
        left : 10,
        right: 10,
        borderRadius: 35,
        height: 70,
        elevation: 0,
        borderTopWidth: 0,
        shadowOpacity: 0,
        paddingHorizontal: 15,
    }
})