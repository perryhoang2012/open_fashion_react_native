import AppLoading from '@components/AppLoading';
import {useReduxSelector} from '@redux/configureStore';
import * as React from 'react';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const ApplicationNavigator = () => {
  const loading = useReduxSelector(state => state.general.loading);
  const token = useReduxSelector(state => state.user.token);

  console.log(token);
  return (
    <>
      {!!token ? <MainNavigator /> : <AuthNavigator />}
      <AppLoading loading={loading} />
    </>
  );
};

export default ApplicationNavigator;
