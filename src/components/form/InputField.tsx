import * as React from 'react';
import {Control, useController} from 'react-hook-form';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

export interface InputFieldProps extends TextInputProps {
  name: string;
  label?: string;
  control: Control<any>;
}

export function InputField({
  name,
  control,
  onChangeText: _externalOnChangeText,
  value: _externalValue,
  onBlur: _externalOnBlur,
  ref: _externalRef,
  ...rest
}: InputFieldProps & {
  ref?: React.Ref<TextInput>;
}) {
  const {
    field: {onChange, onBlur, value, ref},
    fieldState: {error},
  } = useController({
    name,
    control,
  });
  console.log('error', error);

  return (
    // render whatever you want : libary UI or custom UI ,etc...
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      ref={ref}
      {...rest}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    width: 100,
    height: 40,
    borderWidth: 1,
  },
});
