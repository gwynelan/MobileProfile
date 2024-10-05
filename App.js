import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import UserSection from './components/UserSection'; // Import the new UserSection component
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
      <UserSection /> {/* Add UserSection here */}
      <SettingsSection toggleDarkMode={toggleDarkMode} isDarkModeEnabled={isDarkModeEnabled} />
      <View style={styles.signOutContainer}>
        <SignOutButton />
      </View>
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
  signOutContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
});

export default App;
