import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar,
    TextInput, Keyboard, Button} from 'react-native'

export default class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            Password: '',
        }
    }
    register = () => {
        debugger

        fetch('http://10.0.0.7:60880/Api/login/InsertUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                FirstName: this.state.FirstName,
                LastName: this.state.LastName,
                Email: this.state.Email,
                Password: this.state.Password
            })

        })
            .then(response => {
                console.log(response);
                return response.json()
            })
            .then((Result) => {
                if (Result.Status == 'Success') {
                    this.props.navigation.navigate("HomeScreen")
                    alert("Success, Welcome to ScanAndGo " + this.state.FirstName + " " + this.state.LastName);
                }
                else
                    alert('This Email is already taken, please Sign In');
            }).catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                throw error;
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />

                <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    <View style={styles.logoContainer}>
                        <View style={styles.logoContainer}>
                            <Image style={styles.logo}
                                source={require('../images/LOGO.png')}
                            >
                            </Image>
                            <Text style={styles.title}>Welcome to ScanAndGo</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <TextInput style={styles.input}
                                name="name"
                                placeholder="Enter First Name"
                                onChangeText={(FirstName) => this.setState({ FirstName })}
                                value={this.state.FirstName}
                                placeholderTextColor='rgba(255,255,255,0.8)'
                                keyboardType='name-phone-pad'
                                returnKeyType='next'
                                autoCorrect={false}
                                onSubmitEditing={() => this.refs.txtLastName.focus()}

                            />
                            <TextInput style={styles.input}
                                placeholder="Enter Lastname"
                                placeholderTextColor='rgba(255,255,255,0.8)'
                                onChangeText={(LastName) => this.setState({ LastName })}
                                value={this.state.LastName}
                                keyboardType='name-phone-pad'
                                returnKeyType='next'
                                autoCorrect={false}
                                ref={'txtLastName'}
                                onSubmitEditing={() => this.refs.txtEmail.focus()}
                            />
                            <TextInput style={styles.input}
                                placeholder="Enter email address"
                                placeholderTextColor='rgba(255,255,255,0.8)'
                                keyboardType='email-address'
                                returnKeyType='next'
                                autoCorrect={false}
                                onChangeText={(Email) => this.setState({ Email })}
                                value={this.state.Email}
                                ref={'txtEmail'}
                                onSubmitEditing={() => this.refs.txtPassword.focus()}
                            />
                            <TextInput style={styles.input}
                                placeholder="Enter password"
                                placeholderTextColor='rgba(255,255,255,0.8)'
                                returnKeyType='next'
                                onChangeText={(Password) => this.setState({ Password })}
                                value={this.state.Password}
                                secureTextEntry
                                autoCorrect={false}
                                ref={'txtPassword'}
                                onSubmitEditing={() => this.refs.txtSubmit.focus()}
                            />
                            <Button
                                ref={'txtSubmit'}
                                title="REGISTER"
                                onPress={this.register}/>
                            <View />
                            <Button
                                title="Already registered? Sign In"
                                color='rgb(32, 53, 70)'
                                onPress={() => this.props.navigation.navigate('Login')}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
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
        left: 0,
        right: 0,
        bottom: 90,
        height: 300,
    },
    logo: {
        width: 90,
        height: 70,
        borderRadius: 40,
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
        bottom: 0,
        height: 350,
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