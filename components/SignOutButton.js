import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SignOutButton = () => {
  const handleSignOut = () => {
    // Handle sign-out logic
    console.log('User signed out');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  signOutText: {
    color: 'blue',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default SignOutButton;
