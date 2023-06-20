import {WHITE} from '@assets/colors';
import {AppIcon} from '@assets/icons';
import {LOGO} from '@assets/images';
import {useSafeAreaInsetsCustom} from '@hooks/useSafeAreaInsetsCustom';
import {pxScale} from '@utils/func';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './Button';
import CustomImage from './CustomImage';
import IconSvg from './IconSvg';
import {useCustomNavigation} from '@hooks/useCustomNavigation';

const Header = () => {
  const navigation = useCustomNavigation();
  return (
    <View
      style={[styles.container, {marginTop: useSafeAreaInsetsCustom().top}]}>
      <Button
        style={styles.buttonDrawer}
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <IconSvg source={AppIcon.MENU} width={24} height={24} />
      </Button>
      <View style={styles.viewLogo}>
        <CustomImage
          source={LOGO}
          style={{
            width: pxScale.wp(79),
            height: pxScale.hp(32),
            marginTop: pxScale.hp(10),
          }}
        />
      </View>

      <View style={styles.viewRight}>
        <Button>
          <IconSvg source={AppIcon.SEARCH} width={24} height={24} />
        </Button>
        <Button style={{marginLeft: 16}}>
          <IconSvg source={AppIcon.SHOPPING_BAG} width={24} height={24} />
        </Button>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: pxScale.hp(55),
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    backgroundColor: WHITE,
  },
  buttonDrawer: {
    marginTop: pxScale.hp(16),
    flex: 2,
  },
  viewRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: pxScale.hp(16),
    flex: 2,
  },
  viewLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 4,
  },
});
