import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingsSection = ({ toggleDarkMode, isDarkModeEnabled }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.sectionTitle, isDarkModeEnabled && styles.darkText]}>Settings</Text>
      <View style={styles.settingContainer}>
        <Text style={[styles.setting, isDarkModeEnabled && styles.darkText]}>Notifications</Text>
        <Text style={styles.arrow}> {'>'}</Text> {/* Arrow to indicate action */}
      </View>
      <View style={styles.settingContainer}>
        <Text style={[styles.setting, isDarkModeEnabled && styles.darkText]}>Dark Mode</Text>
        <Switch 
          value={isDarkModeEnabled} 
          onValueChange={toggleDarkMode} 
          thumbColor={isDarkModeEnabled ? '#f5dd4b' : '#f4f3f4'} 
          trackColor={{ false: '#767577', true: '#81b0ff' }} 
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
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  setting: {
    fontSize: 16,
  },
  darkText: {
    color: '#fff', // Text color for dark mode
  },
  arrow: {
    fontSize: 16,
  },
});

export default SettingsSection;
