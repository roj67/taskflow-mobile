import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { LinearGradient } from 'expo-linear-gradient';

const NumberBubble: React.FC<{num : Number}> = ({ num }) => {
  return (
    <View
      style={styles.badge}
    >
      <Text style={styles.number}>{num.toString()}</Text>
    </View>
  )
}

export default NumberBubble

const styles = StyleSheet.create({
    badge: {
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        backgroundColor: Colors.lightPurple,
        alignItems: 'center',
      },
      number: {
        color: Colors.primary,
        fontSize: 14,
        fontWeight: '600',
      },
})