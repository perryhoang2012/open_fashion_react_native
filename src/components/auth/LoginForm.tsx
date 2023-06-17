import Button from '@components/Button';
import {InputField} from '@components/form';
import {LoginPayload} from '@models/auth';
import * as React from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export interface LoginFormProps {
  onSubmit?: (payLoad: LoginPayload) => void;
}
// login form sẽ giúp mình xử lý lấy value input của user rồi validate thông tin đó có hợp lệ hay không nếu hợp lệ thì componet cha sẽ xử lý cái việc submit đó
export function LoginForm({onSubmit}: LoginFormProps) {
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
    console.log('trigger submit');
    onSubmit?.(payload);
  };
  return (
    <View>
      <InputField control={control} name="email" />
      <InputField control={control} name="password" />
      <Button
        onPress={handleSubmit(handleFormSubmit)}
        style={{
          width: 100,
          height: 40,
          borderWidth: 1,
          borderRadius: 5,
        }}
      />
    </View>
  );
}
