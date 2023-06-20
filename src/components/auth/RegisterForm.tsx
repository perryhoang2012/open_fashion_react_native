import {TITLE_ACTIVE, WHITE} from '@assets/colors';
import Button from '@components/Button';
import CustomText from '@components/CustomText';
import {InputField} from '@components/form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useCustomNavigation} from '@hooks/useCustomNavigation';
import {RegisterPayload} from '@models/auth';
import {registerSchema} from '@utils/ValidationSchema';
import * as React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';

export interface RegisterFormProps {
  onSubmit?: (payLoad: RegisterPayload) => void;
}
export function RegisterForm({onSubmit}: RegisterFormProps) {
  const navigation = useCustomNavigation();

  const {control, handleSubmit} = useForm<RegisterPayload>({
    defaultValues: {
      email: '',
      password: '',
      phone: '',
      confirmPassword: '',
    },
    resolver: yupResolver(registerSchema),
  });
  const handleFormSubmit = (payload: RegisterPayload) => {
    onSubmit?.(payload);
  };
  return (
    <View>
      <InputField control={control} name="email" label="Email" />
      <InputField
        control={control}
        name="phone"
        isPassword={true}
        label="Phone Number"
      />
      <InputField
        control={control}
        name="password"
        isPassword={true}
        label="Password"
      />
      <InputField
        control={control}
        name="confirmPassword"
        isPassword={true}
        label="ReEnter Password"
      />
      <View style={styles.viewButtonLogin}>
        <Button
          px={30}
          py={8}
          style={{backgroundColor: TITLE_ACTIVE}}
          onPress={handleSubmit(handleFormSubmit)}>
          <CustomText medium color={WHITE}>
            Sign Up
          </CustomText>
        </Button>
      </View>
      <View style={styles.viewButtonGoToSignIn}>
        <Button onPress={() => navigation.goBack()}>
          <CustomText small>Go back Login ?</CustomText>
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
