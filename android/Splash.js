import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
export default class Splash extends Component {
    render() {
        return (
            <View style={styles.cotainer}>
                <Text style={styles.title}>Hello</Text>
            </View>
        )
    }
}
const styles =  StyleSheet.create({
    cotainer: {
        backgroundColor: 'green',
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    title: {
        fontWeight:'bold',
        fontSize:18
    }
})