import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileSection = () => {
  return (
    <View style={styles.container}>
      {/* Avatar Image */}
      <Image 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB' }} // Replace with your avatar URL
        style={styles.avatar}
      />
      <Text style={styles.profileName}>Kristiane Gwyn Elan</Text>
      <Text style={styles.joinedText}>Joined 1 year ago</Text>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center', // Center the content
    width: '100%',
  },
  avatar: {
    width: 100,   // Adjust the width as needed
    height: 100,  // Adjust the height as needed
    borderRadius: 50, // Makes the image circular
    marginBottom: 10, // Space between avatar and text
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  joinedText: {
    fontSize: 14,
    color: '#666',
  },
  profileDetail: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default ProfileSection;
