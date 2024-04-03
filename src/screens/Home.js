import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const Home = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./1.jpg')} style={styles.background} blurRadius={5}>
        <Text style={styles.title}>IwX</Text>
        <TouchableOpacity style={styles.buttonClass} onPress={handleNext}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 72,
    color: '#ffffff',
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    zIndex: 1,
    marginBottom: 50,
  },
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
buttonClass: {
  width: 160, // Increased width for better visibility
  height: 60, // Increased height for better touch area
  borderWidth: 2, // Increased border width for better visibility
  borderColor: '#00ff15',
  borderRadius: 25, // Increased border radius for a more rounded, modern look
  backgroundColor: 'linear-gradient(rgba(141, 21, 182, 1), rgba(229, 68, 233, 1))',
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for a 3D effect
  shadowColor: '#810e05',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 80,
  padding: 10, // Padding for better text alignment
},
buttonText: {
  fontSize: 18, // Increased font size for better readability
  color: '#fff',
  fontWeight: 'bold',
  textTransform: 'uppercase', // Text in uppercase for a more button-like feel
},
});

export default Home;
