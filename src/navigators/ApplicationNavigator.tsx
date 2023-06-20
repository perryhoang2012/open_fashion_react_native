import AppLoading from '@components/AppLoading';
import NetInfo from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import {useReduxSelector} from '@redux/configureStore';
import {errorToast} from '@utils/Toast';
import * as React from 'react';
import AuthNavigator from './AuthNavigator';

const ApplicationNavigator = () => {
  const loading = useReduxSelector(state => state.general.loading);

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log(state);
      if (!state.isConnected) {
        errorToast('Network is not connected', 'Network is not connected');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      {/* {!!token ? <MainNavigator /> : <AuthNavigator />} */}
      <AuthNavigator />
      <AppLoading loading={loading} />
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
