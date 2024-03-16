import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

const Main = ({ navigation }) => {
  const handleOptionClick = (option) => {
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

  const handleHomeClick = () => {
    // Navigate back to Home.jsx
    navigation.navigate('Home');
  };

  return (
    <ImageBackground source={require('./1.jpg')} style={styles.background}>
      <TouchableOpacity style={styles.button} onPress={() => handleOptionClick('BudgetingAssistant')}>
      <Text style={[styles.buttonText, { color: '#FFFF00' }]}>Budgeting Assistant</Text>
        <Text style={styles.optionText}>
          Take control of your finances with our Budgeting Assistant. Explore personalized budget plans tailored to your income and expenses. Track your spending, set savings goals, and achieve financial freedom.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleOptionClick('IncomeTaxAssistant')}>
      <Text style={[styles.buttonText, { color: '#FFFF00' }]}>Income Tax Assistant</Text>
        <Text style={styles.optionText}>
          Navigating the complexities of income tax can be daunting. Our Income Tax Assistant simplifies the process, helping you maximize deductions and minimize liabilities. Stay informed about tax laws and file your returns with confidence.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleOptionClick('KnowMore')}>
      <Text style={[styles.buttonText, { color: '#FFFF00' }]}>Know More</Text>
        <Text style={styles.optionText}>
          Curiosity knows no bounds. With Know More, embark on a journey of discovery. Explore diverse topics, from science and technology to arts and culture. Expand your knowledge and broaden your horizons.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleOptionClick('AIChatbot')}>
      <Text style={[styles.buttonText, { color: '#FFFF00' }]}>AI Chatbot</Text>
        <Text style={styles.optionText}>
          Engage in meaningful conversations with our AI Chatbot. Whether you need assistance, advice, or simply someone to talk to, our intelligent chatbot is here for you 24/7. Experience the future of communication today.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.homeButton} onPress={handleHomeClick}>
        <MaterialIcons name="home" size={30} color="#fff" />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingTop: 20,
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
  homeButton: {
    position: 'absolute',
    bottom: 1,
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 30,
    borderColor: 'blue',
  },
});

export default Main;
