import {LABEL, TITLE_ACTIVE, WHITE} from '@assets/colors';
import {AppIcon} from '@assets/icons';
import {pxScale} from '@utils/func';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './Button';
import CustomText from './CustomText';
import IconSvg from './IconSvg';

const Footer = () => {
  return (
    <View style={styles.container}>
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
      <View style={styles.viewLineAndLozenge}>
        <View style={styles.line} />
        <View style={styles.viewLozenge} />
      </View>
      <View style={styles.viewInfo}>
        <CustomText subTitle16 height={30}>
          support@openui.design
        </CustomText>
        <CustomText subTitle16 height={30}>
          +60 825 876
        </CustomText>
        <CustomText subTitle16 height={30}>
          08:00 - 22:00 - Everyday
        </CustomText>
      </View>
      <View style={styles.viewLineAndLozenge}>
        <View style={styles.line} />
        <View style={styles.viewLozenge} />
      </View>
      <View style={styles.viewFooter}>
        <View style={styles.viewButton}>
          <Button>
            <CustomText large color={TITLE_ACTIVE}>
              About
            </CustomText>
          </Button>
          <Button>
            <CustomText large color={TITLE_ACTIVE}>
              Contact
            </CustomText>
          </Button>
          <Button>
            <CustomText large color={TITLE_ACTIVE}>
              Blog
            </CustomText>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'WHITE',
  },
  containerSocial: {
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewSocial: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 140,
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
    marginTop: 24,
  },
  viewFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 23,
  },
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
  },
  viewInfo: {alignItems: 'center', justifyContent: 'center', marginTop: 19},
});
