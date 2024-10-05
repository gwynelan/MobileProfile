import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/header';
import ProfileSection from './components/ProfileSection';
import SettingsSection from './components/SettingsSection';

const App = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  // Function to toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkModeEnabled(previousState => !previousState);
  };

  return (
    <View style={[styles.container, isDarkModeEnabled ? styles.darkMode : styles.lightMode]}>
      <Header />
      <ProfileSection />
      <SettingsSection toggleDarkMode={toggleDarkMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkMode: {
    backgroundColor: '#333',
    color: '#fff',
  },
  lightMode: {
    backgroundColor: '#fff',
    color: '#000',
  },
});

export default App;
