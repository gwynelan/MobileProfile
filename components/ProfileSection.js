import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileSection = ({ isDarkModeEnabled }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.profileName, isDarkModeEnabled && styles.darkText]}>David Robinson</Text>
      <Text style={[styles.joinedText, isDarkModeEnabled && styles.darkText]}>Joined 1 year ago</Text>
      <Text style={[styles.profileDetail, isDarkModeEnabled && styles.darkText]}>Manage user</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'flex-start',
    width: '100%',
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
  darkText: {
    color: '#fff', // Text color for dark mode
  },
});

export default ProfileSection;
