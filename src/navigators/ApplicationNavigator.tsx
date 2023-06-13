import AppLoading from '@components/AppLoading';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {useReduxSelector} from '@redux/configureStore';
import {HomeScreen} from '@screens/index';
import {SCREEN_WIDTH} from '@utils/func';
import {RootStackParamList} from 'models/navigation';
import * as React from 'react';
import DrawerContent from './DrawerContent';
import {PRIMARY} from '@assets/colors';

const Drawer = createDrawerNavigator<RootStackParamList>();

const ApplicationNavigator = () => {
  const loading = useReduxSelector(state => state.general.loading);

  const drawerContentOptions = {
    activeBackgroundColor: PRIMARY,
    activeTintColor: 'white',
    itemStyle: {
      borderBottomWidth: 1,
      borderBottomColor: '#e1e1e1',
      marginVertical: 0,
      padding: 3,
      borderRadius: 0,
    },
  };

  return (
    <NavigationContainer>
      {/* {loading ? (
        <AppLoading />
      ) : ( */}
      <Drawer.Navigator
        useLegacyImplementation={false}
        initialRouteName="Home"
        drawerContent={props => <DrawerContent {...props} />}
        // drawerContentOptions={drawerContentOptions}
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
