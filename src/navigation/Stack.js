import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import BA from '../screens/BA';
import Main from '../screens/Main';
import Settings from '../screens/Settings';
import ai from '../screens/ai';
import Know from '../screens/Know';
import Itxassist from '../screens/Itxassist';
import LpChina from '../screens/subscreens/China/LpChina';
import ChinaLS from '../screens/subscreens/China/ChinaLS';
import ChinaOv from '../screens/subscreens/China/ChinaOv';
import ChinaCorp from '../screens/subscreens/China/ChinaCorp';
import ChinaIndv from '../screens/subscreens/China/ChinaIndv';
import ChinaRebate from '../screens/subscreens/China/ChinaRebate';
import LpIndia from '../screens/subscreens/India/LpIndia';
import IndiaLS from '../screens/subscreens/India/IndiaLS';
import IndiaOv from '../screens/subscreens/India/IndiaOv';
import IndiaCorp from '../screens/subscreens/India/IndiaCorp';
import IndiaIndiv from '../screens/subscreens/India/IndiaIndiv';
import IndiaRebate from '../screens/subscreens/India/IndiaRebate';
import LpJapan from '../screens/subscreens/Japan/LpJapan';
import JapanLS from '../screens/subscreens/Japan/JapanLS';
import JapanOv from '../screens/subscreens/Japan/JapanOv';
import JapanCorp from '../screens/subscreens/Japan/JapanCorp';
import JapanIndiv from '../screens/subscreens/Japan/JapanIndiv';
import JapanRebate from '../screens/subscreens/Japan/JapanRebate';
import LpSouthK from '../screens/subscreens/Southk/LpSouthK';
import SouthKLS from '../screens/subscreens/Southk/SouthKLS';
import SouthKOv from '../screens/subscreens/Southk/SouthKOv';
import SouthKCorp from '../screens/subscreens/Southk/SouthKCorp';
import SouthKIndiv from '../screens/subscreens/Southk/SouthKIndiv';
import SouthKRebate from '../screens/subscreens/Southk/SouthKRebate';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BA" component={BA} />
      <Stack.Screen name="Itxassist" component={Itxassist}/>
      <Stack.Screen name="LpChina" component={LpChina}/>
      <Stack.Screen name="ChinaLS" component={ChinaLS}/>
      <Stack.Screen name="ChinaOv" component={ChinaOv}/>
      <Stack.Screen name="ChinaCorp" component={ChinaCorp}/>
      <Stack.Screen name="ChinaIndv" component={ChinaIndv}/>
      <Stack.Screen name="ChinaRebate" component={ChinaRebate}/>
      <Stack.Screen name="LpIndia" component={LpIndia}/>
      <Stack.Screen name="IndiaLS" component={IndiaLS}/>
      <Stack.Screen name="IndiaOv" component={IndiaOv}/>
      <Stack.Screen name="IndiaCorp" component={IndiaCorp}/>
      <Stack.Screen name="IndiaIndiv" component={IndiaIndiv}/>
      <Stack.Screen name="IndiaRebate" component={IndiaRebate}/>
      <Stack.Screen name="LpJapan" component={LpJapan}/>
      <Stack.Screen name="JapanLS" component={JapanLS}/>
      <Stack.Screen name="JapanOv" component={JapanOv}/> 
      <Stack.Screen name="JapanCorp" component={JapanCorp}/>    
      <Stack.Screen name="JapanIndiv" component={JapanIndiv}/>
      <Stack.Screen name="JapanRebate" component={JapanRebate}/>  
      <Stack.Screen name="LpSouthK" component={LpSouthK}/>
      <Stack.Screen name="SouthKLS" component={SouthKLS}/>
      <Stack.Screen name="SouthKOv" component={SouthKOv}/> 
      <Stack.Screen name="SouthKCorp" component={SouthKCorp}/>
      <Stack.Screen name="SouthKIndiv" component={SouthKIndiv}/>
      <Stack.Screen name="SouthKRebate" component={SouthKRebate}/>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ai" component={ai} />
      <Stack.Screen name="Know" component={Know} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
