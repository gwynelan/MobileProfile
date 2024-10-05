import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; // Add TouchableOpacity here

const SettingsSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Settings</Text>
      <TouchableOpacity onPress={() => { /* Handle notifications */ }}>
        <Text style={styles.setting}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { /* Handle dark mode */ }}>
        <Text style={styles.setting}>Dark Mode</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'flex-start',
    width: '100%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  setting: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default SettingsSection;
