import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import * as GoogleGenerativeAI from "@google/generative-ai";
import { showMessage } from "react-native-flash-message";
import * as Speech from "expo-speech";

type MessageType = {
  text: string;
  user: boolean;
};

const GeminiChat: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [showStopIcon, setShowStopIcon] = useState<boolean>(true);

  const API_KEY: string = "AIzaSyCjg5AX_PehGrKTsR97Uxo9YhgfLH28FSU";

  useEffect(() => {
    const startChat = async () => {
      const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = "hello! ";
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      console.log(text);
      showMessage({
        message: "Welcome to Gemini Chat 🤖",
        description: text,
        type: "info",
        icon: "info",
        duration: 2000,
      });
      setMessages([{ text, user: false }]);
    };
    startChat();
  }, []);

  const sendMessage = async () => {
    setLoading(true);
    const userMessage: MessageType = { text: userInput, user: true };
    setMessages([...messages, userMessage]);

    const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = userMessage.text;
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    setMessages([...messages, { text, user: false }]);
    setLoading(false);
    setUserInput("");

    if (text && !isSpeaking) {
      Speech.speak(text);
      setIsSpeaking(true);
      setShowStopIcon(true);
    }
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      Speech.stop();
      setIsSpeaking(false);
    } else {
      Speech.speak(messages[messages.length - 1].text);
      setIsSpeaking(true);
    }
  };

  const clearMessages = () => {
    Speech.stop(); // Stop speech
    setMessages([]);
    setIsSpeaking(false);
  };

  const renderMessage = ({ item }: { item: MessageType }) => (
    <View style={[styles.messageContainer, item.user ? styles.userMessageContainer : styles.botMessageContainer]}>
      <Text style={[styles.messageText, item.user ? styles.userMessageText : styles.botMessageText]}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <ImageBackground source={require('./icegif.gif')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.text}
          inverted
        />
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.micIcon} onPress={toggleSpeech}>
            {isSpeaking ? (
              <FontAwesome name="microphone-slash" size={24} color="white" />
            ) : (
              <FontAwesome name="microphone" size={24} color="white" />
            )}
          </TouchableOpacity>
          <TextInput
            placeholder="Type a message"
            onChangeText={setUserInput}
            value={userInput}
            onSubmitEditing={sendMessage}
            style={styles.input}
            placeholderTextColor="#fff"
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
          {showStopIcon && (
            <TouchableOpacity style={styles.stopIcon} onPress={clearMessages}>
              <Entypo name="controller-stop" size={24} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  messageContainer: { padding: 10, marginVertical: 5 },
  messageText: { fontSize: 16, color: "white" },
  userMessageContainer: { backgroundColor: "blue", alignSelf: "flex-end", borderRadius: 10 },
  botMessageContainer: { backgroundColor: "black", alignSelf: "flex-start", borderRadius: 10 },
  userMessageText: { color: "white" },
  botMessageText: { color: "white" },
  inputContainer: { flexDirection: "row", alignItems: "center", padding: 10 },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#131314",
    borderRadius: 10,
    height: 50,
    color: "white",
  },
  micIcon: {
    padding: 10,
    backgroundColor: "#131314",
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  sendButton: {
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  stopIcon: {
    padding: 10,
    backgroundColor: "#131314",
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default GeminiChat;
