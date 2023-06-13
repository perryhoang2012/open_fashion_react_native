import ApplicationNavigator from '@navigators/ApplicationNavigator';
import * as Sentry from '@sentry/react-native';
import {isSimulator} from '@utils/func';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store, persistor} from '@redux/configureStore';
import {PersistGate} from 'redux-persist/lib/integration/react';

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <ApplicationNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default Sentry.wrap(App);
