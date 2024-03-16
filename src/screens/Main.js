import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Main = ({ navigation }) => {
  const [showFullText, setShowFullText] = useState(false);

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
    navigation.navigate('Home');
  };

  const handleCameraOpen = () => {
    Linking.openURL('https://www.google.com/search?q=google+lens');
  };

  return (
    <ImageBackground source={require('./1.jpg')} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.cameraButton} onPress={handleCameraOpen}>
          <MaterialIcons name="photo-camera" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={styles.optionsContainer}>
          <OptionBlock
            title="Budgeting Assistant"
            description="Take control of your finances with our Budgeting Assistant. Explore personalized budget plans tailored to your income and expenses. Track your spending, set savings goals, and achieve financial freedom."
            onPress={() => handleOptionClick('BudgetingAssistant')}
            showFullText={showFullText}
            setShowFullText={setShowFullText}
          />
          <OptionBlock
            title="Income Tax Assistant"
            description="Navigating the complexities of income tax can be daunting. Our Income Tax Assistant simplifies the process, helping you maximize deductions and minimize liabilities. Stay informed about tax laws and file your returns with confidence."
            onPress={() => handleOptionClick('IncomeTaxAssistant')}
            showFullText={showFullText}
            setShowFullText={setShowFullText}
          />
          <OptionBlock
            title="Know More"
            description="Curiosity knows no bounds. With Know More, embark on a journey of discovery. Explore diverse topics, from science and technology to arts and culture. Expand your knowledge and broaden your horizons."
            onPress={() => handleOptionClick('KnowMore')}
            showFullText={showFullText}
            setShowFullText={setShowFullText}
          />
          <OptionBlock
            title="AI Chatbot"
            description="Engage in meaningful conversations with our AI Chatbot. Whether you need assistance, advice, or simply someone to talk to, our intelligent chatbot is here for you 24/7. Experience the future of communication today."
            onPress={() => handleOptionClick('AIChatbot')}
            showFullText={showFullText}
            setShowFullText={setShowFullText}
          />
        </View>
        <TouchableOpacity style={styles.homeButton} onPress={handleHomeClick}>
          <MaterialIcons name="home" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const OptionBlock = ({ title, description, onPress, showFullText, setShowFullText }) => {
  return (
    <TouchableOpacity style={[styles.button, styles.card]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: '#FFFF00' }]}>{title}</Text>
      {showFullText ? (
        <Text style={styles.optionText}>{description}</Text>
      ) : (
        <Text style={styles.optionText}>{description.substring(0, 100)}...</Text>
      )}
      <TouchableOpacity onPress={() => setShowFullText(!showFullText)}>
        <Text style={styles.readMoreText}>{showFullText ? 'Show Less' : 'Read More'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  optionsContainer: {
    width: '100%',
  },
  card: {
    backdropFilter: 'blur(16px) saturate(180%)',
    WebkitBackdropFilter: 'blur(16px) saturate(180%)',
    backgroundColor: 'rgba(17, 25, 40, 0.75)',
    borderRadius: 12,
    border: '1px solid rgba(255, 255, 255, 0.125)',
    marginBottom: 20,
    padding: 20,
  },
  button: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    borderRadius: 30,
    padding: 15,
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    borderRadius: 30,
    padding: 15,
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
  readMoreText: {
    color: '#ffffff',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default Main;
