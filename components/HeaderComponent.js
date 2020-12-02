import React, { Component } from 'react';
import { View, Image, TouchableHighlight} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import {SearchBar, Icon } from 'react-native-elements'


const backgroundColor = '#0067a7'
export default class HeaderComponent extends Component {
    state = {
        isVisible: false,
        search: '',
    };
    updateSearch = (search) => {
        this.setState({ search });
      };
    
    render() {
        const { search } = this.state;
        return ( 
        <View style = {{
            height: 40,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: 'white',
        }}>
            <TouchableHighlight  style={{marginLeft:10, marginTop: 5}}
            onPress= {() => {
                    this.props.navigation.dispatch(DrawerActions.openDrawer())
                }}>
                    <Icon
                    name='bars'
                    type='font-awesome'
                    style={{width:32, height:32}}
                    />
            </TouchableHighlight> 
            <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    containerStyle={{ height:40, width:0, backgroundColor:'white', borderBottomColor:'white', borderTopColor:'white'}}
                    inputContainerStyle={{ height:15, width:250, backgroundColor:'lightgrey', placeholderTextColor:'#8999' }}
                />

        </View>
        );
    }
}
