import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SignOutButton = () => {
  const handleSignOut = () => {
    console.log('Sign Out Pressed');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ff3b30',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default SignOutButton;
