import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const UserBar = () => {
  return (
    <View>
      <View style={styles.userTab}>
        <View style={styles.userTabSub}>
          <View>
            <Image source={require('../../assets/images/avatar.png')} style={styles.userImage}></Image>
          </View>
          <View>
            <Text style={styles.textSmall}>Hello,</Text>
            <Text style={styles.mediumSmall}>User XYZ!</Text>
          </View>
        </View>
        <Ionicons name="notifications" size={24} color="black" />
      </View>
    </View>
  )
}

export default UserBar

const styles = StyleSheet.create({
    userTab: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    userTabSub:{
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10
    },
    userImage: {
      width: 50,
      height: 50
    },
    textSmall: {
      fontSize: 15,
      fontFamily: 'poppins'
    },
    mediumSmall: {
      fontSize: 16,
      fontFamily: 'poppins-bold'
    },
    largeSmall: {
      fontSize: 22
    }
  })