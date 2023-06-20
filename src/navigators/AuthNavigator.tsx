import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Register} from '@screens/auth';
import React from 'react';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
