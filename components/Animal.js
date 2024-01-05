import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class Animal extends React.Component {
  constructor(props) {
    super();
  }
render() {
  return(
  <View style={styles.container}>
    <Text style={styles.text}>This is an {this.props.name}</Text>
  </View>)
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
