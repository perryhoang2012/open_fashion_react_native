import {TITLE_ACTIVE, WHITE} from '@assets/colors';
import {LOGO} from '@assets/images';
import Button from '@components/Button';
import CustomImage from '@components/CustomImage';
import CustomText from '@components/CustomText';
import FloatingTextInput from '@components/FloatingTextInput';
import {useCustomNavigation} from '@hooks/useCustomNavigation';
import {useSafeAreaInsetsCustom} from '@hooks/useSafeAreaInsetsCustom';
import {validateEmail} from '@utils/func';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

export const Register = () => {
  const navigation = useCustomNavigation();
  const [state, setState] = useState({
    email: '',
    password: '',
    reEnterPassword: '',
    errorEmail: '',
    errorPassword: '',
    errorReEnterPassword: '',
    show_password: false,
    show_re_enter_password: false,
  });

  return (
    <View
      style={[styles.container, {paddingTop: useSafeAreaInsetsCustom().top}]}>
      <CustomImage source={LOGO} style={styles.imageLogo} />
      <View style={styles.viewBody}>
        <CustomText title>SIGN UP</CustomText>

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

        <FloatingTextInput
          value={state.reEnterPassword}
          onChangeValue={e => setState({...state, password: e})}
          label="Re-enter password"
          styleInput={styles.input}
          showError={state.errorReEnterPassword.length > 0}
          error={state.errorReEnterPassword}
          isPassword={!state.show_re_enter_password}
          showPassword={() => {
            setState({
              ...state,
              show_re_enter_password: !state.show_re_enter_password,
            });
          }}
          actionOnBlur={() => {
            if (state.errorReEnterPassword.length < 6) {
              setState({
                ...state,
                errorReEnterPassword: 'Password must be 6-12 characters',
              });
            } else {
              setState({
                ...state,
                errorReEnterPassword: '',
              });
            }
          }}
        />

        <View style={styles.viewButtonLogin}>
          <Button px={30} py={8} style={{backgroundColor: TITLE_ACTIVE}}>
            <CustomText medium color={WHITE}>
              SignUp
            </CustomText>
          </Button>
        </View>
        <View style={styles.viewButtonGoToSignIn}>
          <Button onPress={() => navigation.goBack()}>
            <CustomText small>Go back Login ?</CustomText>
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
