import {TITLE_ACTIVE, WHITE} from '@assets/colors';
import {LOGO} from '@assets/images';
import Button from '@components/Button';
import CustomImage from '@components/CustomImage';
import CustomText from '@components/CustomText';
import FloatingTextInput from '@components/FloatingTextInput';
import {LoginForm} from '@components/auth';
import {useCustomNavigation} from '@hooks/useCustomNavigation';
import {useSafeAreaInsetsCustom} from '@hooks/useSafeAreaInsetsCustom';
import {LoginPayload} from '@models/auth';
import {useReduxDispatch} from '@redux/configureStore';
import {login} from '@redux/slices/userSlice';
import {validateEmail} from '@utils/func';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

export const Login = () => {
  const navigation = useCustomNavigation();
  const dispatch = useReduxDispatch();
  const [state, setState] = useState({
    email: '',
    password: '',
    errorEmail: '',
    errorPassword: '',
    show_password: false,
  });

  const onSubmit = () => {
    dispatch(login());
  };
  const handleLoginSubmit = (payLoad: LoginPayload) => {
    // do whatever you want with payload
    console.log('payLoad', payLoad);
  };

  return (
    <View
      style={[styles.container, {paddingTop: useSafeAreaInsetsCustom().top}]}>
      {/* <LoginForm onSubmit={handleLoginSubmit} /> */}
      <CustomImage source={LOGO} style={styles.imageLogo} />
      <View style={styles.viewBody}>
        <CustomText title>LOGIN</CustomText>

        <FloatingTextInput
          value={state.email}
          onChangeValue={e => setState({...state, email: e})}
          label="Email"
          showError={state.errorEmail.length > 0}
          error={state.errorEmail}
          actionOnBlur={() => {
            if (!validateEmail(state.email)) {
              setState({
                ...state,
                errorEmail: 'Please provide a valid email address',
              });
            } else {
              setState({
                ...state,
                errorEmail: '',
              });
            }
          }}
        />
        <FloatingTextInput
          value={state.password}
          onChangeValue={e => setState({...state, password: e})}
          label="Password"
          styleInput={styles.input}
          showError={state.errorPassword.length > 0}
          error={state.errorPassword}
          isPassword={!state.show_password}
          showPassword={() => {
            setState({...state, show_password: !state.show_password});
          }}
          actionOnBlur={() => {
            if (state.password.length < 6) {
              setState({
                ...state,
                errorPassword: 'Password must be 6-12 characters',
              });
            } else {
              setState({
                ...state,
                errorPassword: '',
              });
            }
          }}
        />
        <View style={styles.viewButtonForgotPassword}>
          <Button>
            <CustomText subTitle14>Forgot password ?</CustomText>
          </Button>
        </View>

        <View style={styles.viewButtonLogin}>
          <Button
            px={30}
            py={8}
            style={{backgroundColor: TITLE_ACTIVE}}
            onPress={() => onSubmit()}>
            <CustomText medium color={WHITE}>
              Login
            </CustomText>
          </Button>
        </View>
        <View style={styles.viewButtonGoToSignIn}>
          <Button onPress={() => navigation.navigate('SignUp')}>
            <CustomText small>Create an account?</CustomText>
          </Button>
        </View>
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
