import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/header';
import ProfileSection from './components/ProfileSection';
import SettingsSection from './components/SettingsSection';
import SignOutButton from './components/SignOutButton';

const App = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  // Function to toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkModeEnabled((previousState) => !previousState);
  };

  return (
    <View style={[styles.container, isDarkModeEnabled ? styles.darkMode : styles.lightMode]}>
      <Header isDarkModeEnabled={isDarkModeEnabled} />
      <ProfileSection isDarkModeEnabled={isDarkModeEnabled} />
      <SettingsSection toggleDarkMode={toggleDarkMode} isDarkModeEnabled={isDarkModeEnabled} />
      <SignOutButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkMode: {
    backgroundColor: '#333',
  },
  lightMode: {
    backgroundColor: '#fff',
  },
});

export default App;
