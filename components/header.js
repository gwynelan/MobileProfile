import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ isDarkModeEnabled }) => {
  return (
    <View style={[styles.container, isDarkModeEnabled ? styles.darkMode : styles.lightMode]}>
      <Text style={[styles.title, isDarkModeEnabled && styles.darkText]}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  darkMode: {
    backgroundColor: '#333',
  },
  lightMode: {
    backgroundColor: '#fff',
  },
  darkText: {
    color: '#fff',
  },
});

export default Header;
