import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header';
import ProfileSection from './components/ProfileSection';
import SettingsSection from './components/SettingsSection';
import SignOutButton from './components/SignOutButton';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ProfileSection />
      <SettingsSection />
      <SignOutButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;
