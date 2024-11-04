import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Avatar from '../Avatar/avatar';
import ImageSlider from '../ImageSlider/image';
import Settings from '../Settings/settings';
import { useTheme } from '../Theme/theme';


const ProfileScreen = () => {
    const { isDarkMode } = useTheme(); // Get dark mode state
  
    return (
      <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
        <ScrollView contentContainerStyle={styles.content}>
          <Avatar />
          <ImageSlider />
          <Settings />
        </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    darkContainer: {
      backgroundColor: '#0c0c0c',
    },
    lightContainer: {
      backgroundColor: '#f0f4ff',
    },
    content: {
      alignItems: 'center',
      paddingVertical: 20,
    },
  });
  
  export default ProfileScreen;
