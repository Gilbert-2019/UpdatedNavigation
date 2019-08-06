import React, { Component } from 'react';
import { Text, View, Button,TouchableOpacity, } from 'react-native';

export default class Homescreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home Screen</Text>
		
		
		<Button
		title="Touch it "
		color="#6200EE"
		onPress={() => this.props.navigation.navigate
			('Signupscreen')}
		/>
		
		<Button
		title="Touch it "
		color="#6200EE"
		onPress={() => this.props.navigation.navigate
			('Signinscreen')}
		/>
		
		
      </View>
    );
  }
}
