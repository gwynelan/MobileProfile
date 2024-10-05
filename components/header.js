import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6200EE',
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
  },
});

export default Header;
