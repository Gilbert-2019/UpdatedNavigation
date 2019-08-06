import React, {Component} from 'react';
import {Platform, 
		StyleSheet, 
		Text, 
		View,
		StatusBar} from 'react-native';


import Homescreen from'./screens/Homescreen';
import Signupscreen from './screens/Signupscreen';
import Signinscreen from './screens/Signinscreen';







import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';

export default class App extends Component{
	
	render() {
	  return (
			<AppStackNavigator/>
	  );
	}
  }
  
  const AppNavigator2 = createDrawerNavigator({
	

	Homescreen:Homescreen,
	Signinscreen:Signinscreen,

});
const AppDrawerNavigator = createAppContainer(AppNavigator2);





const AppNavigator = createStackNavigator({

	Signupscreen:Signupscreen,

	
		AppDrawerNavigator :AppDrawerNavigator

	

	
	
}, 


);

const AppStackNavigator = createAppContainer(AppNavigator);