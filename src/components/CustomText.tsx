import {TEXT} from '@assets/colors';
import {pxScale} from '@utils/func';
import React from 'react';
import {StyleSheet, Text, TextBase} from 'react-native';

type Props = {
  flex?: boolean;
  center?: boolean;
  left?: boolean;
  right?: boolean;
  style?: any;
  pa?: number;
  px?: number;
  py?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  ma?: number;
  mx?: number;
  my?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
  primary?: boolean;
  secondary?: boolean;
  title?: boolean;
  subTitle16?: boolean;
  subTitle14?: boolean;
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  size?: number;
  weight?: string | number;
  height?: number;
  color?: string;
  numberOfLines?: number;
  italic?: boolean;
  children?: any;
};

const CustomText: React.FC<Props> = props => {
  const {
    children,
    flex,
    center,
    left,
    right,
    style,
    pa,
    px,
    py,
    pl,
    pr,
    pt,
    pb,
    ma,
    mx,
    my,
    ml,
    mr,
    mt,
    mb,
    size,
    weight,
    height,
    color,
    italic,
    title,
    subTitle16,
    subTitle14,
    large,
    medium,
    small,
  } = props;

  const textStyles: any = [
    {color: TEXT, fontFamily: 'TenorSans'},
    !size && {lineHeight: 20},
    flex && {flex: 1},
    center && styles.center,
    left && styles.left,
    right && styles.right,
    title && {
      weight: '400',
      fontSize: pxScale.fontSize(18),
      lineHeight: pxScale.hp(40),
      color: '#202224',
      letterSpacing: 4,
    },
    subTitle16 && {
      weight: '400',
      fontSize: pxScale.fontSize(16),
      lineHeight: pxScale.hp(24),
      color: '#202224',
      letterSpacing: 2,
    },
    subTitle14 && {
      weight: '400',
      fontSize: pxScale.fontSize(14),
      lineHeight: pxScale.hp(20),
      color: '#202224',
      letterSpacing: 2,
    },
    large && {
      weight: '400',
      fontSize: pxScale.fontSize(16),
      lineHeight: pxScale.hp(24),
    },
    medium && {
      weight: '400',
      fontSize: pxScale.fontSize(14),
      lineHeight: pxScale.hp(24),
    },
    small && {
      weight: '400',
      fontSize: pxScale.fontSize(12),
      lineHeight: pxScale.hp(18),
    },
    pa && {padding: pa},
    px && {paddingHorizontal: px},
    py && {paddingVertical: py},
    pl && {paddingLeft: pl},
    pr && {paddingRight: pr},
    pt && {paddingTop: pt},
    pb && {paddingBottom: pb},
    ma && {margin: ma},
    mx && {marginHorizontal: mx},
    my && {marginVertical: my},
    ml && {marginLeft: ml},
    mr && {marginRight: mr},
    mt && {marginTop: mt},
    mb && {marginBottom: mb},
    color && {color},
    height && {lineHeight: height},
    weight && {
      fontWeight: weight,
    },
    size && {fontSize: size},
    italic && {fontStyle: 'italic'},
    style,
  ];

  return (
    <Text {...props} style={textStyles}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
});
