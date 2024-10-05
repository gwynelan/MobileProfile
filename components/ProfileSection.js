import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.profileName}>David Robinson</Text>
      <Text style={styles.joinedText}>Joined 1 year ago</Text>
      <Text style={styles.profileDetail}>Manage user</Text>
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
});

export default ProfileSection;
