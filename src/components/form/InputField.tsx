import {BODY} from '@assets/colors';
import {AppIcon} from '@assets/icons';
import Button from '@components/Button';
import CustomText from '@components/CustomText';
import IconSvg from '@components/IconSvg';
import React, {useRef, useState} from 'react';
import {Control, useController} from 'react-hook-form';
import {
  Animated,
  Easing,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

export interface InputFieldProps extends TextInputProps {
  isPassword?: boolean;
  name: string;
  label?: string;
  control: Control<any>;
  styleInput?: StyleProp<ViewStyle>;
}
export function InputField({
  styleInput,
  isPassword,
  label,
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
  const {EYE, HIDE_EYE} = AppIcon;
  const [showPassword, setShowPassword] = useState(false);
  const titleActiveSize = 12,
    titleInActiveSize = 15,
    titleActiveColor = '#979797',
    titleInactiveColor = '#979797';

  const animatedValue = useRef(new Animated.Value(0));

  const returnAnimatedTitleStyles = {
    transform: [
      {
        translateY: animatedValue?.current?.interpolate({
          inputRange: [0, 1],
          outputRange: [22, -4],
          extrapolate: 'clamp',
        }),
      },
    ],
    fontSize: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInActiveSize, titleActiveSize],
      extrapolate: 'clamp',
    }),
    color: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInactiveColor, titleActiveColor],
    }),
  };

  const viewStyles = {
    borderBottomColor: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: ['#D4D4D4', '#D4D4D4'],
    }),
    borderBottomWidth: 1,
  };

  const onFocus = () => {
    Animated.timing(animatedValue?.current, {
      toValue: 1,
      duration: 500,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  };

  const onBlurInputBlur = () => {
    if (!value) {
      Animated.timing(animatedValue?.current, {
        toValue: 0,
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
    onBlur();
  };

  return (
    // render whatever you want : library UI or custom UI ,etc...
    <View
      style={{
        marginTop: 20,
      }}>
      <Animated.View style={[styles.subContainer, styleInput, viewStyles]}>
        <Animated.Text style={[returnAnimatedTitleStyles, styles.textStyle]}>
          {label}
        </Animated.Text>
        <TextInput
          secureTextEntry={isPassword}
          onChangeText={onChange}
          value={value}
          style={styles.textInputStyle}
          onBlur={onBlurInputBlur}
          onFocus={onFocus}
          ref={ref}
          {...rest}
        />

        {typeof showPassword === 'function' && (
          <Button
            style={styles.buttonShowPassword}
            onPress={() => setShowPassword((prev: boolean) => !prev)}>
            <IconSvg
              source={showPassword ? EYE : HIDE_EYE}
              width={20}
              height={30}
            />
          </Button>
        )}
      </Animated.View>
      {error ? (
        <CustomText small height={20} mt={4}>
          *{error?.message}
        </CustomText>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {},
  textStyle: {
    fontFamily: 'TenorSans',
    fontWeight: '400',
    lineHeight: 14,
  },
  textInputStyle: {
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'TenorSans',
    lineHeight: 19,
    color: BODY,
  },
  buttonShowPassword: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 2,
  },
});
