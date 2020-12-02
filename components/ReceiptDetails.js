import React, { Component } from 'react';
import { View, ScrollView } from "react-native";
import HeaderComponent from '../components/HeaderComponent';
import { ListItem, Text, Card, Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
const backgroundColor = 'whitesmoke'
export default class ReceiptDetails extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.route.params.item;
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column', 
      }}>
        <HeaderComponent {...this.props} /> 
        <ScrollView style={{ backgroundColor: "white"}}>
          <Card title={data.TillView.storeDetails.StoreName} titleStyle={{textTransform:'uppercase', fontSize:30}} 
          containerStyle={{ width: 450, alignSelf: 'center'}}>
            <View>
              <Text style={{alignSelf:'center'}}>
              {data.TillView.storeDetails.Address}
              </Text>
              <Text style={{alignSelf:'center'}}>
              {data.TillView.storeDetails.PostCode}
              </Text>
              <Text style={{alignSelf:'center'}}>
              VAT NO. {data.TillView.vatNumber}
              </Text>
              <Text></Text>
            </View>
            <View>
              {
                data.ReceiptItemView.map((item, i) => (
                  <ListItem 
                    title={<Text style={{textTransform:'uppercase'}}>{item.items}</Text>}
                    rightTitle={data.currency + item.price}
                  />
                ))
              }
              <View style={{ flexDirection: 'row', padding: 10, width: 430, alignContent: 'center' }}>
              <Text >
                   ITEMS: {data.ReceiptItemView.length}   BALANCE TO PAY
              </Text>
              <Text  style={{ flex: 1, textAlign: 'right', paddingRight:20 }}>
                { data.currency +data.receiptTotal}
              </Text>
              </View>
            </View>
            
            <Divider style={{ backgroundColor: '#D3D3D3' }} />
            <Text></Text>
            <Text></Text>
            <View style={{ flexDirection: 'row', padding: 10, width: 430, alignContent: 'center' }}>
              <Text style={{ textAlign: 'left' }}>Type: </Text>
              <Text style={{ flex: 1, textAlign: 'right' }}>{data.CategoryView.Type}</Text>
            </View>
            <Divider style={{ backgroundColor: '#D3D3D3' }} />
            <View style={{ flexDirection: 'row', padding: 10, width: 430, alignContent: 'center' }}>
              <Text style={{ textAlign: 'left' }}>Date: </Text>
              <Text style={{ flex: 1, textAlign: 'right' }}>{data.datetime}</Text>
            </View>
            <Divider style={{ backgroundColor: '#D3D3D3' }} />
            <View style={{ flexDirection: 'row', padding: 10, width: 430, alignContent: 'center' }}>
              <Text style={{ textAlign: 'left' }}>Payment Type: </Text>
              <Text style={{ flex: 1, textAlign: 'right' }}>{data.PaymentsView.type}</Text>
            </View>
            <Divider style={{ backgroundColor: '#D3D3D3' }} />
            <View style={{ flexDirection: 'row', padding: 10, width: 430, alignContent: 'center' }}>
              <Text style={{ textAlign: 'left' }}>VAT number: </Text>
              <Text style={{ flex: 1, textAlign: 'right' }}>{data.TillView.vatNumber}</Text>
            </View>
            <Divider style={{ backgroundColor: '#D3D3D3' }} />
            <View style={{ flexDirection: 'row', padding: 10, width: 430, alignContent: 'center' }}>
              <Text style={{ textAlign: 'right' }}>Total: </Text>
              <Text style={{ flex: 1, textAlign: 'right' }}>{data.currency + data.receiptTotal}</Text>
            </View>
            <Divider style={{ backgroundColor: '#D3D3D3' }} />
            <View style={{ flexDirection: 'row', padding: 10, width: 430, alignContent: 'center' }}>
              <Text style={{ textAlign: 'right' }}>Tax: </Text>
              <Text style={{ flex: 1, textAlign: 'right' }}>{data.currency + data.taxTotal}</Text>
            </View>
            <Button
              onPress={() => this.props.navigation.navigate('History')}
              icon={
                <Icon
                  name="arrow-left"
                  size={15}
                  color="white"
                />
              }
              title=" Return"
            />
          </Card>
        </ScrollView>
      </View>
    )
  }
}
