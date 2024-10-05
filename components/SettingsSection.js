// SettingsSection.js
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { ThemeContext } from './ThemeContext'; // Adjust path as necessary
import Icon from 'react-native-vector-icons/FontAwesome'; // Adjust based on your icon library

const SettingsSection = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext); // Consume context

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Settings</Text>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: isDarkMode ? '#555' : '#f0f0f0' }]} // Dynamic background
        onPress={() => { /* Handle notifications */ }}
      >
        <View style={styles.buttonContent}>
          <Text style={[styles.buttonText, { color: isDarkMode ? '#fff' : '#000' }]}>
            Notifications
          </Text>
          <Icon name="chevron-right" size={16} color="#007AFF" />
        </View>
      </TouchableOpacity>

      <View style={[styles.toggleContainer, { backgroundColor: isDarkMode ? '#555' : '#f0f0f0' }]}>
        <Text style={[styles.toggleText, { color: isDarkMode ? '#fff' : '#000' }]}>
          Dark Mode
        </Text>
        <Switch 
          value={isDarkMode} 
          onValueChange={toggleDarkMode} 
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? 'gray' : 'lightgrey'} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    elevation: 3, // For Android shadow effect
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'left', // Left align the title
  },
  button: {
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'flex-start', // Align text to the left
    flexDirection: 'row', // Arrange text and icon horizontally
    justifyContent: 'space-between', // Space between text and icon
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1, // Allows text to take available space
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
  },
  toggleText: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 210, // Add some space between the text and the switch
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%', // Ensures the button content takes full width
  },
});

export default SettingsSection;
