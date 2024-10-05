// SettingsSection.js
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContext } from './ThemeContext'; // Adjust path as necessary

const SettingsSection = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext); // Consume context

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Settings</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => { /* Handle notifications */ }}
      >
        <Text style={[styles.buttonText, { color: isDarkMode ? '#fff' : 'black' }]}>
          Notifications
        </Text>
        <Icon name="chevron-right" size={16} color="#007AFF" />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={toggleDarkMode} // Toggle dark mode
      >
        <Text style={[styles.buttonText, { color: isDarkMode ? '#fff' : 'black' }]}>
          Dark Mode
        </Text>
        <Icon name="chevron-right" size={16} color="#007AFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default SettingsSection;
