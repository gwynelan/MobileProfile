// Header.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from './components/ThemeContext'; // Adjust path as necessary

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext); // Consume context

  return (
    <View style={[styles.header, { backgroundColor: isDarkMode ? '#444' : '#007AFF' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#fff' }]}>My App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
