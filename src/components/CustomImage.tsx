import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {createImageProgress} from 'react-native-image-progress';
const ImageProgress = createImageProgress(FastImage);
import PropTypes from 'prop-types';
import {LOGO} from '@assets/images';

type Props = {
  style: StyleProp<ViewStyle>;
  haveLoading?: boolean;
  source?: string;
};

const CustomImage = (props: Props) => {
  const [errorUrl, setErrorUrl] = useState(false);

  const onError = () => {
    setErrorUrl(true);
  };
  return (
    <ImageProgress
      indicator={() => {
        if (props.haveLoading) {
          return <FastImage style={styles.linearGradientStyle} source={LOGO} />;
        }
        return null;
      }}
      {...props}
      source={errorUrl ? LOGO : props.source}
      onError={() => {
        onError();
      }}
      style={[styles.imgStyle, props.style]}
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
  linearGradientStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  imgStyle: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
});
