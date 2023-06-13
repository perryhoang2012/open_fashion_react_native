import {PRIMARY} from '@assets/colors';
import {useReduxDispatch} from '@redux/configureStore';
import {setLoading} from '@redux/slices/generalSlice';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@utils/func';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Button from './Button';

type Props = {
  loading?: boolean;
};

const AppLoading = (props: Props) => {
  const {loading} = props;
  const dispatch = useReduxDispatch();

  if (loading) {
    return (
      <View style={styles.viewAbsolute}>
        <View style={styles.container}>
          <Button onPress={() => dispatch(setLoading(false))}>
            <ActivityIndicator size="large" color={PRIMARY} />
          </Button>
        </View>
      </View>
    );
  }

  return <></>;
};

export default AppLoading;

const styles = StyleSheet.create({
  viewAbsolute: {
    flex: 1,
    position: 'absolute',
    zIndex: 9999,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});
