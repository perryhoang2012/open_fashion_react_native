import {SECONDARY} from '@assets/colors';
import {formatMoney} from '@utils/func';
import React from 'react';
import CustomText from './CustomText';

type Props = {
  value: Number;
};

const Money = (props: Props) => {
  const {value} = props;
  return (
    <CustomText size={15} color={SECONDARY} height={24}>
      {formatMoney(value)}
    </CustomText>
  );
};

export default React.memo(Money);
