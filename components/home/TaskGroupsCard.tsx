import { View, Text, StyleSheet } from 'react-native';
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Colors } from '@/constants/Colors';

const TaskGroupsCard = ({
    title = "Office Project",
    tasks = "23 Tasks",
    progress = 70,
    iconName = "briefcase-outline"
  }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name={iconName as 'link'}
            size={24}
            color="#FF69B4"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{tasks}</Text>
        </View>
      </View>
      <CircularProgress
            value={85} 
            radius={30} 
            valueSuffix={'%'} 
            inActiveStrokeOpacity={0.2} 
            activeStrokeWidth={8} 
            inActiveStrokeWidth={8} 
            progressValueStyle={{ fontSize: 15, color: Colors.primary, fontFamily: 'poppins' }} 
            inActiveStrokeColor={Colors.primaryLight}
            activeStrokeColor={Colors.primary} 
            duration={1000} 
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      backgroundColor: 'white',
      borderRadius: 16,
      marginBottom: 5
    },
    leftContent: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    iconContainer: {
      width: 48,
      height: 48,
      backgroundColor: '#FFF0F7',
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      gap: 4,
    },
    title: {
      fontSize: 18,
      fontFamily: 'poppins-medium'
    },
    subtitle: {
      fontSize: 14,
      color: Colors.grey,
      fontFamily: 'poppins-medium'
    }
  });

export default TaskGroupsCard