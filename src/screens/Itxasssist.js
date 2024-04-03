import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const countries = [
  { name: 'China', image: require('./03.jpg') },
  { name: 'India', image: require('./04.jpg') },
  { name: 'Japan', image: require('./05.jpg') },
  { name: 'South Korea', image: require('./06.jpg') },
];

const Itxassist = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [showSearch, setShowSearch] = useState(false);

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
      case 'South Korea':
        navigation.navigate('LpSouthk');
        break;
      default:
        break;
    }
  };

  const handleSearch = () => {
    // Filter countries based on searchText
    const results = countries.filter(country =>
      country.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return results;
  };

  return (
    <ImageBackground source={require('./7.jpg')} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.searchIconContainer} onPress={() => setShowSearch(!showSearch)}>
          <MaterialIcons name="search" size={24} color="rgba(255, 255, 255, 0.7)" />
        </TouchableOpacity>
        {showSearch && (
          <TextInput
            style={styles.searchBar}
            placeholder="Search country..."
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={() => handleSearch()}
          />
        )}
        <ScrollView style={styles.optionsContainer}>
          {showSearch ? (
            handleSearch().map((result, index) => (
              <TouchableOpacity
                key={index}
                style={styles.countryContainer}
                onPress={() => handleOptionClick(result.name)}
              >
                <ImageBackground source={result.image} style={styles.countryFlag} blurRadius={3} borderRadius={10}>
                  <Text style={styles.countryName}>{result.name}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))
          ) : (
            countries.map((country, index) => (
              <TouchableOpacity
                key={index}
                style={styles.countryContainer}
                onPress={() => handleOptionClick(country.name)}
              >
                <ImageBackground source={country.image} style={styles.countryFlag} blurRadius={3} borderRadius={10}>
                  <Text style={styles.countryName}>{country.name}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingVertical: '10%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'column'
  },
  countryContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Transparent background
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    overflow: 'hidden',
    marginTop: 40,
  },
  countryFlag: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  countryName: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  searchBar: {
    width: '90%',
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  searchIconContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    marginBottom: 50,
  }
});

export default Itxassist;
