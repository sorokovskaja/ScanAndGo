import React, { Component, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import HeaderComponent from './HeaderComponent';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { View } from 'native-base';
import { Text, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const backgroundColor = 'whitesmoke'
export default class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scan: false,
      ScanResult: false,
      result: null,
    };
  }
  onSuccess = (e) => {
    fetch('http://10.0.0.7:60880/Api/login/Recepit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:
        e.data
    })
      .then(response => {
        console.log(response);
        return response.json()
      })
      .then((Result) => {
        if (Result.Status == 'Success') {
          this.props.navigation.navigate("History"),{
            render : e.data
          }
          alert("The QR Code has been scanned successfully");
        }
        else
          alert('Error occured during scan');
      }).catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        throw error;
      });
    const check = e.data.substring(0, 50);
    console.log('scanned data' + check);
    this.setState({
      result: e,
      scan: false,
      ScanResult: true
    })
  }

  activeQR = () => {
    this.setState({
      scan: true
    })
  }
  scanAgain = () => {
    this.setState({
      scan: true,
      ScanResult: false
    })
  }
  render() {
    const { scan, ScanResult, result } = this.state
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: backgroundColor
      }}>
        <HeaderComponent {...this.props} />
        {!scan && !ScanResult &&
          <View  >
            <Button onPress={this.activeQR} buttonStyle={{ width: 70 }} title="SCAN" />
          </View>
        }
        {ScanResult &&
          <Fragment>
            <Text >Result !</Text>
            <View >
              <Text>Type : {result.type}</Text>
              <Text>Result : {result.data}</Text>
              <Button
                onPress={this.scanAgain}
                title="SCAN AGAIN"/>
            </View>
          </Fragment>
        }
        {scan &&
          <QRCodeScanner
            reactivate={true}
            showMarker={true}
            ref={(node) => { this.scanner = node }}
            onRead={this.onSuccess}
            bottomContent={
              <View>
                <Button
                  icon={<Icon
                      name="arrow-left"
                      size={15}
                      color="white" />}
                  onPress={() => this.setState({ scan: false })}
                  title="GO BACK"
                />
              </View>}/>
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});
