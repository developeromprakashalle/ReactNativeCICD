import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World JS</Text>
      <Text>Hello React Native Android</Text>
      <Text>Hello React Native iOS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
