// UserSection.js
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContext } from '../Theme/ThemeContext';

const UserSection = () => {
  const { isDarkMode } = useContext(ThemeContext); 

  return (
    <View style={{
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? '#444' : '#e0e0e0', 
      backgroundColor: isDarkMode ? '#333' : '#fff', 
    }}>
      <Text style={{ fontSize: 23, fontWeight: 'bold', marginBottom: 5, color: isDarkMode ? '#fff' : '#000' }}>Profile</Text>
      <TouchableOpacity 
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          borderRadius: 5,
          backgroundColor: isDarkMode ? '#444' : '#f0f0f0', 
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 17, color: isDarkMode ? '#fff' : 'black' }}>
          Manage Profile
        </Text>
        <Icon name="chevron-right" size={16} color="#007AFF" />
      </TouchableOpacity>
    </View>
  );
};

export default UserSection;
