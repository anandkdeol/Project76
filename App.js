import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import spaceCraft from './screens/spaceCraft';
import starMap  from './screens/starMap';
import dailyPic from './screens/dailyPic';
import HomeScreen from './screens/HomeScreen'; 
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="starMap" component={starMap} />
        <Stack.Screen name="dailyPic" component={dailyPic} />
        <Stack.Screen name="spaceCraft" component={spaceCraft} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;