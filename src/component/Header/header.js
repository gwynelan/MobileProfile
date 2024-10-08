import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../Theme/theme';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View style={[styles.header, isDarkMode ? styles.darkHeader : styles.lightHeader, styles.shadow]}>
      <Text style={[styles.headerText, isDarkMode && styles.darkText]}>Profile</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleTheme}
        value={isDarkMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
  darkHeader: {
    backgroundColor: '#0c0c0c', 
  },
  lightHeader: {
    backgroundColor: '#e6f0ff', 
  },
  headerText: {
    fontSize: 20,
    color: '#000', 
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginLeft: 50,
  },
  darkText: {
    color: '#fff', 
  },
  shadow: {
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 4, 
    elevation: 5, 
  },
});

export default Header;
