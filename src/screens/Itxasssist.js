import React, { useState } from 'react';
import { View,ScrollView, Text, StyleSheet, TouchableOpacity, Image,ImageBackground, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Itxassist = ({ navigation }) => {
 

  const handleOptionClick = (option) => {
    switch (option) {
      case 'China':
        navigation.navigate('LpChina');
        break;
      case 'India':
        navigation.navigate('LpIndia');
        break;
      case 'Japan':
        navigation.navigate('LpJapan');
        break;
      case 'SouthK':
        navigation.navigate('LpSouthk');
        break;
      default:
        break;
    }
  };

  return (
    <ImageBackground source={require('./1.jpg')} style={styles.background}>
      <View style={styles.container}>
        <ScrollView style={styles.optionsContainer}>

        <Text style={styles.title}>Choose your country</Text>
          <TouchableOpacity
            style={styles.countryContainer}
            onPress={() => handleOptionClick('China')}
          >
            <ImageBackground  source={require('./03.jpg')} style={styles.countryFlag}  blurRadius={3} borderRadius={20} >
            <Text style={styles.countryName}>China</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.countryContainer}
            onPress={() => handleOptionClick('India')}
          >
            <ImageBackground source={require('./04.jpg')} style={styles.countryFlag} blurRadius={3} borderRadius={20} >
            <Text style={styles.countryName} >India</Text></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.countryContainer}
            onPress={() => handleOptionClick('Japan')}
          >
            <ImageBackground source={require('./05.jpg')} style={styles.countryFlag}  blurRadius={3} borderRadius={20}>
            <Text style={styles.countryName}>Japan</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.countryContainer}
            onPress={() => handleOptionClick('SouthK')}
          >
            <ImageBackground source={require('./06.jpg')} style={styles.countryFlag} blurRadius={3} borderRadius={20} >
            <Text style={styles.countryName}>South Korea</Text></ImageBackground>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingVertical:'10%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  title: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: '600',
    textShadowColor: '#000000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    zIndex: 1,
    marginBottom: 20,
    textAlign:'center',
    borderRadius:20,
    borderWidth:2,
    borderColor:'white'
  
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'column'

  },
  countryContainer: {
    flexDirection: 'row',
    width:'100%',
    height:500,
    justifyContent: 'center',
    alignItems: 'center'
  },

  countryFlag: {
    marginVertical: '10%',
    width:'100%',
    height:'80%',
    justifyContent:'center',
    alignItems: 'center',
    resizeMode:'cover',
    
  },
  countryName: {
    color: '#FFF',
    fontSize: 48,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign:'center'
  }
  
});

export default Itxassist;