import {LABEL, WHITE} from '@assets/colors';
import {AppIcon} from '@assets/icons';
import Button from '@components/Button';
import CustomText from '@components/CustomText';
import IconSvg from '@components/IconSvg';
import {pxScale} from '@utils/func';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export interface FooterDrawerProps {}

export function FooterDrawer() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.itemFooter}>
        <IconSvg source={AppIcon.CALL} width={24} height={24} />
        <CustomText subTitle16 ml={15}>
          (786) 713-8616
        </CustomText>
      </View>
      <View style={styles.itemFooter}>
        <IconSvg source={AppIcon.LOCATION} width={24} height={24} />
        <CustomText subTitle16 ml={15}>
          Store locator
        </CustomText>
      </View>
      <View style={styles.viewLineAndLozenge}>
        <View style={styles.line} />
        <View style={styles.viewLozenge} />
      </View>

      <View style={styles.containerSocial}>
        <View style={styles.viewSocial}>
          <Button>
            <IconSvg source={AppIcon.TWITTER} width={24} height={24} />
          </Button>
          <Button>
            <IconSvg source={AppIcon.INSTAGRAM} width={24} height={24} />
          </Button>
          <Button>
            <IconSvg source={AppIcon.YOUTUBE} width={24} height={24} />
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  viewLozenge: {
    width: 10,
    height: 10,
    borderColor: LABEL,
    borderWidth: 1,
    transform: [{rotate: '45deg'}],
    position: 'absolute',
    backgroundColor: WHITE,
  },

  line: {
    width: pxScale.wp(125),
    height: pxScale.hp(1),
    backgroundColor: LABEL,
  },
  viewLineAndLozenge: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
  },
  containerSocial: {
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  viewSocial: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 140,
  },
});
