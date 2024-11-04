// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/login/login';
import ProfileScreen from './src/component/MainScreen/main';
import Register from './pages/register/register';
import Recovery from './pages/recovery/recovery'; 
import { ThemeProvider } from './src/component/Theme/theme'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Register" 
            component={Register} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Recovery" 
            component={Recovery} 
            options={{ headerShown: true }} 
            
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
