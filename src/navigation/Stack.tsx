
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
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
import ChinaCorp from '../screens/subscreens/China/ChinaCorp';
import ChinaIndv from '../screens/subscreens/China/ChinaIndv';
import ChinaRebate from '../screens/subscreens/China/ChinaRebate';
import IndiaLS from '../screens/subscreens/India/IndiaLS';
import IndiaOv from '../screens/subscreens/India/IndiaOv';
import IndiaCorp from '../screens/subscreens/India/IndiaCorp';
import IndiaIndiv from '../screens/subscreens/India/IndiaIndiv';
import IndiaRebate from '../screens/subscreens/India/IndiaRebate';
import JapanLS from '../screens/subscreens/Japan/JapanLS';
import JapanOv from '../screens/subscreens/Japan/JapanOv';
import JapanCorp from '../screens/subscreens/Japan/JapanCorp';
import JapanIndiv from '../screens/subscreens/Japan/JapanIndiv';
import JapanRebate from '../screens/subscreens/Japan/JapanRebate';
import SouthKLS from '../screens/subscreens/Southk/SouthKLS';
import SouthKOv from '../screens/subscreens/Southk/SouthKOv';
import SouthKCorp from '../screens/subscreens/Southk/SouthKCorp';
import SouthKIndiv from '../screens/subscreens/Southk/SouthKIndiv';
import SouthKRebate from '../screens/subscreens/Southk/SouthKRebate';
import LpSouthK from '../screens/subscreens/Southk/LpSouthk';
import { TransitionPresets } from '@react-navigation/stack';

type RootStackParamList = {
  Main: undefined;
  Home: undefined;
  BA: undefined;
  Itxassist: undefined;
  LpChina: undefined;
  ChinaLS: undefined;
  ChinaOv: undefined;
  ChinaCorp: undefined;
  ChinaIndv: undefined;
  ChinaRebate: undefined;
  LpIndia: undefined;
  IndiaLS: undefined;
  IndiaOv: undefined;
  IndiaCorp: undefined;
  IndiaIndiv: undefined;
  IndiaRebate: undefined;
  LpJapan: undefined;
  JapanLS: undefined;
  JapanOv: undefined;
  JapanCorp: undefined;
  JapanIndiv: undefined;
  JapanRebate: undefined;
  LpSouthK: undefined;
  SouthKLS: undefined;
  SouthKOv: undefined;
  SouthKCorp: undefined;
  SouthKIndiv: undefined;
  SouthKRebate: undefined;
  Settings: undefined;
  ai: undefined;
  Know: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false
};

const MainStackNavigator: React.FC = () => {
  return (
   <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        
      }}>
      <Stack.Screen name="Main" component={Main} options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          presentation: 'modal', // Slide from bottom animation for this screen
        }} />
      <Stack.Screen name="Home" component={Home} options = {{...TransitionPresets.SlideFromRightIOS, presentation: 'modal'}} />
      <Stack.Screen name="BA" component={BA} />
      <Stack.Screen name="Itxassist" component={Itxassist} options = {{...TransitionPresets.SlideFromRightIOS, presentation: 'modal'}}/>
      <Stack.Screen name="LpChina" component={LpChina} />
      <Stack.Screen name="ChinaLS" component={ChinaLS} />
      <Stack.Screen name="ChinaOv" component={ChinaOv} />
      <Stack.Screen name="ChinaCorp" component={ChinaCorp} />
      <Stack.Screen name="ChinaIndv" component={ChinaIndv} />
      <Stack.Screen name="ChinaRebate" component={ChinaRebate} />
      <Stack.Screen name="LpIndia" component={LpIndia} />
      <Stack.Screen name="IndiaLS" component={IndiaLS} />
      <Stack.Screen name="IndiaOv" component={IndiaOv} />
      <Stack.Screen name="IndiaCorp" component={IndiaCorp} />
      <Stack.Screen name="IndiaIndiv" component={IndiaIndiv} />
      <Stack.Screen name="IndiaRebate" component={IndiaRebate} />
      <Stack.Screen name="LpJapan" component={LpJapan} />
      <Stack.Screen name="JapanLS" component={JapanLS} />
      <Stack.Screen name="JapanOv" component={JapanOv} />
      <Stack.Screen name="JapanCorp" component={JapanCorp} />
      <Stack.Screen name="JapanIndiv" component={JapanIndiv} />
      <Stack.Screen name="JapanRebate" component={JapanRebate} />
      <Stack.Screen name="LpSouthK" component={LpSouthK} />
      <Stack.Screen name="SouthKLS" component={SouthKLS} />
      <Stack.Screen name="SouthKOv" component={SouthKOv} />
      <Stack.Screen name="SouthKCorp" component={SouthKCorp} />
      <Stack.Screen name="SouthKIndiv" component={SouthKIndiv} />
      <Stack.Screen name="SouthKRebate" component={SouthKRebate} />
      <Stack.Screen name="Settings" component={Settings} options = {{...TransitionPresets.SlideFromRightIOS, presentation: 'modal'}}/>
      <Stack.Screen name="ai" component={ai} options = {{...TransitionPresets.SlideFromRightIOS, presentation: 'modal'}}/>
      <Stack.Screen name="Know" component={Know} options = {{...TransitionPresets.SlideFromRightIOS, presentation: 'modal'}}/>
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
