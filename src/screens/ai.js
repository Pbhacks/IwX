import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

const AiChat = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    // Add user message to chat history
    setChatHistory([...chatHistory, { message: userInput, sender: 'user' }]);
    setUserInput('');

    try {
      // Prepare data for OpenAI API request
      const requestData = {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: userInput
          },
          ...chatHistory.map(chat => ({ role: 'assistant', content: chat.message }))
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      };

      // Fetch AI response from OpenAI API using axios
      const response = await axios.post('https://api.openai.com/v1/completions', requestData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
        },
      });

      const aiResponse = response.data.choices[0].text.trim();

      // Add AI response to chat history
      setChatHistory([...chatHistory, { message: aiResponse, sender: 'AI' }]);
    } catch (error) {
      console.error('Error fetching AI response:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatContainer}>
        {chatHistory.map((chat, index) => (
          <View key={index} style={[styles.chatBubble, chat.sender === 'AI' ? styles.aiBubble : styles.userBubble]}>
            <Text style={styles.chatText}>{chat.message}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={userInput}
          onChangeText={setUserInput}
          placeholder="Type your message..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  chatContainer: {
    flex: 1,
    padding: 20,
  },
  chatBubble: {
    maxWidth: '80%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  userBubble: {
    backgroundColor: '#007aff',
    alignSelf: 'flex-end',
  },
  aiBubble: {
    backgroundColor: '#ddd',
  },
  chatText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007aff',
    borderRadius: 20,
    padding: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AiChat;
