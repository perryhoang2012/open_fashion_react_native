import {TITLE_ACTIVE, WHITE} from '@assets/colors';
import Button from '@components/Button';
import CustomText from '@components/CustomText';
import {InputField} from '@components/form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useCustomNavigation} from '@hooks/useCustomNavigation';
import {LoginPayload} from '@models/auth';
import * as React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import * as yup from 'yup';

export interface LoginFormProps {
  onSubmit?: (payLoad: LoginPayload) => void;
}
// login form sẽ giúp mình xử lý lấy value input của user rồi validate thông tin đó có hợp lệ hay không nếu hợp lệ thì componet cha sẽ xử lý cái việc submit đó
export function LoginForm({onSubmit}: LoginFormProps) {
  const navigation = useCustomNavigation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Please enter your email')
      .email('Please enter a valid email address'),
    password: yup
      .string()
      .required('Please enter your password')
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must be at most 20 characters'),
  });
  const {control, handleSubmit} = useForm<LoginPayload>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const handleFormSubmit = (payload: LoginPayload) => {
    onSubmit?.(payload);
  };
  return (
    <View>
      <InputField control={control} name="email" label="EMAIL" />
      <InputField
        control={control}
        name="password"
        isPassword={true}
        label="Password"
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
          onPress={handleSubmit(handleFormSubmit)}>
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
  );
}
const styles = StyleSheet.create({
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
