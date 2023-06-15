import {LOGO} from '@assets/images';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Falsy,
  ImageStyle,
  RecursiveArray,
  RegisteredStyle,
  StyleSheet,
} from 'react-native';
import FastImage from 'react-native-fast-image';

type Props = {
  style?:
    | Falsy
    | ImageStyle
    | RegisteredStyle<ImageStyle>
    | RecursiveArray<Falsy | ImageStyle | RegisteredStyle<ImageStyle>>;
  haveLoading?: boolean;
  source?: string;
};

const CustomImage = (props: Props) => {
  const {source, style} = props;
  return (
    <FastImage
      source={source || LOGO}
      resizeMode="stretch"
      style={[styles.imgStyle, style]}
    />
  );
};

CustomImage.propTypes = {
  haveLoading: PropTypes.bool,
};
CustomImage.defaultProps = {
  haveLoading: true,
};

export default CustomImage;

const styles = StyleSheet.create({
  imgStyle: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
});
