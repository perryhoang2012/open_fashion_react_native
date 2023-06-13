import AppLoading from '@components/AppLoading';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {useReduxSelector} from '@redux/configureStore';
import {HomeScreen} from '@screens/index';
import {SCREEN_WIDTH} from '@utils/func';
import {RootStackParamList} from 'models/navigation';
import * as React from 'react';

const Drawer = createDrawerNavigator<RootStackParamList>();

const ApplicationNavigator = () => {
  const loading = useReduxSelector(state => state.general.loading);
  return (
    <NavigationContainer>
      {/* {loading ? (
        <AppLoading />
      ) : ( */}
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // hide header drawer
          drawerStyle: {
            width: SCREEN_WIDTH, // full screen width
          },
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>

      <AppLoading loading={loading} />
      {/* )} */}
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
