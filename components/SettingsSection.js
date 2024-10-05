import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

const SettingsSection = () => {
  // State to manage the toggle switch for Dark Mode
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  // Function to toggle Dark Mode
  const toggleSwitch = () => {
    setIsDarkModeEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Settings</Text>

      {/* Notification bar with arrow */}
      <TouchableOpacity style={styles.notificationBar}>
        <Text style={styles.setting}>Notifications</Text>
        <Text style={styles.arrow}> {'>'} </Text>
      </TouchableOpacity>

      {/* Dark Mode toggle */}
      <View style={styles.darkModeContainer}>
        <Text style={styles.setting}>Dark Mode</Text>
        <Switch
          value={isDarkModeEnabled}
          onValueChange={toggleSwitch}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkModeEnabled ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
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
  notificationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
  },
  setting: {
    fontSize: 16,
  },
  arrow: {
    fontSize: 16,
    color: '#007BFF', // Change color to indicate it's clickable
  },
  darkModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
  },
});

export default SettingsSection;
