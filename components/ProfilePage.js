import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import HeaderComponent from './HeaderComponent';
import {Text} from 'react-native-elements'

const backgroundColor = 'whitesmoke'
export default class InfoComponent extends Component {
   constructor(props) {
     super(props)

   }

   _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('TASKS');
      if (value !== null) {
        console.log(value);
      }
    } catch (error) {
    }
  };

  render() {
    //const data = this.props.route.params.name;
    //const email = this.props.route.params.userName;
    return (
      
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <HeaderComponent {...this.props} />
      
        <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require('../icons/profile.png')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>User</Text>
            </View>    
        </View>
      </View>
      </View>
    )
  }
}
const list = [
  {
    name: 'Aneta Sorokovskaja',
    email: 'anta@asa.com',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    Icon: 'av-timer',
  },
]

const styles = StyleSheet.create({
  header:{
    backgroundColor: "rgb(162, 191, 242)",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
 