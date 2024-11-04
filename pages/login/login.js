import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Profile');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleForgotPassword = () => {
    navigation.navigate('Recovery'); // Navigate to the Recovery page
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/login.jpg')} style={styles.image} />

      <View style={styles.section}>
        <Text style={styles.text}>LOGIN</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="black"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="black"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.blueText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#F0F4F8', 
    top: 35,
  },
  image: {
    width: 350,
    height: 330,
    marginBottom: 40,
    borderRadius: 20, // More rounded corners for a creative look
  },
  section: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 30, // Increased vertical padding
    paddingHorizontal: 20, // Added horizontal padding
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  text: {
    fontSize: 26, // Increased font size
    marginBottom: 20,
    color: '#007BFF', // Changed color to blue for the title
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 45, // Increased height for inputs
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10, // More rounded input fields
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#E9F1F5', // Light background for inputs
  },
  forgotPasswordText: {
    color: '#007BFF',
    fontSize: 14,
    marginBottom: 20, // Added margin for spacing
    textAlign: 'left', // Align text to the left
    width: '100%', // Ensure it takes full width
    paddingHorizontal: 10, // Optional: Add horizontal padding for better spacing
  },
  button: {
    width: '80%',
    backgroundColor: '#007BFF',
    borderRadius: 10,
    paddingVertical: 12,
    marginBottom: 15, // Added spacing between button and next element
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18, // Increased button text size
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  signUpText: {
    color: 'black',
    fontSize: 16, // Slightly larger font for clarity
  },
  blueText: {
    color: '#007BFF',
    fontSize: 16, // Slightly larger font for clarity
    fontWeight: 'bold', // Made the sign-up text bold
  },
});
