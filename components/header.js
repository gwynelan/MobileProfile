// Header.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../components/ThemeContext'; // Adjust path as necessary

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext); // Consume context

  return (
    <View style={[styles.header, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#444',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
});

export default Header;
