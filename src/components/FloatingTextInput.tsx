import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import React, {Dispatch, SetStateAction, useRef} from 'react';
import {Animated} from 'react-native';
import {Easing} from 'react-native';
import {TextInput} from 'react-native';
import {BODY} from '@assets/colors';
import CustomText from './CustomText';

type Props = {
  label?: string;
  value?: string;
  onChangeValue: Dispatch<SetStateAction<any>>;
  styleInput?: StyleProp<ViewStyle>;
  error?: string;
  showError?: boolean;
};

const FloatingTextInput = (props: Props) => {
  const {label, value, onChangeValue, styleInput, error, showError} = props;

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
  };

  return (
    <>
      <Animated.View style={[styles.subContainer, styleInput, viewStyles]}>
        <Animated.Text style={[returnAnimatedTitleStyles, styles.textStyle]}>
          {label}
        </Animated.Text>
        <TextInput
          onChangeText={onChangeValue}
          value={value}
          style={styles.textInputStyle}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </Animated.View>
      {showError ? (
        <CustomText small height={20} mt={4}>
          *{error}
        </CustomText>
      ) : (
        <></>
      )}
    </>
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
});
