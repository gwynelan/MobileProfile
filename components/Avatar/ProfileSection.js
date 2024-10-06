import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ThemeContext } from '../Theme/ThemeContext'; 
import profileImage from '../../assets/me.jpg'; 

const ProfileSection = () => {
  const { isDarkMode } = useContext(ThemeContext); 

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <View style={styles.avatarContainer}>
        <Image 
          source={profileImage} 
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
    alignItems: 'center', 
  },
  avatarContainer: {
    marginBottom: 10, 
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    borderWidth: 2,
    borderColor: '#007AFF', 
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
