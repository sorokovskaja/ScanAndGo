import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight} from 'react-native';
import { Button} from 'native-base'
import {Info} from '../additional/screenNames'
import {Icons} from 'react-native-vector-icons/Ionicons'

import HeaderComponent from './HeaderComponent';

const backgroundColor = 'whiteSmoke'
export default class HomeScreen extends Component {
    static navigationOptions = ({navigation}) => {
        let drawerLabel = 'Home';
        let drawerIcon = () => {
            <Image source={require('../icons/home.png')}
            style={{ width:26, height: 26, tintColor: backgroundColor}}></Image>
        }
        return { drawerLabel, drawerIcon }
    }
    render(){
        const { navigation } = this.props;  
        const results = navigation.getParam('userName', 'title');  
        return ( <View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderComponent {...this.props}/>
            <View style = {{
                flex: 1,
                backgroundColor: backgroundColor,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                 <Text>User Name: {JSON.stringify(results)}</Text>  
                <Text style={{ fontWeight:'bold', fontSize: 22, color:'black' }}>
                    This is Home Screen
                </Text>

            </View>

        </View> 

        )
    }
}
