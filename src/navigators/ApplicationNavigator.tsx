import AppLoading from '@components/AppLoading';
import {useReduxSelector} from '@redux/configureStore';
import * as React from 'react';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import {NavigationContainer} from '@react-navigation/native';

const ApplicationNavigator = () => {
  const loading = useReduxSelector(state => state.general.loading);
  const token = useReduxSelector(state => state.user.token);

  return (
    <NavigationContainer>
      {!!token ? <MainNavigator /> : <AuthNavigator />}
      <AppLoading loading={loading} />
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
