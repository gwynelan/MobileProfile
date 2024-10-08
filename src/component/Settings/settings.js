// Settings.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../Theme/theme';
import { Ionicons } from '@expo/vector-icons'; 
const Settings = () => {
  const { isDarkMode } = useTheme(); // Get dark mode state

  // Handle sign out function (to be implemented as needed)
  const handleSignOut = () => {
    // Add your sign out logic here (e.g., clearing user data, redirecting, etc.)
    console.log('Sign Out pressed');
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#e6f0ff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Settings</Text>

      <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#444' : '#fff' }]}>
        <Ionicons name="language-outline" size={24} color={isDarkMode ? '#fff' : '#007bff'} />
        <Text style={[styles.optionText, { color: isDarkMode ? '#fff' : '#000' }]}>Languages</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#444' : '#fff' }]}>
        <Ionicons name="notifications-outline" size={24} color={isDarkMode ? '#fff' : '#007bff'} />
        <Text style={[styles.optionText, { color: isDarkMode ? '#fff' : '#000' }]}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#444' : '#fff' }]}>
        <Ionicons name="information-circle-outline" size={24} color={isDarkMode ? '#fff' : '#007bff'} />
        <Text style={[styles.optionText, { color: isDarkMode ? '#fff' : '#000' }]}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.signOutButton]} onPress={handleSignOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3, 
    shadowRadius: 10, 
    elevation: 5, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start', 
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2, 
    shadowRadius: 5, 
    elevation: 3, 
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
  },
  signOutButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  signOutText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Settings;
