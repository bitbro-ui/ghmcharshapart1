/*This is an Example of React Native Map*/
import React from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';
import Mainscreen from './screens/mainscreen'
 
export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Mainscreen/>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
});