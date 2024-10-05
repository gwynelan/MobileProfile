import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing the icon library

const UserSection = () => {
  return (
    <View style={{ 
      padding: 20, 
      borderBottomWidth: 1, 
      borderBottomColor: '#ccc', 
      backgroundColor: '#fff', 
      shadowColor: '#000', 
      shadowOpacity: 0.3, 
      elevation: 5 
    }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Profile</Text>
      <TouchableOpacity style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          paddingHorizontal: 10, 
          paddingVertical: 10, // Added padding for a button-like appearance
          borderRadius: 5, // Rounded corners for button
          backgroundColor: '#e6f7ff' // Light background for visibility
        }}
        onPress={() => { /* Handle Manage Profile Action */ }} // Add your action here
      >
        <Text style={{ fontSize: 14, color: '#007AFF', marginRight: 5 }}>
          Manage Profile
        </Text>
        <Icon name="chevron-right" size={20} color="#007AFF" /> {/* Right arrow icon */}
      </TouchableOpacity>
    </View>
  );
};

export default UserSection;
