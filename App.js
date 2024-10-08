import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProfileScreen from './src/component/MainScreen/main';
import { ThemeProvider } from './src/component/Theme/theme';

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <ProfileScreen />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff',
  },
});