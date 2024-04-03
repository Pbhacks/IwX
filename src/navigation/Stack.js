import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import BA from '../screens/BA'; // Import the BA component
import Main from '../screens/Main';
import Settings from '../screens/Settings';
import ai from '../screens/ai';
import Know from '../screens/Know';
import Itxassist from '../screens/Itxasssist';
import LpIndia from '../screens/subscreens/India/LpIndia';
import LpChina from '../screens/subscreens/China/LpChina';
import LpJapan from '../screens/subscreens/Japan/LpJapan';
import LpSouthk from '../screens/subscreens/Southk/LpSouthk';
import ChinaLS from '../screens/subscreens/China/ChinaLS';
import ChinaOv from '../screens/subscreens/China/ChinaOv';
import Performance from '../screens/Performance';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
       <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BA" component={BA} /> 
      <Stack.Screen name="Itxassist" component={Itxassist}/>
      <Stack.Screen name="LpChina"  component={LpChina}/>
      <Stack.Screen name="ChinaLS"  component={ChinaLS}/>
      <Stack.Screen name="ChinaOv"  component={ChinaOv}/>
      <Stack.Screen name="LpIndia"  component={LpIndia}/>
      <Stack.Screen name="LpJapan"  component={LpJapan}/>
      <Stack.Screen name="LpSouthk"  component={LpSouthk}/>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ai" component={ai} />
      <Stack.Screen name="Know" component={Know} />
      <Stack.Screen name="Performance" component={Performance} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
