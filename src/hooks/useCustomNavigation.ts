import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'models/navigation';

type ExtendedNavigationProp = DrawerNavigationProp<RootStackParamList> & {
  toggleDrawer: () => void;
};

export const useCustomNavigation = (): ExtendedNavigationProp => {
  const navigation = useNavigation<ExtendedNavigationProp>();

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return {...navigation, toggleDrawer};
};
