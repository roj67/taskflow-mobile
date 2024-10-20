import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react'
import { Colors } from '@/constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const InProgressCard = ({ 
    title = "Grocery shopping app design", 
    subtitle = "Office Project", 
    progress = 40,
  }) => {
    return(
        <Pressable 
        style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed
        ]}
        >
            <View style={styles.header}>
                <Text style={styles.subtitle}>{subtitle}</Text>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons 
                    name="shopping-outline" 
                    size={20} 
                    color="#FF69B4" 
                    />
                </View>
            </View>
            <Text style={styles.title} numberOfLines={2}>{title}</Text>
            <View style={styles.progressBackground}>
                <View style={[styles.progressFill, { width: `${progress}%` }]} />
            </View>
        </Pressable>
    );
}

export default InProgressCard


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightPurple,
        maxWidth: 250,
        borderRadius: 20,
        padding: 15,
        marginHorizontal: 5,
        marginBottom: 5,
      },
      pressed: {
        opacity: 0.95,
        transform: [{ scale: 0.995 }],
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 10,
      },
      subtitle: {
        fontSize: 13,
        color: Colors.grey,
        marginBottom: 4,
        fontFamily: 'poppins',
      },
      title: {
        fontSize: 15,
        color: '#000',
        fontFamily: 'poppins-medium',
        marginBottom: 15
      },
      iconContainer: {
        backgroundColor: Colors.lightPink,
        padding: 5,
        borderRadius: 10,
      },
      progressBackground: {
        height: 6,
        backgroundColor: Colors.white,
        borderRadius: 3,
      },
      progressFill: {
        height: '100%',
        backgroundColor: Colors.primary,
        borderRadius: 3,
      },
})