import React, { useState } from 'react';
import { View } from 'react-native';
import Header from './components/header';
import ProfileSection from './components/ProfileSection';
import SettingsSection from './components/SettingsSection';
import SignOutButton from './components/SignOutButton';
import UserSection from './components/UserSection';

const App = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  // Function to toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkModeEnabled((previousState) => !previousState);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkModeEnabled ? '#333' : '#fff',
      }}
    >
      <Header isDarkModeEnabled={isDarkModeEnabled} />
      <ProfileSection isDarkModeEnabled={isDarkModeEnabled} />
      <UserSection isDarkModeEnabled={isDarkModeEnabled} />
      <SettingsSection toggleDarkMode={toggleDarkMode} isDarkModeEnabled={isDarkModeEnabled} />
      <View
        style={{
          flex: 1, // Make the sign out container take remaining space
          justifyContent: 'flex-end', // Align the button to the bottom
          padding: 20, // Add padding to the bottom
        }}
      >
        <SignOutButton />
      </View>
    </View>
  );
};

export default App;
