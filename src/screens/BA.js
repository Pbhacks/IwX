import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const BA = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [income, setIncome] = useState(0);
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [showItemList, setShowItemList] = useState(false);
  const [showModifyButton, setShowModifyButton] = useState(false);
  const [modifyIncome, setModifyIncome] = useState(false);
  const [modifyItems, setModifyItems] = useState(false);
  const [monthlySalary, setMonthlySalary] = useState(0);
  const [submittedNameLocation, setSubmittedNameLocation] = useState(false);

  const handleNameLocationSubmit = () => {
    if (name && location) {
      setSubmittedNameLocation(true);
      setModifyIncome(true);
    } else {
      Alert.alert('Error', 'Please enter your name and location.');
    }
  };

  const handleIncomeSubmit = () => {
    if (income > 0) {
      setMonthlySalary(income);
      setShowModifyButton(true);
      setModifyIncome(false);
      Alert.alert('Success', `Monthly income submitted: ₹${income}`);
    } else {
      Alert.alert('Error', 'Please enter a valid monthly income.');
    }
  };

  const handleModifyIncome = () => {
    setModifyIncome(true);
    setShowModifyButton(false);
  };

  const handleModifyItems = () => {
    setModifyItems(!modifyItems);
  };

  const handleAddItem = () => {
    if (itemName && itemPrice) {
      setItems([...items, { id: items.length + 1, name: itemName, price: parseFloat(itemPrice) }]);
      setItemName('');
      setItemPrice('');
    } else {
      Alert.alert('Error', 'Please enter item name and price.');
    }
  };

  const handleRemoveItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const handleSubmit = () => {
    let totalCost = items.reduce((total, item) => total + item.price, 0);
    let remainingBalance = monthlySalary - totalCost;
    Alert.alert('Total Cost', `Your total expenses: ₹${totalCost}\nRemaining balance: ₹${remainingBalance}`);
  };

  const handleViewList = () => {
    setShowItemList(!showItemList);
  };

  const totalCost = items.reduce((total, item) => total + item.price, 0);

  return (
    <LinearGradient colors={['#002147', '#8A2BE2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {!submittedNameLocation && (
          <>
            <Text style={styles.label}>Enter your name and location:</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Name"
            />
            <TextInput
              style={styles.input}
              value={location}
              onChangeText={(text) => setLocation(text)}
              placeholder="Location"
            />
            <TouchableOpacity style={styles.button} onPress={handleNameLocationSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </>
        )}

        {modifyIncome && (
          <>
            <Text style={styles.label}>Monthly Income (in ₹):</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={1000000}
              value={income}
              onValueChange={(value) => setIncome(value)}
            />
            <Text style={styles.incomeText}>₹{income}</Text>
            <TouchableOpacity style={styles.button} onPress={handleIncomeSubmit}>
              <Text style={styles.buttonText}>Submit Income</Text>
            </TouchableOpacity>
          </>
        )}

        {showModifyButton && (
          <TouchableOpacity style={styles.button} onPress={handleModifyIncome}>
            <Text style={styles.buttonText}>Modify Income</Text>
          </TouchableOpacity>
        )}

        {showModifyButton && (
          <TouchableOpacity style={styles.button} onPress={handleModifyItems}>
            <Text style={styles.buttonText}>{modifyItems ? 'Done' : 'Modify Items'}</Text>
          </TouchableOpacity>
        )}

        {monthlySalary > 0 && (
          <>
            <Text style={styles.label}>Add Items and Prices:</Text>
            <TextInput
              style={styles.input}
              value={itemName}
              onChangeText={(text) => setItemName(text)}
              placeholder="Item name"
            />
            <TextInput
              style={styles.input}
              value={itemPrice}
              onChangeText={(text) => setItemPrice(text)}
              keyboardType="numeric"
              placeholder="Item price (in ₹)"
            />
            <TouchableOpacity style={styles.button} onPress={handleAddItem}>
              <Text style={styles.buttonText}>Add Item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewListButton} onPress={handleViewList}>
              <Text style={styles.viewListButtonText}>{showItemList ? 'Hide List' : 'View List'}</Text>
            </TouchableOpacity>
          </>
        )}

        {showItemList && (
          <>
            <View style={styles.itemListContainer}>
              <Text style={styles.label}>Items List:</Text>
              <ScrollView style={styles.itemList}>
                <View style={styles.itemListHeader}>
                  <Text>ID</Text>
                  <Text>Name</Text>
                  <Text>Price (₹)</Text>
                  <Text></Text>
                </View>
                {items.map((item) => (
                  <View key={item.id} style={styles.itemRow}>
                    <Text>{item.id}</Text>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                    {modifyItems && (
                      <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                        <MaterialIcons name="remove-circle" size={24} color="red" />
                      </TouchableOpacity>
                    )}
                  </View>
                ))}
                <View style={styles.totalRow}>
                  <Text>Total:</Text>
                  <Text>{totalCost}</Text>
                </View>
                <View style={styles.totalRow}>
                  <Text>Remaining Balance:</Text>
                  <Text>{monthlySalary - totalCost}</Text>
                </View>
              </ScrollView>
            </View>
          </>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 15,
  },
  incomeText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
    color: '#ffffff',
  },
  viewListButton: {
    backgroundColor: '#8A2BE2',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  viewListButtonText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#8A2BE2',
    padding: 15,
    borderRadius: 20, // Rounded corners
    marginTop: 10,
    alignItems: 'center', // Center the text horizontally
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
  itemListContainer: {
    marginTop: 20,
    width: '100%',
  },
  itemList: {
    maxHeight: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  itemListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default BA;
