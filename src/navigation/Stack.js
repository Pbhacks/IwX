import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import BA from '../screens/BA'; // Import the BA component
import Main from '../screens/Main';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
       <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BA" component={BA} /> 
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
