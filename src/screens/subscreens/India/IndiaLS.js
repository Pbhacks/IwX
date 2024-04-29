import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const IndiaLS = ({ navigation }) => {
    const handleOptionClick = (option) => {
        switch (option) {
          case 'Overview':
            navigation.navigate('IndiaOv');
            break;
          case 'Corporate':
            navigation.navigate('IndiaCorp');
            break;
          case 'Individuals':
            navigation.navigate('IndiaIndiv');
            break;
         
          default:
            break;
        }}

        return (
            <View style={styles.container}>
              <ImageBackground source={require('./04.jpg')} style={styles.background} blurRadius={5}>
              <TouchableOpacity style={styles.buttonClass}  onPress={() => handleOptionClick('Overview')}>
                  <Text style={styles.buttonText}>Overview</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonClass}  onPress={() => handleOptionClick('Corporate')}>
                  <Text style={styles.buttonText}>Corporate</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.buttonClass}   onPress={() => handleOptionClick('Individuals')}>
                  <Text style={styles.buttonText}>Individuals</Text></TouchableOpacity>
               
                
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
    width: 240,
    height: 70,
    borderWidth: 1,
    borderColor: '#00ff15',
    borderRadius: 18,
    backgroundColor: 'linear-gradient(rgba(141, 21, 182, 1), rgba(229, 68, 233, 1))',
    boxShadow: '3px 4px 0px 0px #8a2a21',
    shadowColor: '#810e05',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default IndiaLS;
