// App.js
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ThemeProvider from './components/ThemeContext'; // Adjust path as necessary
import Header from './components/header'; // Adjust path as necessary
import UserSection from './components/UserSection'; // Adjust path as necessary
import ProfileSection from './components/ProfileSection'; // Adjust path as necessary
import SettingsSection from './components/SettingsSection'; // Adjust path as necessary
import SignOutButton from './components/SignOutButton'; // Adjust path as necessary

const App = () => {
  const handleSignOut = () => {
    // Handle user sign out
    console.log('User signed out');
  };

  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <ScrollView>
          <UserSection />
          <ProfileSection />
          <SettingsSection />
          <SignOutButton onSignOut={handleSignOut} />
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
