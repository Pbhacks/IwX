import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Home = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('Main');
  };

  return (
    <LinearGradient colors={['#002147', '#8A2BE2']} style={styles.container}>
      <Text style={styles.title}>IwX</Text>
      <Button title="Get Started" onPress={handleGetStarted} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: '#ffffff',
    textShadowColor: '#000000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});

export default Home;
