// UserSection.js
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContext } from './ThemeContext'; // Adjust path as necessary

const UserSection = () => {
  const { isDarkMode } = useContext(ThemeContext); // Consume context

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Profile</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.buttonText, { color: isDarkMode ? '#fff' : 'black' }]}>Manage Profile</Text>
        <Icon name="chevron-right" size={20} color="#007AFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 14,
  },
});

export default UserSection;
