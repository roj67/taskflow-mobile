import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import UserBar from '@/components/home/UserBar'
import TaskCompletedCard from '@/components/home/TaskCompletedCard'
import InProgressCard from '@/components/home/InProgressCard'
import NumberBubble from '@/components/common/NumberBubble'
import TaskGroupsCard from '@/components/home/TaskGroupsCard'

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: 15}}>
          <UserBar/>
          <TaskCompletedCard/>
          <View style={styles.textRow}>
            <Text style={styles.text}>In Progress</Text>
            <NumberBubble num={4}/>
          </View>
          <ScrollView horizontal={true} style={{marginHorizontal: -15, paddingHorizontal: 10}} showsHorizontalScrollIndicator={false}>
            <InProgressCard/>
            <InProgressCard/>
            <InProgressCard/>
            <InProgressCard/>
            <View style={{marginRight: 20}}>
              <InProgressCard/>
            </View>
          </ScrollView>
          <View style={styles.textRow}>
            <Text style={styles.text}>Task Groups</Text>
            <NumberBubble num={4}/>
          </View>
          <TaskGroupsCard/>
          <TaskGroupsCard/>
          <TaskGroupsCard/>
          <TaskGroupsCard/>
          <TaskGroupsCard/>
          <TaskGroupsCard/>
          <View style={{marginBottom:70, marginTop: 10}}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textRow: {
    marginTop: 15,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems:'center',
    gap: 15
  },
  text: {
    fontSize: 22,
    fontFamily: 'poppins-medium',
  }
})