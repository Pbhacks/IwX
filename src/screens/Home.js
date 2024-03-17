import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const Home = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./2.jpg')} style={styles.background} blurRadius={5}>
        <Text style={styles.title}>IwX</Text>
        <TouchableOpacity style={styles.arrowButton} onPress={handleNext}>
          <Text style={styles.arrowText}>→</Text>
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
    fontFamily: 'BRADHI', // Use the custom font family
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    zIndex: 1,
    marginBottom: 100,
  },
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'blue',
    borderRadius: 50,
    padding: 20,
  },
  arrowText: {
    fontSize: 24,
    color: '#ffffff',
  },
});

export default Home;
