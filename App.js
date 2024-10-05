import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header'; // Ensure the correct casing
import ProfileSection from './components/ProfileSection';
import SettingsSection from './components/SettingsSection';
import SignOutButton from './components/SignOutButton';

const App = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false); // State to manage dark mode

  // Function to toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkModeEnabled(previousState => !previousState);
  };

  return (
    <View style={[styles.container, isDarkModeEnabled ? styles.darkMode : styles.lightMode]}>
      <Header isDarkModeEnabled={isDarkModeEnabled} /> {/* Pass dark mode state */}
      <ProfileSection isDarkModeEnabled={isDarkModeEnabled} /> {/* Pass dark mode state */}
      <SettingsSection toggleDarkMode={toggleDarkMode} isDarkModeEnabled={isDarkModeEnabled} /> {/* Pass dark mode state */}
      <SignOutButton isDarkModeEnabled={isDarkModeEnabled} /> {/* Pass dark mode state */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  darkMode: {
    backgroundColor: '#333', // Dark mode background
  },
  lightMode: {
    backgroundColor: '#ffffff', // Light mode background
  },
});

export default App;
