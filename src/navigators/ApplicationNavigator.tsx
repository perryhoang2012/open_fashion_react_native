import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '@screens/index';
import {SCREEN_WIDTH} from '@utils/func';
import * as React from 'react';

const Drawer = createDrawerNavigator();

const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            width: SCREEN_WIDTH,
          },
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
