// ProfileSection.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeContext'; // Adjust path as necessary

const ProfileSection = () => {
  const { isDarkMode } = useContext(ThemeContext); // Consume context

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>User Name</Text>
      <Text style={[styles.info, { color: isDarkMode ? '#ccc' : '#555' }]}>Email: user@example.com</Text>
      <Text style={[styles.info, { color: isDarkMode ? '#ccc' : '#555' }]}>Phone: 123-456-7890</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default ProfileSection;
