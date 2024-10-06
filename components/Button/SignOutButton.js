// SignOutButton.js
import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../Theme/ThemeContext';

const SignOutButton = ({ onSignOut }) => {
  const { isDarkMode } = useContext(ThemeContext);

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
    height: 202,
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    paddingBottom: 30,
  },
  button: {
    width: '60%', 
    padding: 15,
    backgroundColor: 'gray', 
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2, 
    },
    shadowOpacity: 0.8, 
    shadowRadius: 9, 
    elevation: 5, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase', 
  },
});

export default SignOutButton;
