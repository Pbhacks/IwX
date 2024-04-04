import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import BA from '../screens/BA';
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


const Stack = createStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Main: undefined;
  Home: undefined;
  BA: undefined;
  Itxassist: undefined;
  LpChina: undefined;
  ChinaLS: undefined;
  ChinaOv: undefined;
  LpIndia: undefined;
  LpJapan: undefined;
  LpSouthk: undefined;
  Settings: undefined;
  ai: undefined;
  Know: undefined;
};

const MainStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
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
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
