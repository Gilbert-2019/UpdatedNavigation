import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Signinscreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Signin Screen</Text>
		<Button
		title="Touch it "
		color="#6200EE"
		onPress={() => this.props.navigation.navigate
			('Signupscreen')}
		/>
	
      </View>
    );
  }
}
