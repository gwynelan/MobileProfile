// ProfileSection.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ThemeContext } from '../components/Theme/ThemeContext'; // Adjust path as necessary

const ProfileSection = () => {
  const { isDarkMode } = useContext(ThemeContext); // Consume context

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <View style={styles.avatarContainer}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }} // Placeholder image
          style={styles.avatar} 
        />
      </View>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Kristiane Gwyn Elan</Text>
      <Text style={[styles.info, { color: isDarkMode ? '#ccc' : '#555' }]}>Joined 3 days ago.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomColor: '#ccc',
    alignItems: 'center', // Centering content
  },
  avatarContainer: {
    marginBottom: 10, // Space between avatar and title
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Circular shape
    borderWidth: 2,
    borderColor: '#007AFF', // Border color
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default ProfileSection;
