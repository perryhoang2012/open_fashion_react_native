import React from 'react';
import {SvgCss} from 'react-native-svg';

type Props = {
  width: number;
  height: number;
  source: string;
};

const IconSvg = (props: Props) => {
  const {width, height, source} = props;
  return <SvgCss width={width} height={height} xml={source} />;
};

export default React.memo(IconSvg);
