import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useTheme } from '../Theme/theme';

const Avatar = () => {
    const { isDarkMode } = useTheme(); // Get the dark mode state

    return (
        <View style={{ alignItems: 'center', marginVertical: 20 }}>
            <Text style={[styles.profileText, { color: isDarkMode ? '#fff' : '#000' }]}>Profile</Text>
            <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#e6f0ff' }]}>
                <View style={[styles.avatarWrapper, { borderColor: isDarkMode ? 'lightblue' : '#007bff' }]}>
                    <Image
                        source={require('../../../assets/me.jpg')} 
                        style={styles.avatar}
                    />
                </View>
                <Text style={[styles.name, { color: isDarkMode ? '#fff' : '#000' }]}>Kristiane Gwyn Elan</Text>
                <Text style={[styles.id, { color: isDarkMode ? '#bbb' : '#666' }]}>ID: 202***1**</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    profileText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10, 
    },
    container: {
        width: 380,  
        alignItems: 'center',
        padding: 15,  
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0, 
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginVertical: 10, // Vertical margin
    },
    avatarWrapper: {
        borderWidth: 1,
        borderRadius: 50,
        overflow: 'hidden',
        marginBottom: 10, // Space below the avatar image
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5, // Space below the name
    },
    id: {
        fontSize: 16,
    },
});

export default Avatar;
