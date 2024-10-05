import React, { useState } from 'react';
import { View } from 'react-native';
import Header from './components/header';
import ProfileSection from './components/ProfileSection';
import SettingsSection from './components/SettingsSection';
import SignOutButton from './components/SignOutButton';
import UserSection from './components/UserSection'; // Import UserSection

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
      <UserSection /> {/* Add UserSection here */}
      <SettingsSection toggleDarkMode={toggleDarkMode} isDarkModeEnabled={isDarkModeEnabled} />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          padding: 20,
        }}
      >
        <SignOutButton />
      </View>
    </View>
  );
};

export default App;
