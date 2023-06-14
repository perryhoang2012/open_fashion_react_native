import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomImage from '@components/CustomImage';
import {LOGO} from '@assets/images';
import {useSafeAreaInsetsCustom} from '@hooks/useSafeAreaInsetsCustom';
import {BODY, TITLE_ACTIVE, WHITE} from '@assets/colors';
import CustomText from '@components/CustomText';
import FloatingTextInput from '@components/FloatingTextInput';
import Button from '@components/Button';

const Login = () => {
  const [state, setState] = useState({email: '', password: ''});
  return (
    <View
      style={[styles.container, {paddingTop: useSafeAreaInsetsCustom().top}]}>
      <CustomImage source={LOGO} style={styles.imageLogo} />
      <View
        style={{
          flex: 1,
          width: '100%',
          paddingHorizontal: 16,
          paddingTop: 100,
        }}>
        <CustomText title>LOGIN</CustomText>

        <FloatingTextInput
          value={state.email}
          onChangeValue={e => setState({...state, email: e})}
          label="Email"
        />

        <FloatingTextInput
          value={state.password}
          onChangeValue={e => setState({...state, password: e})}
          label="Password"
          styleInput={{marginTop: 20}}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginTop: 20,
          }}>
          <Button>
            <CustomText subTitle14>Forgot password ?</CustomText>
          </Button>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 25,
          }}>
          <Button px={30} py={8} style={{backgroundColor: TITLE_ACTIVE}}>
            <CustomText medium color={WHITE}>
              Login
            </CustomText>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
});
