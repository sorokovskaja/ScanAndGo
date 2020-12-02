import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ListItem, FlatList } from 'react-native-elements'
const backgroundColor = 'whitesmoke'
import {HeaderComponent} from '../components/HeaderComponent'

class example extends Component {


   keyExtractor = (item, index) => index.toString()

   renderItem = ({ item }) => (
      <ListItem
         title={item.name}
         subtitle={item.subtitle}
         leftAvatar={{
            source: item.avatar_url && { uri: item.avatar_url },
            title: item.name[0]
         }}
         bottomDivider
         chevron
      />
   )

   render() {
      const { navigation } = this.props;  
      const results = navigation.getParam('userName', 'title');  
      return (
         <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: backgroundColor,
         }}>
            <HeaderComponent {...this.props} />
            <Text h2 style={{ textAlign: 'center' }}>Recepits</Text>
            <View>
               <FlatList
                  keyExtractor={this.keyExtractor}
                  data={list}
                  renderItem={this.renderItem}
               />
            </View>
            <Text>User Name: {JSON.stringify(results)}</Text>  

         </View>
      )
   }
}
export default example;

const list = [
   {
      name: 'Amy Farha',
      subtitle: 'Vice President'
   },
   {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
   },
]