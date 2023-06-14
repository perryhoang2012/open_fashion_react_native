import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@screens/Login';
import SignUp from '@screens/SignUp';
import React from 'react';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
