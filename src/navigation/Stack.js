import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import BA from '../screens/BA'; // Import the BA component
import Main from '../screens/Main';
import Settings from '../screens/Settings';
import ai from '../screens/ai';
import Know from '../screens/Know';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
       <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BA" component={BA} /> 
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ai" component={ai} />
      <Stack.Screen name="Know" component={Know} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
