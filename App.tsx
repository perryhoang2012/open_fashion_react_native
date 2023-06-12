/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import ApplicationNavigator from '@navigators/ApplicationNavigator';
import * as Sentry from '@sentry/react-native';
import {isSimulator} from '@utils/func';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

if (!isSimulator()) {
  Sentry.init({
    dsn: 'https://82bc523377444307a4e5d20bbdf246f1@o4505344217317376.ingest.sentry.io/4505344219086848',
    tracesSampleRate: 1.0,
    debug: true,
  });

  try {
    //
  } catch (err) {
    Sentry.captureException(err);
  }
}

const App = () => {
  return (
    <SafeAreaProvider>
      <ApplicationNavigator />
    </SafeAreaProvider>
  );
};

export default Sentry.wrap(App);
