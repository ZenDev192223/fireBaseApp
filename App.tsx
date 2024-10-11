import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/Login';
import { useState } from 'react';
import { FIREBASE_AUTH } from './FirebaseConfig';
import Home from './app/screens/Home';
import Signup from './app/screens/Signup';


const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

// function InsideLayout(){
//   return(
//     <InsideStack.Navigator>
//       <InsideStack.Screen name="My todos" component={List}/>
//     </InsideStack.Navigator>
//   )
// }

export default function App() {

 


  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
      </Stack.Navigator>
   </NavigationContainer>
  );
}




