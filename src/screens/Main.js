import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const Main = ({ navigation }) => {
  const handleOptionClick = (option) => {
    // Handle navigation to different screens based on option
    switch (option) {
      case 'BudgetingAssistant':
        navigation.navigate('BA');
        break;
      case 'IncomeTaxAssistant':
        navigation.navigate('IncomeTaxAssistant');
        break;
      case 'KnowMore':
        navigation.navigate('KnowMore');
        break;
      case 'AIChatbot':
        navigation.navigate('AIChatbot');
        break;
      default:
        break;
    }
  };

  return (
    <ImageBackground source={require('./1.jpg')} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => handleOptionClick('BudgetingAssistant')}>
          <Text style={styles.buttonText}>Budgeting Assistant</Text>
          <Text style={styles.optionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu urna arcu. Sed euismod tempor neque eu
            dapibus.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOptionClick('IncomeTaxAssistant')}>
          <Text style={styles.buttonText}>Income Tax Assistant</Text>
          <Text style={styles.optionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu urna arcu. Sed euismod tempor neque eu
            dapibus.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOptionClick('KnowMore')}>
          <Text style={styles.buttonText}>Know More</Text>
          <Text style={styles.optionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu urna arcu. Sed euismod tempor neque eu
            dapibus.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOptionClick('AIChatbot')}>
          <Text style={styles.buttonText}>AI Chatbot</Text>
          <Text style={styles.optionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu urna arcu. Sed euismod tempor neque eu
            dapibus.
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    width: 300,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  optionText: {
    color: '#ffffff',
  },
});

export default Main;
