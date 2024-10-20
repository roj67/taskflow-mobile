import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import CircularProgress from 'react-native-circular-progress-indicator';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const TaskCompletedCard = () => {
  return (
    <View style={styles.card}>
        <View style={styles.cardSub}>
            <Text style={styles.text}>Keep Up the flow,</Text>
            <Text style={[styles.text, {marginBottom: 20}]}>See Your Tasks!</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View Task</Text>
            </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center', marginLeft: 30}}>
            <CircularProgress
                value={100} // The progress value (percentage)
                radius={50} // Radius of the circle
                valueSuffix={'%'} // Suffix for the progress value
                inActiveStrokeOpacity={0.2} // Opacity of the inactive stroke
                activeStrokeWidth={12} // Thickness of the active stroke
                inActiveStrokeWidth={12} // Thickness of the inactive stroke
                progressValueStyle={{ fontSize: 20, color: Colors.white, fontFamily: 'poppins' }} // Style for the progress value
                inActiveStrokeColor={Colors.primaryLight} // Color of the inactive stroke
                activeStrokeColor={Colors.white} // Color of the active stroke
                duration={1000} // Animation duration
            />
        </View>
    </View>
  )
}

export default TaskCompletedCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.primary,
        marginTop: 15,
        borderRadius: 25,
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center'
    },
    cardSub: {
        justifyContent: 'space-evenly',
        flexDirection: 'column',
    },
    text: {
        color: Colors.white,
        fontFamily: 'poppins-medium',
        fontSize: 16
    },
    button: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        padding:10,
        alignItems: 'center'
    },
    buttonText: {
        color: Colors.primary,
        fontFamily: 'poppins-bold',
        fontSize: 14
    },
    options: {
        backgroundColor: Colors.primaryLight,
        borderRadius: 8,
        padding: 4,
        alignItems: 'center'
    }
})