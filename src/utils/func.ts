import React from 'react';
import {Dimensions} from 'react-native';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const pxScale = {
  wp(px: number): number {
    return scale(px);
  },

  hp(px: number): number {
    return verticalScale(px);
  },

  fontSize(px: number): number {
    return moderateScale(px);
  },
};
