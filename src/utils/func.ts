import {Dimensions} from 'react-native';
export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import DeviceInfo from 'react-native-device-info';

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

export const formatMoney = (number: Number) => {
  if (Number.isNaN(number)) {
    return '$0';
  }
  return number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const isSimulator = () => {
  // https://github.com/react-native-community/react-native-device-info#isemulator
  return DeviceInfo.isEmulator();
};

export const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateEmail = (email: string) => {
  if (regexEmail.test(email)) {
    return true;
  } else {
    return false;
  }
};
export const regexPhone = new RegExp(/^\+?1?(\d{3})(\d{3})(\d{4})$/g);
