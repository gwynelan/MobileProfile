import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Settings</Text>
      <Text style={styles.setting}>Notifications</Text>
      <Text style={styles.setting}>Dark Mode</Text>
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
