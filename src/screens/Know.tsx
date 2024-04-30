import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For GitHub icon
import { Ionicons } from '@expo/vector-icons'; // For LinkedIn icon

const KnowMore: React.FC = () => {
  return (
    <ImageBackground source={require('../screens/4.gif')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <Text style={styles.heading}>About RCOP</Text>
          <Text style={styles.description}>
            RCOP (Rapid Community of Programmers) is a group dedicated to harnessing the power of technology for the betterment of mankind. We believe in leveraging innovation and collaboration to address societal challenges and drive positive change.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Our Contributions</Text>
          <Text style={styles.description}>
            - Developing cutting-edge technologies to solve real-world problems.
            {'\n'}- Organizing educational programs and workshops to empower individuals with technical skills.
            {'\n'}- Collaborating with humanitarian organizations to provide technological solutions for social causes.
            {'\n'}- Contributing to open-source projects and sharing knowledge with the global community.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Features of Our App</Text>
          <Text style={styles.description}>
            - AI-powered chatbot for personalized assistance.
            {'\n'}- Seamless integration with various platforms and services.
            {'\n'}- Secure and encrypted communication channels.
            {'\n'}- Real-time updates and notifications.
            {'\n'}- User-friendly interface with customizable themes.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Benefits of Our App</Text>
          <Text style={styles.description}>
            - Access to instant information and assistance anytime, anywhere.
            {'\n'}- Enhanced productivity and efficiency in daily tasks.
            {'\n'}- Improved communication and collaboration among users.
            {'\n'}- Empowerment through knowledge sharing and learning opportunities.
            {'\n'}- Contribution to a connected and informed community.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Our Team</Text>
          <View style={styles.teamContainer}>
            <View style={styles.member}>
              <Image source={require('./1.jpg')} style={styles.memberImage} />
              <Text style={styles.memberName}>Priyant Banerjee</Text>
              <Text style={styles.memberRole}>Founder & CEO</Text>
              <TouchableOpacity onPress={() => Linking.openURL('https://github.com/pbhacks')}>
                <Icon name="github" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/pbhacks')}>
                <Ionicons name="logo-linkedin" style={styles.icon} />
              </TouchableOpacity>
            </View>
            <View style={styles.member}>
              <Image source={require('./2.jpg')} style={styles.memberImage} />
              <Text style={styles.memberName}>Utkarsh Mhatre</Text>
              <Text style={styles.memberRole}>Director</Text>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/utkarshmhatre/')}>
                <Ionicons name="logo-linkedin" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 50,
  },
  description: {
    color: '#CCCCCC',
    fontSize: 16,
    lineHeight: 24,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 30,
    marginVertical: 5,
    color: 'white',
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  member: {
    alignItems: 'center',
  },
  memberImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 5,
  },
  memberName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  memberRole: {
    color: '#CCCCCC',
    fontSize: 14,
    marginBottom: 10,
  },
});

export default KnowMore;
