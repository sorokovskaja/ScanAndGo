/**
 * @format
 */

import {AppRegistry, Dimensions} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './components/Login'
import SignUp from './components/SignUp'
import ScanScreen from './components/ScanScreen'
import {TabNavigator} from 'react-navigation';
import HomeScreen from './components/HomeScreen'
import History from './components/History'
import ReceiptDetails from './components/ReceiptDetails'
import ProfilePage from './components/ProfilePage';

AppRegistry.registerComponent('scanandgo', () => App);
