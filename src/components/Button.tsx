import React from 'react';
import {Keyboard, Platform, StyleSheet, TouchableOpacity} from 'react-native';
import {TouchableOpacity as ButtonThird} from 'react-native-gesture-handler';

type Props = {
  flex?: boolean;
  row?: boolean;
  column?: boolean;
  center?: boolean;
  middle?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  space?: string;
  wrap?: boolean;
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
  animated?: boolean;
  shadow?: boolean;
  primary?: boolean;
  secondary?: boolean;
  isThirdSide?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  opacity?: number;
  props?: any;
  children?: any;
  hitSlop?: {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  };
  ba?: {
    width: number;
    color: string;
  };
  bb?: {
    width: number;
    color: string;
  };
  bt?: {
    width: number;
    color: string;
  };
  br?: {
    width: number;
    color: string;
  };
  bl?: {
    width: number;
    color: string;
  };
  radius?: number;
  width?: number | string;
  height?: number | string;
  bg?: string;
  loading?: boolean;
  delayLongPress?: number;
  onLongPress?: () => void;
};

const Button: React.FC<Props> = props => {
  const {
    children,
    shadow,
    flex,
    row,
    center,
    middle,
    left,
    right,
    top,
    bottom,
    space,
    wrap,
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
    opacity,
    isThirdSide,
    disabled,
    onPress,
    hitSlop,
    ba,
    bb,
    bt,
    br,
    bl,
    radius,
    width,
    height,
    bg,
    loading,
    onLongPress,
  } = props;
  const buttonStyles: any = [
    flex && {flex: 1},
    row && styles.row,
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    shadow && styles.shadow,
    space && {justifyContent: `space-${space}`},
    wrap && {flexWrap: 'wrap'},
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
    ba && {borderWidth: ba.width, borderColor: ba.color},
    bb && {borderBottomWidth: bb.width, borderBottomColor: bb.color},
    bt && {borderTopWidth: bt.width, borderTopColor: bt.color},
    bl && {borderLeftWidth: bl.width, borderLeftColor: bl.color},
    br && {borderRightWidth: br.width, borderRightColor: br.color},
    radius && {borderRadius: radius},
    width && {width},
    height && {height},
    bg && {backgroundColor: bg},
    style,
  ];

  let isAbsolute = style?.position === 'absolute';

  if (Platform.OS === 'ios') {
    return (
      <TouchableOpacity
        {...props}
        style={buttonStyles}
        activeOpacity={opacity || 0.85}
        onPress={() => {
          if (!disabled && !loading) {
            onPress && onPress();
            Keyboard.dismiss();
          }
        }}
        onLongPress={() => {
          if (!disabled || !loading) {
            onLongPress && onLongPress();
            Keyboard.dismiss();
          }
        }}
        hitSlop={hitSlop}>
        {children}
      </TouchableOpacity>
    );
  }

  const _button = () => {
    return isThirdSide || isAbsolute ? (
      <ButtonThird
        {...props}
        style={buttonStyles}
        activeOpacity={opacity || 0.85}
        onPress={() => {
          if (!disabled || !loading) {
            onPress && onPress();
            Keyboard.dismiss();
          }
        }}
        onLongPress={() => {
          if (!disabled || !loading) {
            onLongPress && onLongPress();
            Keyboard.dismiss();
          }
        }}
        hitSlop={hitSlop}>
        {children}
      </ButtonThird>
    ) : (
      <TouchableOpacity
        {...props}
        style={buttonStyles}
        activeOpacity={opacity || 0.85}
        onPress={() => {
          if (!disabled || !loading) {
            onPress && onPress();
            Keyboard.dismiss();
          }
        }}
        onLongPress={() => {
          if (!disabled || !loading) {
            onLongPress && onLongPress();
            Keyboard.dismiss();
          }
        }}
        hitSlop={hitSlop}>
        {children}
      </TouchableOpacity>
    );
  };
  return _button();
};

export default Button;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },

  middle: {
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  top: {
    justifyContent: 'flex-start',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  shadow: {
    shadowColor: 'rgba(9, 9, 9, .2)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.41,
    elevation: 3,
    backgroundColor: 'white',
  },
});
