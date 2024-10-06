// SignOutButton.js
import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../components/Theme/ThemeContext'; // Adjust path as necessary

const SignOutButton = ({ onSignOut }) => {
  const { isDarkMode } = useContext(ThemeContext); // Access dark mode state

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ?  '#333' : '#fff' }]}>
      <TouchableOpacity style={styles.button} onPress={onSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 202, // Set a fixed height for the container
    justifyContent: 'flex-end', // Align the button at the bottom
    alignItems: 'center', // Center the button horizontally
    paddingBottom: 30, // Add some padding at the bottom
  },
  button: {
    width: '60%', // Set button width to 60% of the parent container
    padding: 15,
    backgroundColor: 'gray', // Black color for sign out
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0,
      height: 2, // Shadow height
    },
    shadowOpacity: 0.8, // Shadow opacity
    shadowRadius: 9, // Shadow radius
    elevation: 5, // For Android shadow
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase', // Uppercase for emphasis
  },
});

export default SignOutButton;
