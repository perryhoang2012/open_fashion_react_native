import AppLoading from '@components/AppLoading';
import {useReduxSelector} from '@redux/configureStore';
import * as React from 'react';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {MMKV} from 'react-native-mmkv';

const ApplicationNavigator = () => {
  const storage = new MMKV();

  const loading = useReduxSelector(state => state.general.loading);
  const token = storage.getString('access_token');

  return (
    <NavigationContainer>
      {Boolean(token) ? <MainNavigator /> : <AuthNavigator />}
      <AppLoading loading={loading} />
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
