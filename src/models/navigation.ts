import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
};

export type DrawerParamList = {
  Home: undefined;
  Profile: {userId: string};
};
export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
type HomeScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Home'>;

export type RootNavigationProp = HomeScreenNavigationProp;

export type RootRouteProps<T extends keyof RootStackParamList> = {
  navigation: RootNavigationProp;
  route: RouteProp<RootStackParamList, T>;
};
