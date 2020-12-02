import React, { Component, Fragment } from 'react'
import { View, Image, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import HeaderComponent from './HeaderComponent';
import { Icon } from 'react-native-elements'
import { ListItem, Text, Overlay, Button, Card, FlatList } from 'react-native-elements'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { onChange } from 'react-native-reanimated';

const backgroundColor = 'whitesmoke'
export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            isVisible: false,
            scan: false,
            ScanResult: false,
            result: null,
            isHidden: false,
        };
    }

    onSuccess = (e) => {
        debugger
        fetch('http://10.0.0.7:60880/Api/login/AddNewReceipt?id=' + this.props.route.params.id, {
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
                    this.componentDidMount();
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
            scan: true,
        })
    }
    scanAgain = () => {
        this.setState({
            scan: true,
            ScanResult: false
        })
    }

    componentDidMount() {
        fetch('http://10.0.0.7:60880/Api/login/GetAllReceipts?id=' + this.props.route.params.id, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json });
            }).catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                throw error;
            }).finally(() => {
                this.setState({ isLoading: false });
                window.location.reload(true);
            });
    }

    render() {
        const { data, isLoading } = this.state;
        const rereneder = this.props.route.params.render;
        const { scan, ScanResult, result } = this.state

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: backgroundColor,
            }}>
                
                <HeaderComponent {...this.props} />
                <Text h2 style={{ textAlign: 'center' }}>Recepits</Text>
                
                <Button
                    buttonStyle={{ alignSelf: 'flex-end' }}
                    icon={
                        <Icon
                            name="camera"
                            size={15}
                            color="white"
                        />
                    }
                    title=" SCAN"
                    onPress={this.activeQR} />
                    
                <ScrollView style={{ backgroundColor: "white" }}>
                    <View style={{ flex: 1, padding: 24 }}>
                        {isLoading ? <ActivityIndicator /> : (
                            data.map((item, i) => (

                                <ListItem
                                    key={i}
                                    title={item.TillView.storeDetails.StoreName}
                                    leftIcon={<Icon name='shopping-basket' type='font-awesome' />}
                                    subtitle={item.currency + item.receiptTotal + "  (" + item.TillView.storeDetails.Address
                                        + " " + item.TillView.storeDetails.PostCode + ") "}
                                    rightTitle={item.datetime}
                                    topDivider
                                    bottomDivider
                                    onPress={(event) => this.props.navigation.navigate("ReceiptDetails", {
                                        array: item.id, item: item
                                    })}
                                    chevron
                                />
                            ))
                        )}
                    </View>
                    {scan &&
                        <QRCodeScanner
                            reactivate={true}
                            showMarker={true}
                            ref={(node) => { this.scanner = node }}
                            onRead={this.onSuccess}
                            bottomContent={
                                <View>
                                    <Button
                                        onPress={() => this.setState({ scan: false })}
                                        title="GO BACK"
                                    />
                                </View>} />
                    }
                </ScrollView>
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
