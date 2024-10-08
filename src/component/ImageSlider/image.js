import React from 'react';
import { ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../Theme/theme'; 

const images = [
  require('../../../assets/8.jpg'),
  require('../../../assets/4.jpg'),
  require('../../../assets/2.jpg'),
  require('../../../assets/5.jpg'),
  require('../../../assets/6.jpg'),
  require('../../../assets/1.jpg'),
  require('../../../assets/7.jpg'),
  require('../../../assets/3.jpg'),
  require('../../../assets/9.jpg'),
];

const ImageSlider = () => {
  const { isDarkMode } = useTheme(); // Get dark mode state

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={styles.sliderContainer} 
      style={[styles.slider, { backgroundColor: isDarkMode ? '#333' : '#e6f0ff' }]} 
    >
      {images.map((image, index) => (
        <TouchableOpacity 
          key={index} 
          style={[styles.imageContainer, isDarkMode && styles.darkImageContainer]}
        >
          <Image source={image} style={styles.image} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  slider: {
    height: 170,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    padding: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5, 
  },
  sliderContainer: {
    paddingHorizontal: 10, 
  },
  imageContainer: {
    marginRight: 10,
    borderRadius: 5,
    shadowOpacity: 0.1,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#007bff', 
  },
  darkImageContainer: {
    borderColor: '#4a90e2', 
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});

export default ImageSlider;
