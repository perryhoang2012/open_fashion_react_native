import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {HomeScreen} from '@screens/index';
import {SCREEN_WIDTH} from '@utils/func';
import {RootStackParamList} from 'models/navigation';
import * as React from 'react';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator<RootStackParamList>();

const MainNavigator = () => {
  const navigation = useNavigation();

  console.log('navigation', navigation);

  return (
    <>
      <Drawer.Navigator
        useLegacyImplementation={false}
        initialRouteName="Home"
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{
          headerShown: false, // hide header drawer
          drawerStyle: {
            width: SCREEN_WIDTH, // full screen width
          },
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </>
  );
};

export default MainNavigator;
