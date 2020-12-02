import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, Button,AsyncStorage 
} from 'react-native';

export default class Login extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Login'
    })
    constructor() {
        super();

        this.state = {
            Email: '',
            Password: '',
            id: ''
        }
    }
    login = () => {
        fetch('http://10.0.0.7:60880/Api/login/LogIn', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Email: this.state.Email,
                Password: this.state.Password
            })
        }).then((Response) => Response.json())
            .then((Result) => {
                    this.props.navigation.navigate("History", {
                        userId: this.state.Email, id: Result
                    })
            })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                throw error;
            });
    }
    render() {
        
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo}
                                    source={require('../images/LOGO.png')}></Image>
                                <Text style={styles.title}>Welcome to ScanAndGo</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                    placeholder="Enter username/Email"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    keyboardType='email-address'
                                    onChangeText={(Email) => this.setState({ Email })}  
                                    value={this.state.Email}
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()}/>
                                <TextInput style={styles.input}
                                    placeholder="Enter password"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    returnKeyType='go'
                                    onChangeText={(Password) => this.setState({ Password })}
                                    value={this.state.password}
                                    secureTextEntry
                                    autoCorrect={false}
                                    ref={'txtPassword'}/>
                                <Button
                                    title="SIGN IN"
                                    onPress={this.login}/>                             
                            </View>
                            <Button
                                title="Register Here"
                                color='rgb(32, 53, 70)'
                                onPress={() => this.props.navigation.navigate('SignUp')} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </SafeAreaView>
        );  
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
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
        borderRadius: 46,
    },
    title: {
        color: '#f7c774',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 40,
        height: 200,
        padding: 20,
        alignSelf: 'center'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 25
    },
    buttonContainer: {
        position: 'relative',
        backgroundColor: '#f7c744',
        paddingVertical: 15,
        borderRadius: 25,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    signupText: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupTextCont: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 12
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: '500'
    }
})

