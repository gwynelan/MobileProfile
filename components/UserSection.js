import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const UserSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage User</Text>
      <TouchableOpacity style={styles.arrowContainer}>
        <Text style={styles.arrow}>></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrowContainer: {
    paddingHorizontal: 10,
  },
  arrow: {
    fontSize: 20,
    color: '#007AFF', // Change color as per your design
  },
});

export default UserSection;
