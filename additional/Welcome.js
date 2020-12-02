import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, SafeAreaView, Keyboard } from 'react-native';

export default class Welcome extends Component{
    render (){
        return (
            <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/> 
                
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style ={styles.logoContainer }>
                            <View style ={styles.logoContainer}>
                                <Image style= {styles.logo}
                                    source={require('../images/LOGO.png')}
                                    >
                                </Image>
                                <Text style={styles.title}>Welcome to ScanAndGo</Text>
                            </View> 
                        </View>
                    </TouchableWithoutFeedback>
            </View>
            </SafeAreaView>
        );
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'rgb(32, 53, 70)',
        flexDirection: 'column'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        overflow: "hidden",
    },
    logo: {
        width: 90,
        height: 70,
        borderRadius:40,
    },
    title:{
        color: '#f7c774',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity:0.9
    }
}
)