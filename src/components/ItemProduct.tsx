import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomImage from './CustomImage';
import CustomText from './CustomText';
import Money from './Money';
import {TITLE_ACTIVE} from '@assets/colors';
import Button from './Button';
import IconSvg from './IconSvg';
import {AppIcon} from '@assets/icons';

type Props = {
  actionLike?: any;
};

const ItemProduct = (props: Props) => {
  const {actionLike} = props;
  return (
    <View style={styles.container}>
      <View>
        <CustomImage style={styles.styleImage} />
        <Button style={styles.buttonLike} onPress={() => actionLike()}>
          <IconSvg source={AppIcon.HEART} width={18} height={18} />
        </Button>
      </View>
      <View style={styles.viewContent}>
        <CustomText small color={TITLE_ACTIVE}>
          21WN
        </CustomText>
        <CustomText small>reversible angora cardigan</CustomText>
        <Money value={120} />
      </View>
    </View>
  );
};

export default ItemProduct;

const styles = StyleSheet.create({
  container: {
    width: 165,
    borderRadius: 4,
  },
  buttonLike: {
    position: 'absolute',
    zIndex: 2,
    bottom: 6,
    right: 9,
  },
  styleImage: {
    height: 220,
  },
  viewContent: {paddingHorizontal: 4, marginTop: 8},
});
