import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class signupscreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Signup Main</Text>
		<Button
		title="Touch it"
		color="#6200EE"
		onPress={() => this.props.navigation.navigate
			('Homescreen')}
		/>
      </View>
    );
  }
}
