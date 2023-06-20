import {WHITE} from '@assets/colors';
import {LOGO} from '@assets/images';
import CustomImage from '@components/CustomImage';
import CustomText from '@components/CustomText';
import {RegisterForm} from '@components/auth/RegisterForm';
import {useSafeAreaInsetsCustom} from '@hooks/useSafeAreaInsetsCustom';
import {RegisterPayload} from '@models/auth';
import {useReduxDispatch} from '@redux/configureStore';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

export const Register = () => {
  const dispatch = useReduxDispatch();
  const handleLoginSubmit = (payLoad: RegisterPayload) => {
    // dispatch(authActions.login(payLoad));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, {paddingTop: useSafeAreaInsetsCustom().top}]}>
      <ScrollView contentContainerStyle={styles.containerScrollView}>
        <CustomImage source={LOGO} style={styles.imageLogo} />
        <View style={styles.viewBody}>
          <CustomText title>SIGN UP</CustomText>
          <RegisterForm onSubmit={handleLoginSubmit} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    width: '100%',
  },
  containerScrollView: {
    flex: 1,
    width: '100%',
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
  input: {
    marginTop: 20,
  },
  viewButtonForgotPassword: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 30,
  },
  viewButtonLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  viewButtonGoToSignIn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
});
