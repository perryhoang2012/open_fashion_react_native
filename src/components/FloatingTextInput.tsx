import {BODY} from '@assets/colors';
import {AppIcon} from '@assets/icons';
import React, {Dispatch, SetStateAction, useRef} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import Button from './Button';
import CustomText from './CustomText';
import IconSvg from './IconSvg';

type Props = {
  label?: string;
  value?: string;
  onChangeValue: Dispatch<SetStateAction<any>>;
  styleInput?: ViewStyle;
  error?: string;
  showError?: boolean;
  isPassword?: boolean;
  actionOnBlur?: () => void;
  showPassword?: () => void;
};

const FloatingTextInput = (props: Props) => {
  const {
    label,
    value,
    onChangeValue,
    styleInput,
    error,
    showError,
    isPassword,
    actionOnBlur,
    showPassword,
  } = props;

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

  const onBlur = () => {
    if (!value) {
      Animated.timing(animatedValue?.current, {
        toValue: 0,
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
    typeof actionOnBlur === 'function' && actionOnBlur();
  };

  return (
    <View>
      <Animated.View style={[styles.subContainer, styleInput, viewStyles]}>
        <Animated.Text style={[returnAnimatedTitleStyles, styles.textStyle]}>
          {label}
        </Animated.Text>
        <TextInput
          secureTextEntry={isPassword}
          onChangeText={onChangeValue}
          value={value}
          style={styles.textInputStyle}
          onBlur={onBlur}
          onFocus={onFocus}
        />

        {typeof showPassword === 'function' && (
          <Button
            style={styles.buttonShowPassword}
            onPress={() => {
              showPassword();
            }}>
            <IconSvg
              source={isPassword ? AppIcon.EYE : AppIcon.HIDE_EYE}
              width={20}
              height={30}
            />
          </Button>
        )}
      </Animated.View>
      {showError ? (
        <CustomText small height={20} mt={4}>
          *{error}
        </CustomText>
      ) : (
        <></>
      )}
    </View>
  );
};

export default FloatingTextInput;

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
