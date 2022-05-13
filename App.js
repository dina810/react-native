import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About';
import Splash from './screens/Splash';
import CardDetails from './screens/CardDetails';
import Google from './screens/Google';
import Whatsapp from './screens/Watsapp'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' name='Splash' component={Splash}  screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="About" component={About} /> */}
        <Stack.Screen name="Google" component={Google} />
        <Stack.Screen name="Whatsapp" component={Whatsapp} />
        <Stack.Screen name="CardDetails" component={CardDetails} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;