import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyMobileTemplate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',           // White text
    fontSize: 24,
    fontWeight: 'bold',
  },
});
