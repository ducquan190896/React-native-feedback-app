import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {TailwindProvider} from 'tailwind-rn';
import Home from './screens/Home';
import store from './Store';
import utilities from './tailwind.json';
import { NativeBaseProvider } from "native-base";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}> 
    
    <TailwindProvider utilities={utilities}>
      <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
      
    
      <Stack.Screen name='home' component={Home}></Stack.Screen>
    
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
   </TailwindProvider>
     </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
