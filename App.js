import * as React from 'react';
import 'react-native-gesture-handler';
import Login from './components/Login'
import SignUp from './components/SignUp'
import ScanScreen from './components/ScanScreen';
import History from './components/History';
import HomeScreen from './components/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfilePage from './components/ProfilePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import example from './additional/example';
import ReceiptDetails from './components/ReceiptDetails';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ScanScreen" component={ScanScreen} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="ReceiptDetails" component={ReceiptDetails}/>
      <Stack.Screen name="Example" component={example}/>
      <Stack.Screen name="Info" component={ProfilePage}/>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HomeScreen" component={Root} options={{
          drawerIcon: config => <Icon
          style={{width: 25, height: 25}}
          name='home'
          type='font-awesome'
          color='black' />}} />
        <Drawer.Screen name="Profile" component={ProfilePage} options={{
          drawerIcon: config => <Icon
          style={{width: 25, height: 25}}
          name='user-circle'
          type='font-awesome'
          color='black' />}} />
        <Drawer.Screen name="Scan Code" component={ScanScreen} options={{
          drawerIcon: config => <Icon
          style={{width: 25, height: 25}}
          name='camera'
          type='font-awesome'
          color='black' />}} />
        <Drawer.Screen name="Logout" component={Login} options={{
          drawerIcon: config => <Icon
          style={{width: 25, height: 25}}
          name='sign-out'
          type='font-awesome'
          color='black' />}} />
          
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App; Root;

//<Drawer.Screen name='example' component={example}/>