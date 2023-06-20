import {WHITE} from '@assets/colors';
import {LOGO} from '@assets/images';
import CustomImage from '@components/CustomImage';
import CustomText from '@components/CustomText';
import {LoginForm} from '@components/auth';
import {useSafeAreaInsetsCustom} from '@hooks/useSafeAreaInsetsCustom';
import {LoginPayload} from '@models/auth';
import {useReduxDispatch} from '@redux/configureStore';
import {authActions} from '@redux/slices/authSlice';
import React from 'react';
import {StyleSheet, View} from 'react-native';
export const Login = () => {
  const dispatch = useReduxDispatch();
  const handleLoginSubmit = (payLoad: LoginPayload) => {
    dispatch(authActions.login(payLoad));
  };

  return (
    <View
      style={[styles.container, {paddingTop: useSafeAreaInsetsCustom().top}]}>
      <CustomImage source={LOGO} style={styles.imageLogo} />
      <View style={styles.viewBody}>
        <CustomText title>LOGIN</CustomText>
        <LoginForm onSubmit={handleLoginSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: 'center',
  },
  imageLogo: {
    width: 200,
    height: 100,
  },
  viewBody: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 100,
  },
});
