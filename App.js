import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainStackNavigator from './navigation/MainStackNavigator';

export default function App() {
  console.log('App is rendering');
  return (
    <View style={styles.container}>
      <MainStackNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
